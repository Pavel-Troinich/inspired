import style from "./Banner.module.scss";
import Container from "../Layout/Container/Container.jsx";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../constants.js";

const Banner = ({ bannerData }) => {
  return (
    bannerData && (
      <section
        className={style.banner}
        style={{ backgroundImage: `url(${API_URL}/${bannerData.bg.desktop})` }}
      >
        <Container>
          <div className={style.content}>
            <h2 className={style.title}>{bannerData.description}</h2>
            <NavLink to={`/product/${bannerData.id}`} className={style.link}>
              Перейти
            </NavLink>
          </div>
        </Container>
      </section>
    )
  );
};

export default Banner;
