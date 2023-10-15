import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function IndexPage() {
  return (
    <>
      <div className="wrapper-content">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default IndexPage;
