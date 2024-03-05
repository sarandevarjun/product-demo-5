import React from "react";
import teamImage1 from "../../images/team-1.jpg";
import teamImage2 from "../../images/team-2.jpg";
import teamImage3 from "../../images/team-3.jpg";

const Team = () => {
  return (
    <>
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="fs-5 fw-bold text-primary">Our Team</p>
            <h1 className="display-5 mb-5">
              Dedicated &amp; Experienced Team Members
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded">
                <img className="img-fluid" src={teamImage1} alt="" />
                <div className="team-text">
                  <h4 className="mb-0">Doris Jordan</h4>
                  <p className="text-primary">Landscape Designer</p>
                  <div className="team-social d-flex">
                    <a className="btn btn-square rounded-circle me-2" href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square rounded-circle me-2" href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square rounded-circle me-2" href="">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded">
                <img className="img-fluid" src={teamImage2} alt="" />
                <div className="team-text">
                  <h4 className="mb-0">Johnny Ramirez</h4>
                  <p className="text-primary">Garden Designer</p>
                  <div className="team-social d-flex">
                    <a className="btn btn-square rounded-circle me-2" href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square rounded-circle me-2" href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square rounded-circle me-2" href="">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded">
                <img className="img-fluid" src={teamImage3} alt="" />
                <div className="team-text">
                  <h4 className="mb-0">Diana Wagner</h4>
                  <p className="text-primary">Senior Gardener</p>
                  <div className="team-social d-flex">
                    <a className="btn btn-square rounded-circle me-2" href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square rounded-circle me-2" href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square rounded-circle me-2" href="">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
};

export default Team;
