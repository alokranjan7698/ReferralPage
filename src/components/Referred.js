import React from "react";
import { Link } from "react-router-dom";
import Usercard from "./Usercard";
import card from "../config/card";

const Referred = () => {
  return (
    <>
      <section>
        <div className="nav-refer row ps-0 pe-0 d-flex col-11 col-lg-8  justify-content-between mx-auto mt-3">
          <span>
            UI/UX {` > `}
            <Link to="/" className=" text-decoration-none text-black">
              Refer & Earn
            </Link>
            {` > `}
            <Link to="/referred" className=" text-decoration-none text-black">
              Friends Referred
            </Link>
          </span>
          <span className="span-go-back mt-3">
            <i class="far fa-long-arrow-alt-left"></i>
            <Link to="/" className=" text-decoration-none d-inline-block ms-2">
              go back
            </Link>
          </span>
        </div>
        <div className="row ps-0 pe-0 d-flex col-11 col-lg-8 justify-content-between mx-auto mt-3">
          <div className="row ps-0 pe-0 mx-auto">
            <div className="referral-div-outer col-12 d-flex justify-content-between align-items-center mx-auto">
              <div className="referral-div col-6 col-lg-5">
                <span className="your-referal-code-text d-inline-block col-12">
                  Your Referral Code
                </span>
                <span className="your-referral-code d-inline-block col-auto">
                  EDCH54
                </span>
              </div>
              <div className=" col-auto wallet-div me-0">
                <span className="wallet-balance-text d-inline-block col-12">
                  Wallet Balance
                </span>
                <span className="wallet-balance d-inline-block">
                  &#8377; 500
                </span>
              </div>
            </div>
          </div>
          <h3 className="enrolled-friend mt-4">
            Friends who enrolled <span className=" d-inline-block">(3)</span>
          </h3>
        </div>
        <div className="row ps-0 pe-0 d-flex col-11 col-lg-8 justify-content-between mx-auto mt-3">
          <div className="row ps-0 pe-0 mx-auto user-card-container">
            {card.map((val) => (
              <Usercard
                name={val.name}
                date={val.date}
                total_course={val.total_courses}
                courses={val.courses}
                amount={val.amount}
              />
            ))}
          </div>
        </div>
        <div className="row ps-0 pe-0 d-flex col-11 col-lg-8 justify-content-between mx-auto mt-3">
          <p className="last-para mt-4">Terms & Conditions</p>
        </div>
      </section>
    </>
  );
};

export default Referred;
