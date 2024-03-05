import React from "react";

import carouselImg1 from "../images/carousel-1.jpg"; // Importing the image
import carouselImg2 from "../images/carousel-2.jpg"; // Importing the image

const Carousel = () => {
  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carouselImg1} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">
                        Make Your Home Like Garden
                      </h1>
                      <a href="" className="btn btn-primary py-sm-3 px-sm-4">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carouselImg2} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">
                        Create Your Own Small Garden At Home
                      </h1>
                      <a href="" className="btn btn-primary py-sm-3 px-sm-4">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
    </>
  );
};

export default Carousel;
