import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, fetchGender } from "../../store/goodsSlice.js";
import { setActiveGender } from "../../store/navigationSlice.js";
import Goods from "../Goods/Goods.jsx";
import Banner from "../Banner/Banner.jsx";

const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const { activeGender, categories } = useSelector((state) => state.navigation);

  const categoryData = categories[activeGender]?.list.find(
    (item) => item.slug === category,
  );
  const bannerData = categories[activeGender]?.banner;

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }
    if (gender) {
      dispatch(fetchGender(gender));
    }
  }, [gender, category, dispatch]);

  return (
    <>
      <Banner bannerData={bannerData} />
      <Goods categoryData={categoryData} />
    </>
  );
};

export default MainPage;
