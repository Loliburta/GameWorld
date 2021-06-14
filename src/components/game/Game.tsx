import React from "react";
import { Result as gameType } from "../../utils/getRelevantGames/interface";
export const Game: React.FC<gameType> = (game) => {
  return (
    <div>
      <div>{game.id}</div>
    </div>
  );
};
