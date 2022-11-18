import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <section className="col-12">
        <nav>
          <div className="row col-12 col-lg-9 mx-auto navbar d-flex align-items-center">
            <div className="nav-brand col-lg-3 col-6">
              <img
                src={process.env.PUBLIC_URL + "/images/tutedude.png"}
                alt=""
              />
            </div>
            <div className="nav-right row  col-lg-8 col-6 ms-auto d-flex align-items-center">
              <ul className="list-unstyled col-12 d-flex align-items-center justify-content-end">
                <li className="d-lg-inline-block d-sm-none d-none">
                  <a href="#">My Assignment</a>
                </li>
                <li className="ms-4 d-lg-inline-block d-sm-none d-none">
                  <a href="#">Chat with Mentor</a>
                </li>
                <li className="ms-4 d-flex">
                  <i className="fas fa-user"></i>
                  <select name="ProfileName" id="" className="border-0">
                    <option value="">ProfileName</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section>
        <div className="col-11 col-lg-8 nav-refer mx-auto py-3">
          <span>UI/UX Refer & Earn</span>
        </div>
        <div className="row d-flex col-12 col-lg-8 justify-content-between mx-auto mt-3">
          <div className=" col-12 col-lg-6 left-card ms-0">
            <div className="row">
              <div className="col-6 col-lg-4 mx-auto my-1">
                <span className="text-left-card d-inline-block">
                  Referral Earning
                </span>
                <span className="numbers-left-card">2500</span>
              </div>
              <div className="col-6 col-lg-4 mx-auto my-1">
                <span className="text-left-card d-inline-block">
                  Total Referrals
                </span>
                <span className="numbers-left-card">700</span>
              </div>
              <div className="col-6 col-lg-4 mx-auto my-1">
                <span className="text-left-card d-inline-block">
                  Wallet Balance
                </span>
                <span className="numbers-left-card">500</span>
              </div>
              <div className="col-6 col-lg-6 mx-auto mt-lg-4 my-1 d-lg-flex justify-content-center">
                <button className="btn-withdraw align-self-center">
                  Withdraw Balance
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 right-card me-end">
            <span className="referal-code-text col-12 col-lg-12 d-inline-block">
              Your Referral Code
            </span>
            <span className="col-12 col-lg-10 mt-3 text-center d-inline-block referral-code">
              EDCH54
            </span>
          </div>
        </div>
        <div className="row d-flex col-12 col-lg-8 justify-content-between mx-auto mt-3">
          <h3 className="how-it-work">How does it work ?</h3>
          <div className="row col-12 col-lg-5 d-flex align-items-center">
            <i class="fas fa-users how-it-work-icon col-3"></i>
            <div className="col-9">
              <h5 className="card-heading mb-0">Invite your Friends</h5>
              <p className="card-para">
                Share the link tutedude.com with your friends
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
