import React from "react";
import Slider from "react-slick";
import "./itemWheel.css";
const ItemWheel: React.FC<any> = (props) => {
  function NextArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        style={{
          ...style,
          width: "70px",
          height: "50px",
          backgroundImage: "url('src/assets/images/arrowRight.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
      props.updateSelectedItem(current);
    },
  };

  const items = props.items ? props.items : [{ title: "loading" }, "empty"];
  return (
    <div className='ItemWheel'>
      {!items ? (
        <h2></h2>
      ) : (
        <Slider {...settings}>
          {items.map(
            (
              item: {
                title:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: React.Key | null | undefined
            ) => (
              <div className='item' key={index}>
                <h2>{item.title}</h2>
              </div>
            )
          )}
        </Slider>
      )}
    </div>
  );
};

export default ItemWheel;
