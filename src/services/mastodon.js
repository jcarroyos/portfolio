const BASE_URL = 'https://mastodon.art/api/v1/accounts/109602978503620324/statuses';
const ACCOUNT_URL = 'https://mastodon.art/api/v1/accounts/109602978503620324';

/**
 * Fetch paginated Mastodon posts.
 * @param {string|null} maxId - The maximum ID of the posts to fetch.
 * @param {string|null} sinceId - The minimum ID of the posts to fetch.
 * @param {number} limit - The number of posts to fetch.
 * @returns {Promise<Object>} - The paginated posts, pagination info, and total posts count.
 */
async function fetchPaginatedPosts(maxId = null, sinceId = null, limit = 12) {
  const url = new URL(BASE_URL);
  url.searchParams.append('limit', limit);
  if (maxId) url.searchParams.append('max_id', maxId);
  if (sinceId) url.searchParams.append('since_id', sinceId);

  try {
    const [response, accountResponse] = await Promise.all([
      fetch(url.toString()),
      fetch(ACCOUNT_URL)
    ]);

    if (!response.ok) {
      throw new Error(`Error fetching Mastodon posts: ${response.statusText}`);
    }
    if (!accountResponse.ok) {
      throw new Error(`Error fetching Mastodon account info: ${accountResponse.statusText}`);
    }

    const data = await response.json();
    const accountData = await accountResponse.json();

    const posts = data.map(post => {
      // Get all media attachments, not just the first one
      const mediaAttachments = post.media_attachments || [];
      
      return {
        id: post.id,
        // First image is used for the grid preview
        previewUrl: mediaAttachments[0]?.preview_url || '',
        fullUrl: mediaAttachments[0]?.url || '',
        // Save all media attachments
        mediaAttachments: mediaAttachments.map(media => ({
          id: media.id,
          previewUrl: media.preview_url,
          fullUrl: media.url,
          type: media.type,
          description: media.description
        })),
        content: post.content,
        createdAt: post.created_at,
        url: post.url
      };
    }).filter(post => post.previewUrl && post.fullUrl);

    const hasNext = data.length === limit;
    const hasPrevious = !!sinceId;
    const totalPostsWithImages = accountData.statuses_count;

    return { posts, hasNext, hasPrevious, totalPosts: totalPostsWithImages };
  } catch (error) {
    console.error('Error in fetchPaginatedPosts:', error);
    throw error;
  }
}

export { fetchPaginatedPosts };