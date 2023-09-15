import "./customList.css";
import { useState, useEffect, useRef } from "react";
import ListItem from "../ListItem/ListItem";
import { v4 as uuid } from "uuid";

interface CustomListProps {
  items: string[];
  directionAlternating?: boolean;
  delayIncrement?: number;
}

const CustomList: React.FC<CustomListProps> = ({
  items,
  directionAlternating = false,
  delayIncrement = 200,
}) => {
  const [listKey, setListKey] = useState("0");
  const listRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setListKey(uuid());
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
    };
  }, []);

  return (
    <ul className='CustomList' ref={listRef}>
      {items.map((item, index) => (
        <ListItem
          key={`${index}-${listKey}`}
          text={item}
          direction={directionAlternating && index % 2 === 0 ? "left" : "right"}
          delay={index * delayIncrement}
        />
      ))}
    </ul>
  );
};

export default CustomList;
