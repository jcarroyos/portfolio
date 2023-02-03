import React from "react";
import style from "./style.css";

var listOfImages = [];

class App extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  UNSAFE_componentWillMount() {
    listOfImages = this.importAll(
      require.context("./pictures/", false, /\.(png|jpe?g|svg)$/)
    );
  }
  render() {
    return (
      <>
        <div className="gallery-container">
          {listOfImages.map((image, index) => (
            <figure key={index}>
              <img src={image.default} alt={index + 1}></img>
              <figcaption>
                <a href={"#" + index + 1}>{index + 1}</a>
              </figcaption>
            </figure>
          ))}
        </div>
      </>
    );
  }
}

export default App;
