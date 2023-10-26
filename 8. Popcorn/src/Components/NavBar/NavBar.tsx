import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import NumResults from "../NumResults/NumResults";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
};

export default NavBar;
