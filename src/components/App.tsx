import { useState, useEffect } from "react";
import { Navbar } from "./navbar/Navbar";
import { Game } from "./game/Game";
import { getRelevantGames } from "../utils/getRelevantGames/getRelevantGames";
import { Result as gameType } from "../utils/getRelevantGames/interface";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { FullGameInfo } from "./fullGameInfo/FullGameInfo";
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
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div className="app__gameList">
              {gameList?.map((game: gameType) => (
                <Game {...game} key={game.id} />
              ))}
            </div>
          </Route>
          <Route exact path="/game/:gameID">
            <FullGameInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
