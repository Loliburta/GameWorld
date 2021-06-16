import Logo from "../../svg/Logo.svg";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify-icons/bx/bx-search";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="navbar__logo" />
      <div className="navbar__searchBox">
        <input
          id="search"
          type="text"
          placeholder="Type a game title..."
          className="navbar__searchBox__input"
        ></input>
        <label htmlFor="search" className="navbar__searchBox__icon">
          <Icon icon={searchIcon} className="navbar__searchBox__icon__svg" />
        </label>
      </div>
    </div>
  );
};
