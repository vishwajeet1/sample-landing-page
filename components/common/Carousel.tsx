import { FunctionComponent, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";

interface Props {
  listOfData: Array<any>;
}

const Arrow: FunctionComponent<{
  isDisable?: boolean;
  onClick: () => void;
  disableImg: string;
  img: string;
}> = ({ isDisable, onClick, img, disableImg }) => {
  const imgSrc = isDisable ? disableImg : img;

  return (
    <div>
      <img
        src={imgSrc}
        alt="right"
        className="w-6 h-6 cursor-pointer"
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
    slidesToShow: 3.2,
    slidesToScroll: 1,
    className: "gallery",
    customPaging: function (i) {
      return <div className="text-font12">{i + 1}</div>;
    },
    beforeChange(currentSlide: number, nextSlide: number) {
      setCurrentActivePage(nextSlide);
    },
    appendDots(dots: React.ReactNode): JSX.Element {
      return (
        <div>
          <div className="flex justify-start items-center px-4">
            <div className="mr-4">
              <Arrow
                isDisable={currentActivePage == 0}
                onClick={() => {
                  handleOnClick(currentActivePage - 1);
                }}
                disableImg="/ui-kit/icon/left-arrow-light.svg"
                img="/ui-kit/icon/left-arrow.svg"
              />
            </div>
            <Arrow
              isDisable={currentActivePage == listOfData.length - 2}
              onClick={() => {
                handleOnClick(currentActivePage + 1);
              }}
              disableImg="/ui-kit/icon/right-arrow-light.svg"
              img="/ui-kit/icon/right-arrow.svg"
            />
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
  .dot-variable-class > li > div {
    background: white;
    width: 20px;
    height: 20px;
    color: #555d75;
    border: #e5e5e5 solid 1px;
    border-radius: 100%;
    text-align: center;
  }
  .dot-variable-class > li.slick-active > div {
    color: white;
    background: #23242a;
    border-radius: 100%;
    text-align: center;
  }

  .slick-initialized .slick-slide {
    margin-bottom: 0.5rem;
  }
`;
