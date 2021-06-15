import { useState, useEffect } from "react";
import { getGameDetails } from "../../utils/getGameDetails/getGameDetails";
import { Result as gameType } from "../../utils/getRelevantGames/interface";
import { Types as DetailsType } from "../../utils/getGameDetails/interface";
import { Icon } from "@iconify/react";
import star from "@iconify-icons/carbon/star-filled";
export const Game: React.FC<gameType> = (game) => {
  const [gameDetails, setGameDetails] = useState<DetailsType>();
  const resize = (link: string, width: number) => {
    return link.replace("media/", `media/resize/${width}/-/`);
  };
  useEffect(() => {
    const fetchGameDetails = async () => {
      setGameDetails(await getGameDetails(game.id));
    };
    fetchGameDetails();
    //TODO add game description
  }, [game.id]);
  return (
    <div className="game">
      <div className="game__top">
        <img
          src={resize(game.background_image, 420)}
          alt="background"
          className="game__top__img"
        />
        <div className="game__top__rating">
          <Icon icon={star} className="game__top__rating__star" />
          <div className="game__top__rating__text">
            {game.rating.toFixed(2)}/5
          </div>
        </div>
        <div className="game__top__name">{game.name}</div>
        <div className="game__top__platforms">
          {game.platforms.map(
            (platformElement) => platformElement.platform.name + " "
          )}
        </div>
      </div>

      {/* <div>{game.id}</div> */}
      <div className="game__bot">
        <div className="game__bot__text">{gameDetails?.description_raw}</div>
      </div>
    </div>
  );
};
