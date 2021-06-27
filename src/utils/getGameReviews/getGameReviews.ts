import { Types } from "./interface";
const apiKey = `key=${process.env.REACT_APP_API_KEY}`;

export const getGameReviews = async (gameID: number) => {
  const res = await fetch(
    `https://api.rawg.io/api/games/${gameID}/reviews?${apiKey}`
  );
  const result: Types = await res.json();
  return result;
};
