/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `product-demo-4`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `pages`,
        // Path to the directory
        path: `${__dirname}/src/pages/`,
      },
    },

    // {
    //   resolve: `gatsby-plugin-load-script`,
    //   options: {
    //     src: [
    //       "https://code.jquery.com/jquery-3.4.1.min.js",
    //       "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
    //       "src/lib/wow/wow.min.js",
    //       "src/lib/easing/easing.min.js",
    //       "src/lib/waypoints/waypoints.min.js",
    //       "src/lib/owlcarousel/owl.carousel.min.js",
    //       "src/lib/counterup/counterup.min.js",
    //       "src/lib/parallax/parallax.min.js",
    //       "src/lib/isotope/isotope.pkgd.min.js",
    //       "src/lib/lightbox/js/lightbox.min.js",
    //       "src/js/main.js",
    //     ],
    //   },
    // },

    /* Product md files listed */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `products`,
        // Path to the directory
        path: `${__dirname}/src/products/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `projects`,
        // Path to the directory
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: "Product demo 4",
    description: "Sample properties to display here",
    author: "Saravanan",
  },
};
