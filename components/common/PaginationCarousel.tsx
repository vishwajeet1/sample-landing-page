import { FunctionComponent, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";

interface Props {
  listOfData: Array<any>;
}

const NextArrow: FunctionComponent<{
  isDisable?: boolean;
  onClick: () => void;
}> = ({ isDisable, onClick }) => {
  const imgSrc = isDisable
    ? "/ui-kit/icon/right-arrow-light.svg"
    : "/ui-kit/icon/right-arrow.svg";

  return (
    <div
      className="p-1 border rounded-full cursor-pointer"
      onClick={() => {
        !isDisable && onClick();
      }}
    >
      <img src={imgSrc} alt="right" className="w-3 h-3" />
    </div>
  );
};

const PrevArrow: FunctionComponent<{
  isDisable?: boolean;
  onClick: () => void;
}> = ({ isDisable, onClick }) => {
  const imgSrc = isDisable
    ? "/ui-kit/icon/left-arrow-light.svg"
    : "/ui-kit/icon/left-arrow.svg";

  return (
    <div className="p-1 border rounded-full">
      <img
        src={imgSrc}
        alt="right"
        className="w-3 h-3 cursor-pointer"
        onClick={() => {
          !isDisable && onClick();
        }}
      />
    </div>
  );
};

const PaginationCarousel: FunctionComponent<Props> = ({ listOfData }) => {
  const [currentActivePage, setCurrentActivePage] = useState(0);
  const sliderRef = useRef();

  const handleOnClick = (index: number) => {
    //@ts-ignore
    sliderRef.current?.slickGoTo(index);
  };

  let settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "gallery",
    customPaging: function (i) {
      return <div className="text-base">{i + 1}</div>;
    },
    beforeChange(currentSlide: number, nextSlide: number) {
      setCurrentActivePage(nextSlide);
    },
    appendDots(dots: React.ReactNode): JSX.Element {
      return (
        <div>
          <div className="relative">
            <div className="flex justify-start items-center px-4 absolute bottom-0 left-0">
              <PrevArrow
                isDisable={currentActivePage == 0}
                onClick={() => {
                  handleOnClick(currentActivePage - 1);
                }}
              />
              <div className="dot-variable-class pr-1">{dots}</div>
              <NextArrow
                isDisable={currentActivePage == listOfData.length - 1}
                onClick={() => {
                  handleOnClick(currentActivePage + 1);
                }}
              />
            </div>
          </div>
        </div>
      );
    },
  };
  return (
    <PaginationDiv>
      {/*@ts-ignore*/}
      <Slider ref={sliderRef} {...settings}>
        {listOfData}
      </Slider>
    </PaginationDiv>
  );
};
export default PaginationCarousel;

const PaginationDiv = styled.div`
  .slick-dots {
    position: relative;
  }

  .dot-variable-class > li > div {
    background: white;
    width: 25px;
    height: 25px;
    color: #555d75;
    border: #e5e5e5 solid 1px;
    border-radius: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .dot-variable-class > li.slick-active > div {
    color: white;
    background: #23242a;
    border-radius: 100%;
    text-align: center;
  }

  .slick-initialized .slick-slide {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  //.gallery ul.slick-dots > li > button {
  //  position: absolute;
  //  width: 100%;
  //  height: 100%;
  //  border-radius: 50%;
  //  -webkit-appearance: none;
  //  -moz-appearance: none;
  //  background: transparent;
  //  border: none;
  //}
  //.gallery ul.slick-dots > li > button:before {
  //  content: none;
  //}
`;
