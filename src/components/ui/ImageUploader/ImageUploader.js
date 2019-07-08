import React, { Component } from "react";

import Dropzone from "react-dropzone";

class ImageUploader extends Component {
  state = {
    files: [],
    fileName: null
  };

  onDrop(files) {
    this.setState({ fileName: files[0].name });

    var formData = new FormData();

    formData.append("file", files[0]);

    fetch("http://localhost:8090/picture", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(pictureId => {
        this.props.pictureUploded(pictureId);
      })
      .catch(error => console.log(error));
  }

  render = () => {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            accept="image/jpeg, image/png"
            style={{
              backgroundColor: "#F5F5F5",
              position: "relative",
              width: "100%",
              height: "300px",
              borderWidth: "2px",
              borderColor: "rgb(102, 102, 102)",
              borderStyle: "dashed",
              borderRadius: "5px"
            }}
            onDrop={this.onDrop.bind(this)}
          >
            <p>
              {this.state.fileName
                ? this.state.fileName
                : "   Для загрузки перетащите фото на область или кликните левой кнопкой мыши и выберите фото "}
            </p>
          </Dropzone>
        </div>
      </section>
    );
  };
}

export default ImageUploader;
