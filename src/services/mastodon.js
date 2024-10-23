const axios = require('axios');

async function fetchMastodonPosts(max_id = null, since_id = null, limit = 8) {
  try {
    let url = `https://mastodon.art/api/v1/accounts/109602978503620324/statuses?limit=${limit}`;
    if (max_id) url += `&max_id=${max_id}`;
    if (since_id) url += `&since_id=${since_id}`;

    const response = await axios.get(url);
    const posts = response.data;
    const postsWithMedia = posts.map(post => ({
      ...post,
      media_preview_urls: post.media_attachments.map(attachment => attachment.preview_url),
      media_urls: post.media_attachments.map(attachment => attachment.url)
    }));
    return postsWithMedia;
  } catch (error) {
    console.error('Error fetching Mastodon posts:', error.message);
    throw error;
  }
}

module.exports = {
  fetchMastodonPosts,
};