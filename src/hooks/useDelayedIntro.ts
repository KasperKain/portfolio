import { useState, useEffect } from "react";

const useDelayedIntro = (delay: number = 0): boolean => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, delay);
  }, []);
  return visible;
};

export default useDelayedIntro;
