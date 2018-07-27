import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/ui/Card/Card";

import "../../styles/bootstrap4.css";

class HomePage extends Component {
  state = {
    allCards: []
  };

  fetchAllCards = () => {
    fetch("http://localhost:8090/cards")
      .then(result => result.json())
      .then(data => {
        this.setState({ allCards: data });
      });
  };

  componentDidMount = () => {
    this.fetchAllCards();
  };

  render() {
    let cards = <p>Loading...</p>;

    if (this.state.allCards) {
      cards = this.state.allCards.map(card => {
        console.log(card);
        return <Card cardData={card} key={card.id} />;
      });
    }

    return (
      <div className="col-lg-10 offset-1">
        <div
          style={{ paddingTop: "10px", paddingBottom: "30px" }}
          className="jumbotron"
        >
          <h1 className="display-4">Поиск пропавших животных</h1>
          {/* <p className="lead">
            This is Link simple hero unit, Link simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p> */}
          <div className="col-md-11" />
          <hr className="my-4" />
          <p>Для подачи объявления нажмите на кнопку </p>
          <p className="lead">
            <Link className="btn btn-success btn-lg" to="/create-card">
              Создать объявление
            </Link>
          </p>
          <img
            src="./images/PAW_2.png"
            alt="should be here"
            className="float-right"
            width="150px"
          />
        </div>
        <div className="panel panel-default ">
          <div  style={{fontSize:"15pt"}} className="panel-heading">Потеряшки:</div>
          <div className="panel-body">{cards}</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
