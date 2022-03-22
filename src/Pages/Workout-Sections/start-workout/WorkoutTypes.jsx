import React from "react";

const CardWorkout = (props) => {
  // let {
  //   id: id,
  //   name: name,
  //   description: description,
  //   image: image,
  //   link: link,
  // } = props;
  const { Id, Name, Description, Image, Link } = props;
  console.log(props.Name);
  return (
    <div className="workout-type-card">
      <div className="bg">
        <img src={Image} alt="" />
        <div className="shade"></div>
      </div>
      <div className="content">
        <h1>{Name}</h1>
        <p>{Description}</p>
        <button>Start</button>
      </div>
    </div>
  );
};

export default CardWorkout;
