import React from "react";
import "../css/mygames.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Mygames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@games");
    setGames(JSON.parse(minhaLista) || []);
  }, []);

  function removefromList(id) {
    const newList = games.filter((listGame) => listGame.id !== id);
    setGames(newList);
  }

  return (
    <section className="container-my-games">
      Meus Jogos
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <span>{game.name}</span>
            <div>
              <Link to={`/jogo/${game.id}`}>Ver detalhes do jogo</Link>
            </div>
            <button onClick={() => removefromList(game.id)}>
              Remover da lista
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Mygames;
