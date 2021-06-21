import React, { useState, useEffect, lazy } from "react";
import { Navbar } from "./navbar/Navbar";
import { Game } from "./game/Game";
import { getRelevantGames } from "../utils/getRelevantGames/getRelevantGames";
import { Result as gameType } from "../utils/getRelevantGames/interface";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
const FullGameInfo = lazy(() => import("./fullGameInfo/FullGameInfo"));
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
          <React.Suspense fallback={"loading"}>
            <Route exact path="/game/:gameID">
              <FullGameInfo />
            </Route>
          </React.Suspense>
        </Switch>
      </Router>
    </div>
  );
};
