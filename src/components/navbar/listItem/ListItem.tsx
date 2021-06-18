import React from "react";
import { Result } from "../../../utils/searchGames/interface";
import defaultImg from "../../../svg/default.svg";

export const ListItem: React.FC<Result> = (game) => {
  return (
    <li className="listItem">
      <img
        src={game.background_image}
        onError={(e: any) => (
          (e.target.onerror = null), (e.target.src = defaultImg)
        )}
        alt="poster"
        className="listItem__img"
      />
      <div className="listItem__name">{game.name}</div>
      <div className="listItem__release">
        {(game.released && game.released.toString().slice(0, 4)) || "--------"}
      </div>
    </li>
  );
};
