import React, { Component } from "react";

import { Row, Col, Panel } from "react-bootstrap";
import InputPanel from "../../components/InputPanel/InputPanel";
import MapPanel from "../../components/MapPanel/MapPanel";
import SubmitButton from "../../components/ui/SubmitButton/SubmitButton";
import UserInfoPanel from "../../components/UserInfoPanel/UserInfoPanel";
import ImageUploadPanel from "../../components/ImageUploadPanel/ImageUploadPanel";

class Layout extends Component {
  state = {
    // options: [],
    speciesOptions: [],
    allBreeds: [],
    breedOptions: [],
    genderOptions: ["boy", "girl"],
    selectValue: null,
    breedSelectDisabled: true,
    speciesChosen: null,
    formData: {
      description: null,
      animal: {
        alias: null,
        age: null,
        gender: null,
        color: null,
        breed: { id: null }
      },
      address: {
        latitude: 1,
        longitude: 1,
        address: "somewhere 2"
      },
      person: {
        id: 1
      },
      picture: {
        id: null
      }
    }
  };

  formSubmitHandler = event => {
    console.log(this.state.formData);

    fetch("http://localhost:8090/cards", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(this.state.formData)
    })
      .then(res => console.log(res))
      .catch(res => console.log(res));

    event.preventDefault();
  };

  descriptionChangeHandler = event => {
    const formData = { ...this.state.formData };

    formData.description = event.target.value;

    this.setState({ formData: formData });
  };

  speciesSelectedHandler = event => {
    var breedsToShow = this.state.allBreeds.filter(
      breed => breed.speciesId === parseInt(event.target.value, 10)
    );

    this.setState({
      breedSelectDisabled: false,
      breedOptions: breedsToShow
    });
  };

  animalChangeHanlder = event => {
    const formData = { ...this.state.formData };

    formData.animal[event.target.name] = event.target.value;

    this.setState({ formData: formData });
  };

  breedChangeHandler = event => {
    const formData = { ...this.state.formData };

    formData.animal.breed.id = event.target.value;

    this.setState({ formData: formData });
  };

  pictureUploadHandler = pictureId => {
    const formData = { ...this.state.formData };

    formData.picture.id = pictureId;

    this.setState({ formData: formData });
  };

  _fetchBreedData = () => {
    fetch("http://localhost:8090/breeds")
      .then(response => response.json())
      .then(data => {
        this.setState({
          allBreeds: data.map(breed => {
            return {
              name: breed.name,
              id: breed.id,
              speciesId: breed.species.id
            };
          })
        });
      });
  };

  _fetchSpeciesData = () => {
    fetch("http://localhost:8090/species")
      .then(response => response.json())
      .then(data => {
        this.setState({
          speciesOptions: data.map(singleSpecies => {
            return {
              name: singleSpecies.name,
              id: singleSpecies.id
            };
          })
        });
      });
  };

  componentDidMount = () => {
    this._fetchBreedData();
    this._fetchSpeciesData();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <Row style={{ marginTop: "10px" }}>
            <Col md={10} mdOffset={1}>
              <Panel>
                <Panel.Heading>Разместить объявление</Panel.Heading>
                <Panel.Body>
                  <InputPanel
                    animalChanged={this.animalChangeHanlder}
                    descriptionChanged={this.descriptionChangeHandler}
                    speciesChanged={this.speciesSelectedHandler}
                    breedChanged={this.breedChangeHandler}
                    options={{
                      speciesOptions: this.state.speciesOptions,
                      breedOptions: this.state.breedOptions,
                      genderOptions: this.state.genderOptions
                    }}
                    colmd={8}
                    breedSelectDisabled={this.state.breedSelectDisabled}
                  />
                  <MapPanel colmd={4} />
                  <UserInfoPanel colmd={4} />
                  <ImageUploadPanel
                    pictureUploded={this.pictureUploadHandler}
                    colmd={4}
                  />
                  <SubmitButton />
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default Layout;
