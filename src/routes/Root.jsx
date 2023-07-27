import Header from "../Components/Header/Header";
import Main from "../Components/Layout/Main/Main";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Root;
