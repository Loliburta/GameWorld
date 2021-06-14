import Logo from "../../svg/Logo.svg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" />
      <input
        type="text"
        placeholder="Type a game title..."
        className="navbar__search"
      ></input>
    </div>
  );
};
