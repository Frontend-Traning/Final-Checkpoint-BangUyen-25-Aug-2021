import React from "react";
import useColor from "../../hook/useColor";
import Button from "../button";
import InputGroup from "../inputGroup/InputGroup";
import { slides } from "../../consts/slides";
import useShowSlides from "../../hook/useShowSlides";
import "./style.scss";

const SlideShow = () => {
  const {
    title,
    text,
    isRestartDisable,
    isPrevDisable,
    isNextDisable,
    handleRestart,
    handleNext,
    handlePrev,
  } = useShowSlides(slides);
  const randomColor = useColor();

  return (
    <div className="container">
      <div className="btn-group">
        <Button
          className="btn"
          disabled={isRestartDisable}
          handleClick={handleRestart}
          title="Restart"
        />
        <Button
          className="btn"
          disabled={isPrevDisable}
          handleClick={handlePrev}
          title="Prev"
        />
        <Button
          className="btn"
          disabled={isNextDisable}
          handleClick={handleNext}
          title="Next"
        />
      </div>
      <div className="slide">
        <h2>{title}</h2>
        <p style={{ color: randomColor }}>{text} </p>
      </div>
      <InputGroup />
    </div>
  );
};

export default SlideShow;
