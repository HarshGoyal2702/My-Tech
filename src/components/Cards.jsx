import React, { useState } from "react";
import {Link} from "react-router-dom";
import {FaHeart} from "react-icons/fa"


const Cards = ({ item }) => {
  return (
    <div className="card w-96 glass">
      <Link to={`/menu/${item._id}`}>
      <figure>
        <img src={item.image} alt="Tagline" className="hover:scale-105 transition-all duration-200 md:h-72"/>
      </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-between items-center mt-2">
        <h5><span></span></h5>
          <button className="btn bg-green text-white">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
