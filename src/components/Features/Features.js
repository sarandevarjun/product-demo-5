import React from "react";

const Features = () => {
  return (
    <>
      {/* Top Feature Start */}
      <div className="container-fluid top-feature py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div
                className="bg-white shadow d-flex align-items-center h-100 px-5"
                style={{ minHeight: 160 }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-times text-primary" />
                  </div>
                  <div className="ps-3">
                    <h4>No Hidden Cost</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div
                className="bg-white shadow d-flex align-items-center h-100 px-5"
                style={{ minHeight: 160 }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-users text-primary" />
                  </div>
                  <div className="ps-3">
                    <h4>Dedicated Team</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div
                className="bg-white shadow d-flex align-items-center h-100 px-5"
                style={{ minHeight: 160 }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-phone text-primary" />
                  </div>
                  <div className="ps-3">
                    <h4>24/7 Available</h4>
                    <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Feature End */}
    </>
  );
};

export default Features;
