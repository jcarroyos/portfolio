// src/services/mastodon.js
const axios = require('axios');

async function fetchMastodonPosts() {
  try {
    const response = await axios.get('https://mastodon.art/api/v1/accounts/109602978503620324/statuses');
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