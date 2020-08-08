import React from "react";
import Item from "../ItemContainer/items";

const MyContainer = (props) => {
  return (
    <div className="card">
      <Item {...props} />
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default MyContainer;
