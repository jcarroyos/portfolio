import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchPaginatedPosts } from '@site/src/services/mastodon';
import './style.css';

Modal.setAppElement("#__docusaurus");

export default function MastodonGallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [listOfImages, setListOfImages] = useState([]);
  const [maxId, setMaxId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const limit = 12;

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    try {
      const { posts, hasNext } = await fetchPaginatedPosts(maxId, null, limit);
      setListOfImages(prevImages => [...prevImages, ...posts]);
      setHasMore(hasNext);
      if (posts.length > 0) {
        setMaxId(posts[posts.length - 1].id);
      }
    } catch (error) {
      console.error('Error fetching Mastodon posts:', error.message);
    }
  };

  const handleOpenModal = (image, post) => {
    setSelectedImage(image);
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedPost(null);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={listOfImages.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<cite>"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. - Isaac Asimov"</cite>}
      >
        <div className="gallery-container">
          {listOfImages.map((image, index) => (
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
          ))}
        </div>
      </InfiniteScroll>
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
              <p><strong>Created At:</strong> {new Date(selectedPost.createdAt).toLocaleString()}</p>
              <p><strong>Source post:</strong> <a href={selectedPost.url} target="_blank" rel="noopener noreferrer">{selectedPost.url}</a></p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}