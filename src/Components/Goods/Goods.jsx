import style from "./Goods.module.scss";
import Container from "../Layout/Container/Container.jsx";
import Product from "../Product/Product.jsx";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination.jsx";

const Goods = ({ title }) => {
  const { goodsList } = useSelector((state) => state.goods);

  return (
    <section>
      <Container>
        <h2 className={style.title}>{title}</h2>
        <ul className={style.list}>
          {goodsList.map((item) => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
        <Pagination />
      </Container>
    </section>
  );
};

export default Goods;
