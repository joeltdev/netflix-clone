import React, { useEffect, useRef, useState } from "react";
import "./TitileCards.css";
import { Link } from "react-router-dom";
// import cards_data from "../../assets/cards/Cards_data.js";

const TitileCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
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
    if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaX || event.deltaY;
    }
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
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
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + card.poster_path}
                alt=""
              />
              {/* <p>{card.original_title}</p> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitileCards;
