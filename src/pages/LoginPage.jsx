import Header from "../include/Header";
import "./MainPage.css"

const LoginPage = () => {

  return <>
    <div className="main-container">
      <Header />

      <main className="content-area">
        <div className="butten-wrapper">
          <button type="button" className="custom-btn-outline" >Login Page</button>
        </div>

        <button type="button">로그인</button><br />
        <button type="button">로그아웃</button>
      </main>

    </div>

  </>
}

export default LoginPage;