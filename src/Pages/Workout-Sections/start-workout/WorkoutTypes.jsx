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
    <div>
      <div className="bg">
        <img src={Image} alt="" />
        <div className="shade"></div>
      </div>
      <h1>{Name}</h1>
      <h2>{Description}</h2>
      <button>Start</button>
    </div>
  );
};

export default CardWorkout;
