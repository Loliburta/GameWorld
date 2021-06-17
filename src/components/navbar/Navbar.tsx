import { useState, useEffect, useRef } from "react";
import Logo from "../../svg/Logo.svg";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify-icons/bx/bx-search";
import { useDebounce } from "use-debounce";
import { SearchGames } from "../../utils/searchGames/SearchGames";
import { Types as searchType } from "../../utils/searchGames/interface";
import { useClickOutside } from "../../hooks/useClickOutside";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const [searchQuery] = useDebounce(query, 1000);
  const [searchResults, setSearchResults] = useState<searchType | undefined>();
  const [games, setGames] = useState<searchType["results"]>();
  const navRef = useRef(null);
  const [resultsVisible, setResultsVisible] = useState(false);
  useClickOutside(navRef, setResultsVisible);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults(undefined);
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
      setResultsVisible(false);
    } else {
      setResultsVisible(true);
    }
  }, [query]);

  return (
    <div
      className="navbar"
      ref={navRef}
      onClick={() => setResultsVisible(true)}
    >
      <img src={Logo} alt="Logo" className="navbar__logo" />
      <div className="navbar__searchBox">
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
        {resultsVisible && (
          <div className="navbar__searchBox__results">
            <ul className="navbar__searchBox__results__list">
              {games?.map((game) => {
                return (
                  <li className="navbar__searchBox__results__list__item">
                    {game.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
