import { useState, useEffect } from "react";
import { getGameDetails } from "../../utils/getGameDetails/getGameDetails";
import { Types as DetailsType } from "../../utils/getGameDetails/interface";
import { getGameReviews } from "../../utils/getGameReviews/getGameReviews";
import { Types as ReviewsType } from "../../utils/getGameReviews/interface";
import { useParams } from "react-router-dom";
import { resize } from "../../utils/resize";
import { Row } from "./row/Row";
import defaultImg from "../../svg/default.svg";
import { PlatformToIcon } from "./platformToIcon/PlatformToIcon";
import GameReview from "./gameReview/GameReview";
import { getGameScreenshots } from "../../utils/getGameScreenshots/getGameScreenshots";
import { Types as ScreenshotsType } from "../../utils/getGameScreenshots/interface";
import { readableDate } from "../../utils/readableDate";
interface ParamTypes {
  gameID: string;
}
const FullGameInfo = () => {
  const [showMore, setShowMore] = useState(false);
  const [gameDetails, setGameDetails] = useState<DetailsType>();
  const [gameReviews, setGameReviews] = useState<ReviewsType>();
  const [gameScreenshots, setGameScreenshots] = useState<ScreenshotsType>();
  const { gameID } = useParams<ParamTypes>();
  useEffect(() => {
    const fetchGameDetails = async () => {
      setGameDetails(await getGameDetails(parseInt(gameID)));
      setGameReviews(await getGameReviews(parseInt(gameID)));
    };
    fetchGameDetails();
  }, [gameID]);
  useEffect(() => {
    if (gameDetails?.screenshots_count) {
      const fetchScreenshots = async () => {
        setGameScreenshots(await getGameScreenshots(parseInt(gameID)));
      };
      fetchScreenshots();
    }
  }, [gameDetails, gameID]);
  return (
    <>
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
              <Row
                name="RELEASE DATE"
                value={readableDate(gameDetails?.released)}
              />
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
                      <div
                        key={tag.id}
                        className="fullGame__out__in__left__tagsDiv__values__value"
                      >
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
                  {gameDetails?.platforms.map((platform) => (
                    <PlatformToIcon
                      name={platform.platform.name}
                      key={platform.platform.id}
                    />
                  ))}
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
        {gameReviews && gameReviews.results.length !== 0 && (
          <div className="fullGame__reviews">
            <div className="fullGame__reviews__title">Reviews</div>
            {showMore
              ? gameReviews?.results.map((result) => {
                  return <GameReview {...result} key={result.id} />;
                })
              : gameReviews?.results.slice(0, 2).map((result) => {
                  return <GameReview {...result} key={result.id} />;
                })}

            <div
              className="fullGame__reviews__showMore"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </div>
          </div>
        )}
        {gameScreenshots && (
          <div className="fullGame__screenshots">
            <div className="fullGame__screenshots__header">Screenshots</div>
            <div className="fullGame__screenshots__screens">
              {gameScreenshots.results
                .filter(
                  (screen, idx, screens) =>
                    screens.findIndex(
                      (otherScreen) => otherScreen.id === screen.id
                    ) === idx
                )
                .slice(0, 6)
                .map((screen) => {
                  return (
                    <img
                      key={screen.id}
                      src={resize(screen.image, 420)}
                      alt="screenshot"
                      className="fullGame__screenshots__screens__screen"
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FullGameInfo;
