import { useState, useEffect } from "react";
import { Navbar } from "./navbar/Navbar";
import { Game } from "./game/Game";
import { getRelevantGames } from "../utils/getRelevantGames/getRelevantGames";
import { Result as gameType } from "../utils/getRelevantGames/interface";
// const apiKey = `key=${process.env.REACT_APP_API_KEY}`;

export const App = () => {
  const [relevantGames, setRelevantGames] = useState<gameType[]>();
  useEffect(() => {
    const fetchRelevantGames = async () => {
      setRelevantGames(await getRelevantGames());
    };
    fetchRelevantGames();
  }, []);
  return (
    <div>
      <Navbar />
      {relevantGames &&
        relevantGames?.map((game: gameType) => <Game {...game} />)}
    </div>
  );
};
