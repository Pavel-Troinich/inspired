import { NavLink } from "react-router-dom";
import style from "./Category.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";

const Category = () => {
  const { activGender, categories } = useSelector((state) => state.navigation);

  return (
    <ul className={style.category}>
      {categories[activGender]?.list.map((item) => (
        <li key={item.link} className={style.item}>
          <NavLink
            to={`${activGender}/${item.slug}`}
            className={({ isActive }) =>
              cn(style.link, isActive && style.linkActive)
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Category;
