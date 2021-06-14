import { Types } from "./interface";
const apiKey = `key=${process.env.REACT_APP_API_KEY}`;

export const getRelevantGames = async () => {
  const res = await fetch(`https://api.rawg.io/api/games/lists/main?${apiKey}`);
  const result: Types = await res.json();
  // Remove Duplicates
  const games = result.results.filter(
    (game, idx, games) =>
      games.findIndex((someGame) => someGame.id === game.id) === idx
  );
  return games;
};
