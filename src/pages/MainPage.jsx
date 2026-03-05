import { Link } from "react-router-dom";
import Header from "../include/Header";
import "./MainPage.css"

const MainPage = () => {

  return (
    <>
      <div className="main-container">
        <Header />
        <div>
          {/* ✅ /about을 따옴표로 감싸야 합니다. */}
          <Link to={"/todo/list?page=3&size=20"}>LINK ABOUT PAGE</Link> <br />

          {/* 💡 리액트에서는 <a> 태그보다 <Link> 사용을 권장합니다. */}
          <a href="/about">A ABOUT PAGE</a>
        </div>
        <main className="content-area">
          <div className="butten-wrapper">
            <button type="button" className="custom-btn-outline">
              Main Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;