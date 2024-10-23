import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { fetchMastodonPosts } from '@site/src/services/mastodon';
import './style.css';

Modal.setAppElement("#__docusaurus");

function Pagination({ onNext, onPrevious, hasNext, hasPrevious }) {
  return (
    <div className="pagination">
      <button onClick={onPrevious} disabled={!hasPrevious}>Previous</button>
      <button onClick={onNext} disabled={!hasNext}>Next</button>
    </div>
  );
}

export function MastodonGallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [listOfImages, setListOfImages] = useState([]);
  const [maxId, setMaxId] = useState(null);
  const [sinceId, setSinceId] = useState(null);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const limit = 8;

  useEffect(() => {
    async function fetchData() {
      try {
        const postsWithMedia = await fetchMastodonPosts(maxId, sinceId, limit);
        const images = postsWithMedia.flatMap(post => post.media_preview_urls.map((url, index) => ({
          previewUrl: url,
          fullUrl: post.media_urls[index],
          post
        })));
        setListOfImages(images);
        setHasNext(postsWithMedia.length === limit);
        setHasPrevious(maxId !== null || sinceId !== null);
      } catch (error) {
        console.error('Error fetching Mastodon posts:', error.message);
      }
    }
    fetchData();
  }, [maxId, sinceId]);

  const handleOpenModal = (image, post) => {
    setSelectedImage(image);
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleNext = () => {
    if (listOfImages.length > 0) {
      setMaxId(listOfImages[listOfImages.length - 1].post.id);
      setSinceId(null);
    }
  };

  const handlePrevious = () => {
    if (listOfImages.length > 0) {
      setSinceId(listOfImages[0].post.id);
      setMaxId(null);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedPost(null);
  };

  return (
    <div>
      <div className="gallery-container">
        {listOfImages.map((image, index) => (
          <figure key={index}>
            <img
              src={image.previewUrl}
              alt={`Image ${index + 1}`}
              onClick={() => handleOpenModal(image.fullUrl, image.post)}
            />
            <figcaption>
              {image.post.id}
            </figcaption>
          </figure>
        ))}
      </div>
      <Pagination
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
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
    </div>
  );
}