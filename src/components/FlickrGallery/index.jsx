import React, { useState, useEffect, useRef, useCallback } from 'react';
import Modal from 'react-modal';
import { fetchPaginatedPosts } from '@site/src/services/flickr';
import './style.css';

Modal.setAppElement("#__docusaurus");

export default function FlickrGallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [listOfImages, setListOfImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4;
  const observer = useRef();

  useEffect(() => {
    fetchMoreData();
  }, [currentPage]);

  const fetchMoreData = async () => {
    try {
      const { photos, hasNext } = await fetchPaginatedPosts(limit, currentPage);
      setListOfImages(prevImages => [...prevImages, ...photos]);
      setHasMore(hasNext);
    } catch (error) {
      console.error('Error fetching Flickr photos:', error.message);
    }
  };

  const lastPhotoElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setCurrentPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore]);

  const handleOpenModal = (image, photo) => {
    setSelectedImage(image);
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedPhoto(null);
  };

  return (
    <>
      <div className="gallery-container">
        {listOfImages.map((image, index) => {
          if (index === listOfImages.length - 1) {
            return (
              <figure key={index} ref={lastPhotoElementRef}>
                <img
                  src={image.previewUrl}
                  alt={`Image ${index + 1}`}
                  onClick={() => handleOpenModal(image.fullUrl, image)}
                />
                <figcaption>
                  {image.id}
                </figcaption>
              </figure>
            );
          } else {
            return (
              <figure key={index}>
                <img
                  src={image.previewUrl}
                  alt={`Image ${index + 1}`}
                  onClick={() => handleOpenModal(image.fullUrl, image)}
                />
                <figcaption>
                  {image.id}
                </figcaption>
              </figure>
            );
          }
        })}
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
          {selectedPhoto && (
            <div className="photo-metadata">
              <p><strong>Photo ID:</strong> {selectedPhoto.id}</p>
              <p><strong>Title:</strong> {selectedPhoto.title}</p>
              <p><strong>Description:</strong> {selectedPhoto.description}</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}