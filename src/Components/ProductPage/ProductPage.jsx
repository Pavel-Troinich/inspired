import style from "./ProductPage.module.scss";
import Container from "../Layout/Container/Container.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../store/productSlice.js";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants.js";
import cn from "classnames";
import ColorList from "../ColorList/ColorList.jsx";
import Count from "../Count/Count.jsx";
import ProductSize from "./ProductSize/ProductSize.jsx";
import Goods from "../Goods/Goods.jsx";
import { fetchCategory } from "../../store/goodsSlice.js";
import BtnLike from "../BtnLike/BtnLike.jsx";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const { gender, category } = product;

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
    }
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(
      fetchCategory({ gender, category, count: 4, top: true, exclude: id }),
    );
  }, [dispatch, gender, category, id]);

  return (
    <>
      <section className={style.card}>
        <Container className={style.container}>
          <img
            className={style.image}
            src={`${API_URL}/${product.pic}`}
            alt={product.title}
          />
          <form action="" className={style.content}>
            <h2 className={style.title}>{product.title}</h2>
            <p className={style.price}>руб {product.price}</p>
            <div className={style.vendorCode}>
              <span className={style.subtitle}>Артикул</span>
              <span className={style.id}>{product.id}</span>
            </div>
            <div className={style.color}>
              <span className={cn(style.subtitle, style.colorTitle)}>Цвет</span>
              <ColorList
                colors={product.colors}
                selectedColor={selectedColor}
                handleColorChange={handleColorChange}
              />
            </div>
            <ProductSize
              size={product.size}
              handleSizeChange={handleSizeChange}
              selectedSize={selectedSize}
            />
            <div className={style.description}>
              <p className={cn(style.subtitle, style.descriptionTitle)}>
                Описание
              </p>
              <p className={style.descriptionText}>{product.description}</p>
            </div>
            <div className={style.control}>
              <Count
                className={style.count}
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              <button className={style.addCart} type="submit">
                В корзину
              </button>
              <button
                className={style.favorite}
                aria-label="Добавить в избранное"
                type="button"
              >
                <BtnLike id={id} />
              </button>
            </div>
          </form>
        </Container>
      </section>
      <Goods title="Вам также может понравиться" />
    </>
  );
};

export default ProductPage;
