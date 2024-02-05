import React, { useState,useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../components/Cards";
import {FaAngleLeft,FaAngleRight} from "react-icons/fa";

const simpleNextArrow = (props)=>{
    const {className,style,onClick}=props;
    return(
        <div className={className} style={{...style, display:"block", background:"red"}} 
        onClick={onClick}>
            Next
        </div>
    )
}

const simplePreArrow =(props) =>{
    const {className,style,onClick}=props;
    return(
        <div className={className} style={{...style, display:"block", background:"green"}} 
        onClick={onClick}>
            Back
        </div>
    )
}

const Special = () => {
  const [highlight, setHighlight] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item)=> item.category === "text");
        setHighlight(specials);
      });
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow:<simpleNextArrow/>,
    preArrow :<simplePreArrow/>
  };
  return (
    <div className="section-container my-20 relative">
      <div className="text-left">
        <p className="subtitle">Spectacular</p>
        <h2 className="title">Event Headlines</h2>
      </div>
      <div className="md:absolute right-3 top-8 md:mr-24">
        <button onClick={()=> slider?.current?.slickPrev()} className="btn p-2 rounded-full ml-5">
            <FaAngleLeft className="w-8 h-8 p-1"/>
        </button>
        <button onClick={()=> slider?.current?.slickNext()} className="btn p-2 rounded-full ml-5">
        <FaAngleRight className="w-8 h-8 p-1"/>
        </button>
      </div>

      <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-5">
        {
            highlight.map((item,i) => (
                <Cards key={i} item={item}/>
            ))
        }
      </Slider>
    </div>
  );
};

export default Special;
