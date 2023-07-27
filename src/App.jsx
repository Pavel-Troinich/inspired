import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Root from "./routes/Root";
import ErorPage from "./Components/ErrorPage/ErrorPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./store/navigationSlice.js";
import { fetchColors } from "./store/colorSlice.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="catalog/:gender/:category?" element={<MainPage />} />
      <Route path="men" element={<MainPage gender="men" />} />
      <Route path="*" element={<ErorPage />} />
    </Route>,
  ),
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  }, [dispatch]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
