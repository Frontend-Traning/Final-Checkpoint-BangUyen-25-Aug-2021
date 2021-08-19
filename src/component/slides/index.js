import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import useColor from "../../hook/useColor";
import Button from "../button";
import InputGroup from "../inputGroup/InputGroup";
const SlideShow = (props) => {
  const { slides } = props;
  const initTitle = slides[0].title;
  const initText = slides[0].text;
  const [title, setTitle] = useState(initTitle);
  const [text, setText] = useState(initText);
  const [index, setIndex] = useState(0);
  const [isRestartDisable, setIsRestartDisable] = useState(false);
  const [isPrevDisable, setIsPrevDisable] = useState(false);
  const [isNexttDisable, setIsNexttDisable] = useState(false);
  const slidesLength = slides.length;

  const handleRestart = () => {
    setIsPrevDisable(true);
    setIndex(0);
  };
  const handlePrev = () => {
    setIndex(index - 1);
    setIsRestartDisable(false);
  };
  const handleNext = () => {
    setIndex(index + 1);
    setIsPrevDisable(false);
    setIsRestartDisable(false);
  };
  const randomColor = useColor();
  useEffect(() => {
    if (index === 0) {
      setIsPrevDisable(true);
      setIsNexttDisable(false);
      setIsRestartDisable(true);
    }
    if (index === slidesLength - 1) {
      setIsNexttDisable(true);
    }
    setTitle(slides[index].title);
    setText(slides[index].text);
    console.log("------slides rerender");
  }, [index]);
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
          disabled={isNexttDisable}
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
SlideShow.propTypes = {
  slides: PropTypes.array,
};
SlideShow.defaultProps = {
  slides: [],
};
export default SlideShow;
