import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Style from "./staff.module.scss";

export const Staff = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <figure style={{backgroundImage: "url(" + props.item.image + ")"}} className={Style.staffcard} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <figcaption className={isHovering ? Style.hovered : Style.nothovered}>
            <div className={Style.infobar}>
            <h4>
            {props.item.firstname} {props.item.lastname}
            </h4>
            <p>{props.item.position}</p>
            {isHovering ? 
            <>
                <p>{props.item.email}</p>
                <p>{props.item.phone}</p>
            </>
            : null}
          </div>
        
      </figcaption>
    </figure>
  );
};
