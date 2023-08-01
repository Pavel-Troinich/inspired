import style from "./Banner.module.scss";
import Container from "../Layout/Container/Container.jsx";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../constants.js";
import { useMedia } from "react-use";
import { useEffect, useState } from "react";

const Banner = ({ bannerData }) => {
  const isMobile = useMedia("(max-width: 540px)");
  const isTablet = useMedia("(max-width: 768px)");
  const isLaptop = useMedia("(max-width: 1024px)");
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    if (isMobile) {
      setBgUrl(`${API_URL}/${bannerData?.bg.mobile}`);
    } else if (isTablet) {
      setBgUrl(`${API_URL}/${bannerData?.bg.tablet}`);
    } else if (isLaptop) {
      setBgUrl(`${API_URL}/${bannerData?.bg.laptop}`);
    } else {
      setBgUrl(`${API_URL}/${bannerData?.bg.desktop}`);
    }
  }, [isMobile, isTablet, isLaptop, bannerData]);

  return (
    bannerData && (
      <section
        className={style.banner}
        style={{ backgroundImage: `url(${bgUrl})` }}
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
