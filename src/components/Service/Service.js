import React from "react";
import serviceImg1 from "../../images/service-1.jpg";
import serviceImg2 from "../../images/service-2.jpg";
import serviceImg3 from "../../images/service-3.jpg";
import serviceImg4 from "../../images/service-4.jpg";
import serviceImg5 from "../../images/service-5.jpg";
import serviceImg6 from "../../images/service-6.jpg";

/*Icon images*/
import iconImage8 from "../../images/icon/icon-8.png";
import iconImage2 from "../../images/icon/icon-2.png";
import iconImage3 from "../../images/icon/icon-3.png";
import iconImage4 from "../../images/icon/icon-4.png";
import iconImage5 from "../../images/icon/icon-5.png";
import iconImage6 from "../../images/icon/icon-6.png";

const Service = () => {
  return (
    <>
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="fs-5 fw-bold text-primary">Our Services</p>
            <h1 className="display-5 mb-5">Services That We Offer For You</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img className="img-fluid" src={serviceImg1} alt="" />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img className="img-fluid" src={iconImage3} alt="Icon" />
                  </div>
                  <h4 className="mb-3">Landscaping</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2" />
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img className="img-fluid" src={serviceImg2} alt="" />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img className="img-fluid" src={iconImage6} alt="Icon" />
                  </div>
                  <h4 className="mb-3">Pruning plants</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2" />
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img className="img-fluid" src={serviceImg3} alt="" />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img className="img-fluid" src={iconImage5} alt="Icon" />
                  </div>
                  <h4 className="mb-3">Irrigation &amp; Drainage</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2" />
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img className="img-fluid" src={serviceImg4} alt="" />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img className="img-fluid" src={iconImage4} alt="Icon" />
                  </div>
                  <h4 className="mb-3">Garden Maintenance </h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2" />
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img className="img-fluid" src={serviceImg5} alt="" />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img className="img-fluid" src={iconImage8} alt="Icon" />
                  </div>
                  <h4 className="mb-3">Green Technology</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2" />
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img className="img-fluid" src={serviceImg6} alt="" />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img className="img-fluid" src={iconImage2} alt="Icon" />
                  </div>
                  <h4 className="mb-3">Urban Gardening</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn btn-sm" href="">
                    <i className="fa fa-plus text-primary me-2" />
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
};

export default Service;
