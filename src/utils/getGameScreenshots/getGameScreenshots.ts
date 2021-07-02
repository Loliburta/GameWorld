import { Types } from "./interface";
const apiKey = `key=${process.env.REACT_APP_API_KEY}`;

export const getGameScreenshots = async (gameID: number) => {
  const res = await fetch(
    `https://api.rawg.io/api/games/${gameID}/screenshots?${apiKey}`
  );
  const result: Types = await res.json();
  return result;
};
