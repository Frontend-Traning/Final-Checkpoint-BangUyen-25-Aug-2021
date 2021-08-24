import { useCallback, useEffect, useMemo, useState } from 'react';

const useShowSlides = (slides) => {
  const [index, setIndex] = useState(0);
  const [isRestartDisable, setIsRestartDisable] = useState(false);
  const [isPrevDisable, setIsPrevDisable] = useState(false);
  const [isNextDisable, setIsNexttDisable] = useState(false);

  const slidesLength = useMemo(() => slides.length, [slides]);
  const { title, text } = useMemo(() => {
    const { title, text } = slides[index];
    return { title, text };
  }, [slides, index]);

  const handleRestart = useCallback(() => {
    setIsPrevDisable(true);
    setIndex(0);
  }, []);

  const handlePrev = useCallback(() => {
    setIndex(index - 1);
    setIsRestartDisable(false);
  }, [index]);

  const handleNext = useCallback(() => {
    setIndex(index + 1);
    setIsPrevDisable(false);
    setIsRestartDisable(false);
  }, [index]);

  useEffect(() => {
    if (index === 0) {
      setIsPrevDisable(true);
      setIsNexttDisable(false);
      setIsRestartDisable(true);
    }
    if (index === slidesLength - 1) {
      setIsNexttDisable(true);
    }
  }, [index, slidesLength]);

  return {
    title,
    text,
    isRestartDisable,
    isPrevDisable,
    isNextDisable,
    handleRestart,
    handleNext,
    handlePrev,
  };
};

export default useShowSlides;
