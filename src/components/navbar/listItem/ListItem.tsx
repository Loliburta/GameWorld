import React from "react";
import { Result } from "../../../utils/searchGames/interface";
import defaultImg from "../../../svg/default.svg";
import { resize } from "../../../utils/resize";
import { Link } from "react-router-dom";

export const ListItem: React.FC<Result> = (game) => {
  return (
    <Link to={`/game/${game.id}`}>
      <li className="listItem">
        <img
          src={resize(game.background_image, 200)}
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = defaultImg;
          }}
          alt="poster"
          className="listItem__img"
        />
        <div className="listItem__name">{game.name}</div>
        <div className="listItem__release">
          {(game.released && game.released.toString().slice(0, 4)) ||
            "--------"}
        </div>
      </li>
    </Link>
  );
};
