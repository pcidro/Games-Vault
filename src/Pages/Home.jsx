import React from "react";
import { useEffect, useState } from "react";
import { getPopularGames } from "../api";
import "../css/home.css";

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchGames() {
      try {
        const data = await getPopularGames();
        if (data) {
          setGames(data);
        }
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  if (loading) {
    return <div className="loading">Carregando jogos...</div>;
  }
  return (
    <div className="container-home">
      <h1>Jogos populares</h1>
      <ul className="grid-games">
        {games.map((game) => (
          <li className="game-card" key={game.id}>
            <div className="image-container">
              <img
                className="img-card"
                src={game.background_image}
                alt={game.name}
              />
            </div>
            <div className="card-content">
              <div className="card-info">
                <h3>{game.name}</h3>
                {game.rating && <span className="rating">★ {game.rating}</span>}
                <button className="btn-details">Ver Detalhes</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
