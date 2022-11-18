import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="col-12">
        <nav>
          <div className="row col-12 col-lg-9 mx-auto navbar d-flex align-items-center">
            <div className="nav-brand col-lg-3 col-6">
              <img
                src={process.env.PUBLIC_URL + "/images/tutedude.png"}
                alt=""
              />
            </div>
            <div className="nav-right row col-lg-8 col-6 ms-auto d-flex align-items-center">
              <ul className="list-unstyled col-12 d-flex align-items-center justify-content-end">
                <li className="d-lg-inline-block d-sm-none d-none">
                  <a href="#">My Assignment</a>
                </li>
                <li className="ms-4 d-lg-inline-block d-sm-none d-none">
                  <a href="#">Chat with Mentor</a>
                </li>
                <li className="ms-4 d-flex">
                  <i className="fas fa-user"></i>
                  <span
                    name="ProfileName"
                    id=""
                    className="border-0 ms-1 dark-color d-flex"
                  >
                    <a href="">ProfileName</a>
                    <i class="far fa-angle-down"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
