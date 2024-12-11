import React, { useEffect, useState } from "react";
import "./player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "Loading...",
    key: "",
    published_at: "",
    type_of: "Unknown",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjFiYmUwYThhNmMwYTJhY2JlNTQzZDRkNDE2NzA0YiIsIm5iZiI6MTczMzg1MDkzMS40MzgwMDAyLCJzdWIiOiI2NzU4NzczM2U1Mjg0MDBjYWFjMWM1MmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0F9jImud93wQu7UTQXDAWMzp4LKrx2-N8Rn9XOgDtko",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? "Unknown Date" : date.toLocaleDateString();
  };

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="Back Arrow"
        onClick={() => {
          navigate("/"); // Navigate to the home page
        }}
      />
      {apiData.key ? (
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          frameBorder="0"
          width="90%"
          height="90%"
          title="trailer"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading video...</p>
      )}
      <div className="player-info">
        <p>{formatDate(apiData.published_at)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type_of}</p>
      </div>
    </div>
  );
};

export default Player;
