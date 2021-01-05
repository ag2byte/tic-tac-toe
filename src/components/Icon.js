import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      // console.log("circle found");
      return <FaRegCircle className="icon" />;
    //   break;
    case "cross":
      // console.log("cross found");
      return <FaTimes className="icon" />;
    default:
      return <FaPen className="icon" />;
    //   break;
  }
};

export default Icon;
