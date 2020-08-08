import React from "react";

const Item = ({ image, name, comment }) => {
  return (
    <div className="content">
      <img
        className="right floated mini ui image"
        alt="profile-pic"
        src={image}
      />
      <div className="header">{name}</div>
      {/* {<div class="meta">Friends of Veronika</div> */}
      <div className="description">{comment}</div>
    </div>
  );
};

export default Item;
