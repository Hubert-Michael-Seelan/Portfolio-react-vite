// src/components/common/SlideInSection.jsx
import React, { useRef, useState, useEffect } from "react";
import Slide from "@mui/material/Slide";

const SlideInSection = ({
  children,
  direction = "left",
  threshold = 0.2,
  timeout = 600,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref}>
      <Slide in={visible} direction={direction} timeout={timeout}>
        <div>{children}</div>
      </Slide>
    </div>
  );
};

export default SlideInSection;
