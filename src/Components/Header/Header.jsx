import Top from "./Top/Top";
import Navigation from "./Navigation/Navigation";

const Header = ({ list }) => (
  <header>
    <Top />
    <Navigation list={list} />
  </header>
)

export default Header;