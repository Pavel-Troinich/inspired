import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setPage } from "../store/goodsSlice.js";
import { useDispatch } from "react-redux";

export const usePageFromSearchParams = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageUrl = +searchParams.get("page");

  useEffect(() => {
    dispatch(setPage(pageUrl));
  }, [pageUrl, dispatch]);
  return pageUrl;
};
