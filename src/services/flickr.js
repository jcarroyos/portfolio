const BASE_URL = 'https://api.flickr.com/services/rest/';
const API_KEY = '6134f75e68f436e3a25fcdb105f0c8e6';
const USER_ID = '43665845@N06';

/**
 * Fetch data using JSONP to avoid CORS issues
 * @param {string} url - The URL to fetch
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<Object>} - The response data
 */
function fetchJSONP(url, timeout = 15000) {
  return new Promise((resolve, reject) => {
    const callbackName = `flickr_jsonp_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    let timeoutId;
    
    // Clean up function
    const cleanup = () => {
      if (window[callbackName]) {
        delete window[callbackName];
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const script = document.getElementById(callbackName);
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
    
    // Set up timeout
    timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error('JSONP request timeout'));
    }, timeout);
    
    // Set up callback function
    window[callbackName] = function(data) {
      cleanup();
      if (data.stat === 'fail') {
        reject(new Error(data.message || 'Flickr API error'));
      } else {
        resolve(data);
      }
    };
    
    // Create script element
    const script = document.createElement('script');
    script.id = callbackName;
    script.async = true;
    script.src = `${url}&jsoncallback=${callbackName}`;
    
    // Handle errors
    script.onerror = function() {
      cleanup();
      reject(new Error('JSONP script loading failed'));
    };
    
    // Add script to head to execute
    document.head.appendChild(script);
  });
}

/**
 * Fetch paginated Flickr photos using JSONP to avoid CORS issues.
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
  url.searchParams.append('per_page', limit);
  url.searchParams.append('page', page);
  url.searchParams.append('extras', 'description,date_upload,date_taken,owner_name,tags');

  try {
    const data = await fetchJSONP(url.toString());

    if (data.stat !== 'ok') {
      throw new Error(`Flickr API error: ${data.message || 'Unknown error'}`);
    }

    // Process photos without making additional API calls for each photo
    const photos = data.photos.photo.map((photo) => {
      return {
        id: photo.id,
        previewUrl: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`,
        fullUrl: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,
        title: photo.title,
        description: photo.description?._content || 'No description available',
        createdAt: photo.dateupload,
        url: `https://www.flickr.com/photos/${USER_ID}/${photo.id}`
      };
    });

    const hasNext = data.photos.page < data.photos.pages;
    const hasPrevious = data.photos.page > 1;
    const totalPhotos = data.photos.total;

    return { photos, hasNext, hasPrevious, totalPhotos };
  } catch (error) {
    console.error('Error in fetchPaginatedPosts:', error);
    
    // Fallback: return empty result instead of throwing
    return { 
      photos: [], 
      hasNext: false, 
      hasPrevious: false, 
      totalPhotos: 0 
    };
  }
}

export { fetchPaginatedPosts };