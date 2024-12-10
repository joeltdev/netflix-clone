import React, { useEffect, useRef } from "react";
import "./TitileCards.css";
import cards_data from "../../assets/cards/Cards_data.js";

const TitileCards = ({ title, category }) => {
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjFiYmUwYThhNmMwYTJhY2JlNTQzZDRkNDE2NzA0YiIsIm5iZiI6MTczMzg1MDkzMS40MzgwMDAyLCJzdWIiOiI2NzU4NzczM2U1Mjg0MDBjYWFjMWM1MmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0F9jImud93wQu7UTQXDAWMzp4LKrx2-N8Rn9XOgDtko",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaX || event.deltaY;
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    const currentRef = cardsRef.current;
    currentRef.addEventListener("wheel", handleWheel);

    return () => {
      currentRef.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitileCards;
