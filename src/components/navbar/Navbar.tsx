import { useState, useEffect, useRef } from "react";
import Logo from "../../svg/Logo.svg";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify-icons/bx/bx-search";
import { useDebounce } from "use-debounce";
import { SearchGames } from "../../utils/searchGames/SearchGames";
import { Types as searchType } from "../../utils/searchGames/interface";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ListItem } from "./listItem/ListItem";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const [searchQuery] = useDebounce(query, 700);
  const [searchResults, setSearchResults] = useState<searchType | undefined>();
  const [games, setGames] = useState<searchType["results"] | undefined>();
  const navRef = useRef(null);
  const [resultsVisible, setResultsVisible] = useState(true);
  useClickOutside(navRef, setResultsVisible);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    const fetchSearchGames = async () => {
      const result = await SearchGames(searchQuery);
      setGames(result.results);
      setSearchResults(result);
      console.log(result);
    };
    fetchSearchGames();
  }, [searchQuery]);
  useEffect(() => {
    if (query === "") {
      setGames(undefined);
    }
  }, [query]);

  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="navbar__logo" />
      <div
        className="navbar__searchBox"
        ref={navRef}
        onClick={() => setResultsVisible(true)}
      >
        <input
          id="search"
          type="text"
          placeholder="Type a game title..."
          className="navbar__searchBox__input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <label htmlFor="search" className="navbar__searchBox__icon">
          <Icon icon={searchIcon} className="navbar__searchBox__icon__svg" />
        </label>
        {resultsVisible && games && (
          <div
            className={
              resultsVisible
                ? "navbar__searchBox__results"
                : "navbar__searchBox__results--hidden"
            }
          >
            <ul className="navbar__searchBox__results__list">
              {games?.map((game) => {
                return <ListItem {...game} key={game.id} />;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
