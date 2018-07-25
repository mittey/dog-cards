import React from "react";
import { Link } from "react-router-dom";

const card = props => {
  return (
    <div className="col-lg-3">
      <div style={{ marginTop: "5px", marginBottom: "5px" }} className="card">
        {props.cardData.picture ? (
          <img
            className="card-img-top img-responsive img-rounded"
            src={`http://localhost:8090/picture/${props.cardData.picture.id}`}
            alt="cap"
          />
        ) : (
          <p style={{ textAlign: "center" }}>No picture!</p>
        )}
        <div className="card-body">
          <p className="card-text">{props.cardData.description}</p>
          <Link
            className="btn btn-primary"
            to={`/view-card/${props.cardData.id}`}
          >
            View card
          </Link>
        </div>
      </div>
    </div>
  );
};

export default card;
