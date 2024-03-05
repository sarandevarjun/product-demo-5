import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

function Navbar() {
  const data = useStaticQuery(graphql`
    query siteInformation {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);
  const siteTitle = data.site.siteMetadata.title;

  //console.log("siteInformation::", data);
  //console.log("siteTitle::", siteTitle);

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h1 className="m-0">{siteTitle}</h1>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <Link
          to="/contact"
          className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block"
        >
          Get A Quote<i className="fa fa-arrow-right ms-3"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
