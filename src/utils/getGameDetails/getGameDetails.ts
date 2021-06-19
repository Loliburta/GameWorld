import { Types } from "./interface";
const apiKey = `key=${process.env.REACT_APP_API_KEY}`;

export const getGameDetails = async (gameId: number) => {
  const res = await fetch(`https://api.rawg.io/api/games/${gameId}?${apiKey}`);
  const result: Types = await res.json();
  console.log(result.background_image);
  console.log(result.background_image_additional);
  console.log(result);

  return result;
};
