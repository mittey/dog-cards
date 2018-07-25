import React, { Component } from "react";
import { Row, Col, Panel } from "react-bootstrap";

import InputPanel from "../../components/InputPanel/InputPanel";
import MapPanel from "../../components/MapPanel/MapPanel";
import SubmitButton from "../../components/ui/SubmitButton/SubmitButton";
import ImageUploadPanel from "../../components/ImageUploadPanel/ImageUploadPanel";

import "../../styles/bootstrap3/css/bootstrap.css";

class Layout extends Component {
  state = {
    // options: [],
    speciesOptions: [],
    allBreeds: [],
    breedOptions: [],
    genderOptions: ["самец", "самка"],
    selectValue: null,
    breedSelectDisabled: true,
    speciesChosen: null,
    validationOptions: {
      ageValidation: {
        isValid: true,
        errorMessage: "Please enter the age."
      },
      colorValidation: {
        isValid: true,
        errorMessage: "Please enter the color."
      },
      aliasValidation: {
        isValid: true,
        errorMessage: "Please enter the name."
      },
      descriptionValidation: {
        isValid: true,
        errorMessage: "Please enter the description."
      },
      breedValidation: {
        isValid: true,
        errorMessage: "Please select the breed."
      },
      genderValidation: {
        isValid: true,
        errorMessage: "Please select the gender."
      },
      speciesValidation: {
        isValid: true,
        errorMessage: "Please select the species."
      }
    },
    // personData: null,
    formData: {
      description: "",
      animal: {
        alias: "",
        age: "",
        gender: "",
        color: "",
        breed: { id: null }
      },
      address: {
        latitude: 59.939095,
        longitude: 30.315868
      },
      person: {
        id: 2
      },
      picture: {
        id: null
      }
    }
  };

  validate = () => {
    let isValid = true;

    if (!this.state.formData.animal.age) {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.ageValidation.isValid = false;

      this.setState({ validationOptions: validationOptions });

      isValid = false;
    } else {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.ageValidation.isValid = true;

      this.setState({ validationOptions: validationOptions });
    }

    if (!this.state.formData.animal.alias) {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.aliasValidation.isValid = false;

      this.setState({ validationOptions: validationOptions });

      isValid = false;
    } else {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.aliasValidation.isValid = true;

      this.setState({ validationOptions: validationOptions });
    }

    if (!this.state.formData.animal.color) {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.colorValidation.isValid = false;

      this.setState({ validationOptions: validationOptions });

      isValid = false;
    } else {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.colorValidation.isValid = true;

      this.setState({ validationOptions: validationOptions });
    }

    if (!this.state.formData.description) {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.descriptionValidation.isValid = false;

      this.setState({ validationOptions: validationOptions });

      isValid = false;
    } else {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.descriptionValidation.isValid = true;

      this.setState({ validationOptions: validationOptions });
    }

    if (!this.state.formData.animal.breed.id) {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.breedValidation.isValid = false;

      this.setState({ validationOptions: validationOptions });

      isValid = false;
    } else {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.breedValidation.isValid = true;

      this.setState({ validationOptions: validationOptions });
    }

    if (!this.state.formData.animal.gender) {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.genderValidation.isValid = false;

      this.setState({ validationOptions: validationOptions });

      isValid = false;
    } else {
      const validationOptions = { ...this.state.validationOptions };

      validationOptions.genderValidation.isValid = true;

      this.setState({ validationOptions: validationOptions });
    }

    return isValid;
  };

  formSubmitHandler = event => {
    console.log(this.state.formData);

    const validationResult = this.validate();

    if (validationResult) {
      fetch("http://localhost:8090/cards", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(this.state.formData)
      })
        .then(res => {
          console.log(res);
          this.props.history.push("/");
        })
        .catch(res => console.log(res));
    }

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

  // onMarkerPositionChanged = event => {
  //   const formData = { ...this.state.formData };

  //   formData.address[event.target.name] = event.target.value;

  //   this.setState({ formData: formData });
  // };

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

    // fetch(`http://localhost:8090/people/1`)
    // .then(result => result.json())
    // .then(data => {
    //     console.log(data);
    //     this.setState({ personData: data });
    // });
  };

  // getValidationState = () => {
  //   const length = this.state.alias.length;
  //   if (length > 2) return 'success';
  //   else if (length <= 0) return 'error';
  //   return null;
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <Row style={{ marginTop: "50px" }}>
            <Col md={10} mdOffset={1}>
              <Panel>
                <Panel.Heading>
                  <b>Укажите информацию о пропавшем животном</b>
                </Panel.Heading>
                <Panel.Body>
                  <InputPanel
                    animalChanged={this.animalChangeHanlder}
                    descriptionChanged={this.descriptionChangeHandler}
                    speciesChanged={this.speciesSelectedHandler}
                    breedChanged={this.breedChangeHandler}
                    // markerDragend={this.markerDragendHanlder}
                    options={{
                      speciesOptions: this.state.speciesOptions,
                      breedOptions: this.state.breedOptions,
                      genderOptions: this.state.genderOptions
                    }}
                    colmd={12}
                    breedSelectDisabled={this.state.breedSelectDisabled}
                    validationOptions={this.state.validationOptions}
                  />
                  <MapPanel
                    colmd={6}
                  />
                  <ImageUploadPanel
                    pictureUploded={this.pictureUploadHandler}
                    colmd={6}
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
