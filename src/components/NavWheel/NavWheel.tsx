import "./navWheel.css";
import React, { useState, useLayoutEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { pageColors } from "../../utils/constants_colors";

interface NavWheelProps {
  onColorChange: (color: string) => void;
}
const NavWheel: React.FC<NavWheelProps> = (props) => {
  const navigate = useNavigate();
  const [pages, setPages] = useState<any[]>([
    { name: "home", path: "", title: "HOME" },
    { name: "games", path: "games", title: "GAME DEMOS" },
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

  function NextArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "70px",
          height: "50px",
          backgroundImage: "url('src/assets/images/arrowRight.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          pointerEvents: "auto",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "70px",
          height: "50px",
          backgroundImage: "url('src/assets/images/arrowLeft.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          pointerEvents: "auto",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    prevArrow: (
      <PrevArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    centerMode: true,
    touchThreshold: 100,
    afterChange: (current: number) => {
      navigate(`/${pages[current].path}`);
      props.onColorChange(pageColors[pages[current].name]);
    },
  };

  return (
    <div className='NavWheel'>
      <Slider {...settings}>
        {pages.map((page, index) => (
          <div className='item' key={index}>
            <h2>{page.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NavWheel;
