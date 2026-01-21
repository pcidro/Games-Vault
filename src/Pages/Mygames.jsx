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
    localStorage.setItem("@games", JSON.stringify(newList));
  }

  return (
    <section className="container-my-games">
      <h1>Meus jogos</h1>

      {games.length === 0 && (
        <p>
          Você não possui nenhum jogo salvo.{" "}
          <Link to="/">Salve algum jogo!</Link>{" "}
        </p>
      )}
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
