import { Types } from "./interface";
const apiKey = `key=${process.env.REACT_APP_API_KEY}`;

export const SearchGames = async (searchQuery: string) => {
  const res = await fetch(
    `https://api.rawg.io/api/games?${apiKey}&search=${searchQuery.toLowerCase()}&page_size=20`
  );
  const result: Types = await res.json();
  return result;
};
