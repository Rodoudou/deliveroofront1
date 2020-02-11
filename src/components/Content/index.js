import React from "react";
import "./content.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageItem1 from "../../assets/images/item-image1.jpg";
export default function Content({
  restaurant,
  setRestaurant,
  categories,
  setCategories
}) {
  return (
    <div className="content">
      <div className="content-center">
        <div className="menus">
          <div className="menuItems">
            <h2>Brunchs</h2>
            <div className="menuItems--items">
              <div className="menuItem">
                <div className="menuItem--card">
                  <div className="menuItem--texts">
                    <h3>Brunch authentique 1 personne</h3>
                    <p>
                      Assiette de jambon cuit, jambon fumeì, terrine, comté bio
                      &amp; camembert bio, salade jeunes pousses, oeuf poché
                      bio, pain bio & confiture, 1 viennoiserie bio au choix,
                      granola parfait bio, jus de fruits 33cl au choix
                    </p>
                    <div className="menuItems--info">
                      <p className="menuItems--price">25,00€</p>

                      <p className="menuItems--popular">
                        <FontAwesomeIcon icon="star" /> Populaire
                      </p>
                    </div>
                  </div>
                  <div className="menuItem--picture">
                    <img src={imageItem1} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
