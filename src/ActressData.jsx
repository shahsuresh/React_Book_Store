import React from "react";

import { actressList } from "./actressData";
const ActressData = () => {
  return (
    <div>
      {actressList.map((item, index) => {
        console.log(item);
        return (
          <div key={index}>
            <img src={item.image} />
            <h2>{item.name}</h2>
            <span>{item.info}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ActressData;
