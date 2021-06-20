import { useState, useEffect } from "react";
import { getGameDetails } from "../../utils/getGameDetails/getGameDetails";
import { Types as DetailsType } from "../../utils/getGameDetails/interface";
import { useParams } from "react-router-dom";
import { resize } from "../../utils/resize";
import { Row } from "./row/Row";
import defaultImg from "../../svg/default.svg";
interface ParamTypes {
  gameID: string;
}
export const FullGameInfo = () => {
  const [gameDetails, setGameDetails] = useState<DetailsType>();
  const { gameID } = useParams<ParamTypes>();
  useEffect(() => {
    const fetchGameDetails = async () => {
      setGameDetails(await getGameDetails(parseInt(gameID)));
    };
    fetchGameDetails();
  }, [gameID]);
  return (
    <div className="fullGame">
      <div className="fullGame__name">{gameDetails?.name}</div>
      <div className="fullGame__out">
        <img
          src={resize(gameDetails?.background_image_additional, 1280)}
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = defaultImg;
          }}
          className="fullGame__out__img"
          alt="game"
        />
        <div className="fullGame__out__in">
          <div className="fullGame__out__in__left">
            <img
              src={resize(gameDetails?.background_image, 420)}
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src = defaultImg;
              }}
              alt="game"
              className="fullGame__out__in__left__img"
            />
            <Row name="RATING" value={gameDetails?.rating} text="/5" />
            <Row
              name="METACRITIC"
              value={gameDetails?.metacritic}
              text="/100"
            />
            {gameDetails?.rating || gameDetails?.metacritic ? <br /> : ""}
            <Row name="RELEASE DATE" value={gameDetails?.released} />
            <Row
              name="COMPANY"
              value={gameDetails?.developers
                .map((developer) => developer.name)
                .slice(0, 1)}
            />
            <Row
              name="GENRE"
              value={gameDetails?.genres.map((genre) => genre.name + " ")}
            />
            {gameDetails?.released ||
            gameDetails?.developers ||
            gameDetails?.genres ? (
              <br />
            ) : (
              ""
            )}
            <div className="fullGame__out__in__left__tagsDiv">
              <div className="fullGame__out__in__left__tagsDiv__name">
                POPULAR TAGS
              </div>
              <div className="fullGame__out__in__left__tagsDiv__values">
                {gameDetails?.tags
                  .filter(
                    (tag) =>
                      ![
                        "steam-trading-cards",
                        "In-App Purchases",
                        "Steam Achievements",
                        "Full controller support",
                        "cooperative",
                      ].includes(tag.name)
                  )
                  .slice(0, 5)
                  .map((tag) => (
                    <div className="fullGame__out__in__left__tagsDiv__values__value">
                      {tag.name}
                    </div>
                  ))}
              </div>
            </div>
            {gameDetails?.tags ? <div className="br"></div> : ""}
            <div className="fullGame__out__in__left__platformsDiv">
              <div className="fullGame__out__in__left__platformsDiv__name">
                PLATFORMS
              </div>
              <div className="fullGame__out__in__left__platformsDiv__value">
                {gameDetails?.platforms.map(
                  (platform) => platform.platform.name + " "
                )}
              </div>
            </div>
          </div>
          <div className="fullGame__out__in__right">
            <div className="fullGame__out__in__right__about">
              ABOUT THIS GAME
            </div>
            <div className="fullGame__out__in__right__desc">
              {gameDetails?.description_raw}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
