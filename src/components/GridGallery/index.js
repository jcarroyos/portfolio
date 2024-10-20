import React from "react";
import style from "./style.css";
import Modal from "react-modal";

const bucketUrl = "https://jcarroyos-portfolio.s3.amazonaws.com/gallery/";

const listOfImages = [
  `${bucketUrl}Dot and cross.png`,
  `${bucketUrl}Eating.png`,
  `${bucketUrl}Pleading.png`,
  `${bucketUrl}Processing mother 01.png`,
  `${bucketUrl}Processing mother 02.png`,
  `${bucketUrl}Processing mother 03.png`,
  `${bucketUrl}Self portrait 01.jpg`,
  `${bucketUrl}Self portrait 02.png`,
  `${bucketUrl}Spooning rotation.jpg`,
  `${bucketUrl}Thesaurus abducted.jpg`,
  `${bucketUrl}Tribute to Pablo Solano.jpg`,
];

Modal.setAppElement("#__docusaurus");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedImage: null,
    };
  }

  handleOpenModal = (image) => {
    this.setState({
      showModal: true,
      selectedImage: image,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      selectedImage: null,
    });
  };

  render() {
    return (
      <>
        <div className="gallery-container">
          {listOfImages.map((image, index) => (
            <figure key={index}>
              <img
                src={image}
                alt={index + 1}
                onClick={() => this.handleOpenModal(image)}
              ></img>
              <figcaption>
                {image.substring(image.lastIndexOf("/") + 1).split(".", 1)}
              </figcaption>
            </figure>
          ))}
        </div>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="Image Preview"
        >
          <div className="close" onClick={this.handleCloseModal}>
            ✖️
          </div>
          <div className="modal-image-container">
            <img src={this.state.selectedImage} alt="Selected" />
          </div>
        </Modal>
      </>
    );
  }
}

export default App;
