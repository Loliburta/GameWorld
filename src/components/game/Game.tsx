import { useState, useEffect } from "react";
import { getGameDetails } from "../../utils/getGameDetails/getGameDetails";
import { Result as gameType } from "../../utils/getRelevantGames/interface";
import { Types as DetailsType } from "../../utils/getGameDetails/interface";
import { Icon } from "@iconify/react";
import star from "@iconify-icons/carbon/star-filled";
import { resize } from "../../utils/resize";
import { Link } from "react-router-dom";
export const Game: React.FC<gameType> = (game) => {
  const [gameDetails, setGameDetails] = useState<DetailsType>();

  useEffect(() => {
    const fetchGameDetails = async () => {
      setGameDetails(await getGameDetails(game.id));
    };
    fetchGameDetails();
  }, [game.id]);
  return (
    <div className="game">
      <Link to={`/game/${game.id}`} className="game__top">
        <div className="game__top__imgDiv">
          <img
            src={resize(game.background_image, 420)}
            alt="background"
            className="game__top__imgDiv__img"
          />
        </div>
        <div className="game__top__rating">
          <Icon icon={star} className="game__top__rating__star" />
          <div className="game__top__rating__text">
            {game.rating.toFixed(2)}/5
          </div>
        </div>
        <div className="game__top__name">
          <div className="game__top__name__text">{game.name}</div>
        </div>
        <div className="game__top__platforms">
          {game.platforms.map((platformElement) => (
            <div
              className="game__top__platforms__platform"
              key={platformElement.platform.name}
            >
              {platformElement.platform.name}
            </div>
          ))}
        </div>
      </Link>

      <div className="game__bot">
        <div className="game__bot__text">{gameDetails?.description_raw}</div>
      </div>
    </div>
  );
};
