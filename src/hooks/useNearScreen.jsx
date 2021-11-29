import { useEffect, useRef, useState } from 'react';

const useNearScreen = ({ justOne = true } = {}) => {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const handleObserver = (entries, observer) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(handleObserver);

    observer.observe(fromRef.current);
  }, []);

  return {
    isNearScreen,
    fromRef,
  };
};

export default useNearScreen;