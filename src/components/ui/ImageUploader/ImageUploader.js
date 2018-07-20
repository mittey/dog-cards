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
              position: "relative",
              width: "100%",
              height: "200px",
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
                : "Try dropping some files here, or click to select files to upload."}
            </p>
          </Dropzone>
        </div>
      </section>
    );
  };
}

export default ImageUploader;
