import React from "react";
import { Link } from "react-router-dom";
import how_it_work from "../config/card_how_work";
import Card from "./Card";

const Referrals = () => {
  return (
    <>
      <section>
        <div className="col-11 col-lg-8 nav-refer mx-auto py-3">
          <span>
            UI/UX{" > "}
            <Link to="/" className=" text-decoration-none text-black">
              Refer & Earn
            </Link>
          </span>
        </div>
        <div className="row d-flex col-11 col-lg-8 justify-content-between mx-auto mt-3">
          <div className=" col-12 col-lg-6 left-card ms-0">
            <div className="row">
              <div className="col-6 col-lg-4 mx-auto my-1">
                <span className="text-left-card d-inline-block">
                  Referral Earning
                </span>
                <span className="numbers-left-card">&#8377; 2500</span>
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
                <span className="numbers-left-card">&#8377; 500</span>
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
        <div className="row d-flex col-11 col-lg-8 justify-content-between mx-auto mt-3">
          <h3 className="how-it-work">How does it work ?</h3>
          {how_it_work.map((val) => (
            <Card head={val.head} para={val.para} path={val.path} />
          ))}
        </div>
        <div className="row d-flex col-11 col-lg-8 justify-content-between mx-auto mt-3">
          <Link to="/referred" className="last-para mt-4 text-decoration-none">
            Friends Who Enrolled
          </Link>
          <p className="last-para mt-2">Terms & Conditions</p>
        </div>
      </section>
    </>
  );
};

export default Referrals;
