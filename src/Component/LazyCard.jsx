import { useEffect, useRef, useState } from "react";

const LazyCard = ({ children }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible ? (
        children
      ) : (
        <div className="h-[260px] bg-gray-200 animate-pulse rounded-2xl"></div>
      )}
    </div>
  );
};

export default LazyCard;
