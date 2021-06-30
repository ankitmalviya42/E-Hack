import React from "react";
import { Image } from "react-bootstrap";
import EHack from "../../../assets/Images/ehack.png";
var background = { backgroundSize: "cover" };
const MainImage = (props) => {
  return (
    <div>
      <Image style={background} responsive src={EHack} fluid></Image>
    </div>
  );
};

export default MainImage;
