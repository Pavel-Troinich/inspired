import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, fetchGender } from "../../store/goodsSlice.js";
import { setActiveGender } from "../../store/navigationSlice.js";
import Goods from "../Goods/Goods.jsx";
import Banner from "../Banner/Banner.jsx";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams.js";

const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const page = usePageFromSearchParams(dispatch);
  const { activeGender, categories, genderList } = useSelector(
    (state) => state.navigation,
  );

  const categoryData = categories[activeGender]?.list.find(
    (item) => item.slug === category,
  );
  const bannerData = categories[activeGender]?.banner;

  useEffect(() => {
    if (gender) {
      dispatch(setActiveGender(gender));
    } else if (genderList[0]) {
      dispatch(setActiveGender(genderList[0]));
      dispatch(fetchGender(genderList[0]));
    }
  }, [gender, dispatch, genderList]);

  useEffect(() => {
    if (gender && category) {
      const params = { gender, category };
      if (page) {
        params.page = page;
      }
      dispatch(fetchCategory(params));
      return;
    }
    if (gender) {
      dispatch(fetchGender(gender));
    }
  }, [gender, page, category, dispatch]);

  return (
    <>
      {!category && <Banner bannerData={bannerData} />}
      <Goods title={categoryData?.title || "Новинки"} />
    </>
  );
};

export default MainPage;
