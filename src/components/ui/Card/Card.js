import React from "react";
import { Link } from "react-router-dom";

const card = props => {

  let descriptionText = props.cardData.description;
  let sliced = descriptionText.slice(0,100
  );
  if(sliced.length < descriptionText.length){
    sliced += '...';
  }

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
          <p className="card-text">{sliced}</p>
          <Link
            className="btn btn-info"
            to={`/view-card/${props.cardData.id}`}
          >
            Просмотреть
          </Link>
        </div>
      </div>
    </div>
  );
};

export default card;
