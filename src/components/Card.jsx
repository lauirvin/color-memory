import React, { Fragment } from "react";

const Card = ({ color }) => {
  const handleClick = card => {
    console.log(card);
  };

  return (
    <Fragment>
      <div onClick={handleClick} className="card"></div>
    </Fragment>
  );
};

export default Card;
