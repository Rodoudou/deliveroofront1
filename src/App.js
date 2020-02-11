import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./reset.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faHome } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faHome);

function App() {
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://deliveroofront.herokuapp.com/`);
      const data = await response.json();
      console.log("data ===>", data);
      setRestaurant(data.restaurant);
      setCategories(data.categories);
      setIsLoading(false);
      /*  console.log(data.restaurant.name); */
    };
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <p>Chargement</p>
      ) : (
        <div className="App">
          {console.log("restaurant.name ===>", restaurant.name)}
          <Header restaurant={restaurant} />
          <Content
            restaurant={restaurant}
            setRestaurant={setRestaurant}
            categories={categories}
            setCategories={setCategories}
          />
        </div>
      )}
    </>
  );
}

export default App;
