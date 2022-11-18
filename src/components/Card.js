import React from "react";

const Card = ({ head, para, path }) => {
  return (
    <>
      <div className="row col-12 col-lg-5 d-flex align-items-center mt-2">
        <img
          src={`${process.env.PUBLIC_URL}/images/${path}`}
          alt="none"
          className="how-it-work-icon"
        />
        <div className="col-9">
          <h5 className="card-heading mb-0">{head}</h5>
          <p className="card-para">{para}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
