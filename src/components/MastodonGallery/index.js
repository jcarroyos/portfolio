import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { fetchMastodonPosts } from '@site/src/services/mastodon';
import './style.css';

Modal.setAppElement("#__docusaurus");

export function MastodonGallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [listOfImages, setListOfImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const postsWithMedia = await fetchMastodonPosts();
        const images = postsWithMedia.flatMap(post => post.media_preview_urls.map((url, index) => ({
          previewUrl: url,
          fullUrl: post.media_urls[index],
          post
        })));
        setListOfImages(images);
      } catch (error) {
        console.error('Error fetching Mastodon posts:', error.message);
      }
    }
    fetchData();
  }, []);

  const handleOpenModal = (image) => {
    setShowModal(true);
    setSelectedImage(image.fullUrl);
    setSelectedPost(image.post);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedPost(null);
  };

  return (
    <>
      <div className="gallery-container">
        {listOfImages.map((image, index) => (
          <figure key={index}>
            <img
              src={image.previewUrl}
              alt={`Image ${index + 1}`}
              onClick={() => handleOpenModal(image)}
            />
            <figcaption>
              {image.post.id}
            </figcaption>
          </figure>
        ))}
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Image Preview"
      >
        <div className="close" onClick={handleCloseModal}>
          ✖️
        </div>
        <div className="modal-content">
          <div className="modal-image-container">
            <img src={selectedImage} alt="Selected" />
          </div>
          {selectedPost && (
            <div className="post-metadata">
              <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
              <p><strong>Created At:</strong> {new Date(selectedPost.created_at).toLocaleString()}</p>
              <p><strong>Source post:</strong> <a href={selectedPost.url} target="_blank" rel="noopener noreferrer">{selectedPost.url}</a></p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}