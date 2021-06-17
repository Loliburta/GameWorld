import { useState, useEffect } from "react";
import { Navbar } from "./navbar/Navbar";
import { Game } from "./game/Game";
import { getRelevantGames } from "../utils/getRelevantGames/getRelevantGames";
import { Result as gameType } from "../utils/getRelevantGames/interface";
// const apiKey = `key=${process.env.REACT_APP_API_KEY}`;

export const App = () => {
  const [gameList, setGameList] = useState<gameType[]>();
  useEffect(() => {
    const fetchRelevantGames = async () => {
      setGameList(await getRelevantGames());
    };
    fetchRelevantGames();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="app__gameList">
        {gameList?.map((game: gameType) => (
          <Game {...game} key={game.id} />
        ))}
      </div>
    </div>
  );
};
