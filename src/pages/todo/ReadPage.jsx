import Header from "../../include/Header";
import { useParams } from "react-router-dom";
import "./ReadPage.css"

const ReadPage = () => {
  const { tno } = useParams();

  return (
    <>
      <div className="main-container">
        <Header />
        <p>ReadPage tno = {tno} </p>
        <main className="content-area">
          <div className="butten-wrapper">
            <button type="button" className="custom-btn-outline" >Read Page</button>
          </div>
        </main>
      </div>
    </>
  );
}

export default ReadPage;