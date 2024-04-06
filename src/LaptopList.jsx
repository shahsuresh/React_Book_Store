import React from "react";
import { laptopData } from "./laptopData";

const LaptopList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {laptopData.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              //   border: "1px solid black",
              width: "500px",
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            <img src={item.image}></img>
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default LaptopList;
