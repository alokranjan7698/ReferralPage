import React from "react";

const Usercard = ({ name, date, total_course, courses, amount }) => {
  return (
    <>
      <div className="col-12 col-md-5 col-lg-4 mt-4 d-flex justify-content-center user-card-outer">
        <div className="user-card col-12 p-4">
          <div className="col-12 d-flex justify-content-between">
            <p className="user-name">{name}</p>
            <p className="enroll-date">{date}</p>
          </div>
          <div className="col-12">
            <p className="enroll-course mb-0">
              Courses Enrolled{`(${total_course})`}
            </p>
            <div className="col-auto ms-1">
              {courses.map((course) => (
                <span className="course col-auto d-inline-block ms-1">
                  {course}
                </span>
              ))}
            </div>
          </div>
          <p className="referral-amount mt-auto">
            Referral Amount <span>&#8377; {amount}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Usercard;
