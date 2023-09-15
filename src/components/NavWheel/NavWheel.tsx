import "./navWheel.css";
import React, { useState, useLayoutEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import { pageColors } from "../../utils/constants_colors";
import prevArrowImage from "../../assets/images/arrowLeft.svg";
import nextArrowImage from "../../assets/images/arrowRight.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface NavWheelProps {
  onColorChange: (color: string) => void;
}
const NavWheel: React.FC<NavWheelProps> = (props) => {
  const navigate = useNavigate();
  const [pages, setPages] = useState<any[]>([
    { name: "home", path: "", title: "HOME" },
    { name: "games", path: "games", title: "GAMES" },
    { name: "web", path: "web", title: "WEBSITES" },
    { name: "toys", path: "toys", title: "WEB TOYS" },
    { name: "art", path: "art", title: "DOODLES" },
  ]);
  useLayoutEffect(() => {
    // Algorithm for shifting around the list of pages to ensure the
    // nav wheel begins with the proper item on page load (incase the user changes the URL path by hand).
    // A simple redirect would have worked, but I like this better.
    const pageSet = pages;
    const pathToFind = window.location.pathname.slice(1);
    const indexesToShift = pageSet.findIndex(
      (item) => item.path === pathToFind
    );
    props.onColorChange(pageSet[indexesToShift].name);
    for (let i = 0; i < indexesToShift; i++) {
      const startItem = pageSet.shift();
      pageSet.push(startItem as string);
    }
    setPages([...pageSet]);
  }, []);

  return (
    <div className='NavWheel'>
      <Carousel
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay={false}
        showThumbs={false}
        showArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <div
              style={
                {
                  ...arrowStyles,
                  backgroundImage: `url(${prevArrowImage})`,
                  left: 10,
                } as React.CSSProperties
              }
              onClick={onClickHandler}
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <div
              onClick={onClickHandler}
              style={
                {
                  ...arrowStyles,
                  backgroundImage: `url(${nextArrowImage})`,
                  right: 10,
                } as React.CSSProperties
              }
            />
          )
        }
        onChange={(index) => {
          navigate(`/${pages[index].path}`);
          props.onColorChange(pageColors[pages[index].name]);
        }}
      >
        {pages.map((page, index) => (
          <div className='item' key={index}>
            <h2>{page.title}</h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const arrowStyles = {
  width: "70px",
  height: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1000,
};

export default NavWheel;
