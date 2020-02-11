import React from "react";
import "./header.css";
import logo from "../../assets/images/deliveroo.png";
import imageHeader from "../../assets/images/header-image.jpg";

export default function Header({ restaurant, setRestaurant }) {
  return (
    <div className="Header">
      <div className="topBar">
        <div className="topBar--center">
          <img className="logo" src={logo} alt="logo deliveroo" />
        </div>
      </div>

      <div className="infoResto">
        <div className="titreText">
          <h1>{restaurant.name}</h1>
          <p>
            Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien
            propose des ingrédients simples et sains, du bon pain, des fruits et
            des légumes frais et de saison issus de l’agriculture biologique.
          </p>
        </div>

        <img className="imageHeader" src={imageHeader} alt="img" />
      </div>
    </div>
  );
}
