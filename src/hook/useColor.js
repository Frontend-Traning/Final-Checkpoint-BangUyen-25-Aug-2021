import { useEffect, useState } from 'react';
function randomColor(currenColor) {
  const colorArr = ['yellow', 'blue', 'grey', 'hotpink'];

  const currenColorIndex = colorArr.indexOf(currenColor);
  let newIndex = currenColorIndex;
  while (newIndex === currenColorIndex) {
    newIndex = Math.trunc(Math.random() * 4);
  }
  return colorArr[newIndex];
}
function useColor({ clr = 'green' }) {
  const [color, setColor] = useState(clr);
  useEffect(() => {
    const interval = setInterval(() => {
      const newColor = randomColor(color);
      setColor(newColor);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [color]);
  return color;
}
export default useColor;
