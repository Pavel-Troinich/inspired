import Container from "../../Layout/Container/Container";
import logo from "../../../assets/images/logo.svg";
import cn from "classnames";
import style from "./Top.module.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as LikeSVG } from "../../../assets/images/heart.svg";
import { ReactComponent as SearchSVG } from "../../../assets/images/search.svg";
import { ReactComponent as CartSVG } from "../../../assets/images/cart.svg";

const Top = () => {
  return (
    <div className={style.top}>
      <Container className={style.topContainer}>
        <a className={cn(style.topLink, style.topPhone)} href="tel:89304902620">
          8 930 490 26 20
        </a>
        <NavLink className={style.logo} to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className={style.topNavigation}>
          <ul className={style.topNavList}>
            <li className={style.topNavItem}>
              <button className={style.topLink}>
                <SearchSVG />
              </button>
            </li>
            <li className={style.topNavItem}>
              <NavLink to="/cart" className={style.topLink}>
                <CartSVG />
              </NavLink>
            </li>
            <li className={style.topNavItem}>
              <NavLink
                to="/favorite"
                className={cn(style.topLink, style.topLike)}
              >
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Top;
