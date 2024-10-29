const BASE_URL = 'https://api.flickr.com/services/rest/';
const API_KEY = '6134f75e68f436e3a25fcdb105f0c8e6';
const USER_ID = '43665845@N06';

/**
 * Fetch paginated Flickr photos.
 * @param {number} limit - The number of photos to fetch.
 * @param {number} page - The page number to fetch.
 * @returns {Promise<Object>} - The paginated photos, pagination info, and total photos count.
 */
async function fetchPaginatedPosts(limit = 6, page = 1) {
  const url = new URL(BASE_URL);
  url.searchParams.append('method', 'flickr.people.getPhotos');
  url.searchParams.append('api_key', API_KEY);
  url.searchParams.append('user_id', USER_ID);
  url.searchParams.append('format', 'json');
  url.searchParams.append('nojsoncallback', '1');
  url.searchParams.append('per_page', limit);
  url.searchParams.append('page', page); // Use the dynamic page parameter

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Error fetching Flickr photos: ${response.statusText}`);
    }

    const data = await response.json();

    const photos = await Promise.all(data.photos.photo.map(async (photo) => {
      const photoInfoResponse = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${photo.id}&format=json&nojsoncallback=1`);
      const photoInfoData = await photoInfoResponse.json();

      return {
        id: photo.id,
        previewUrl: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`,
        fullUrl: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,
        title: photo.title,
        description: photoInfoData.photo.description._content || 'No description available', // Get description from detailed info
        createdAt: photo.dateupload,
        url: `https://www.flickr.com/photos/${USER_ID}/${photo.id}`
      };
    }));

    const hasNext = data.photos.page < data.photos.pages;
    const hasPrevious = data.photos.page > 1;
    const totalPhotos = data.photos.total;

    return { photos, hasNext, hasPrevious, totalPhotos };
  } catch (error) {
    console.error('Error in fetchPaginatedPosts:', error);
    throw error;
  }
}

export { fetchPaginatedPosts };