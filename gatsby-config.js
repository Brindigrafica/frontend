/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Brindigrafica",
    description: "",
    release: {
      commit: process.env.COMMIT_SHA || "",
      version: process.env.RELEASE_VERSION || "",
      channel: process.env.DEPLOYMENT_CHANNEL || "",
    },
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId:
          process.env.GOOGLE_ANALYTICS_TRACKING_ID || "UA-XXXXXXXXX-X",
      },
    },
    "gatsby-plugin-manifest",
    "gatsby-plugin-offline",
  ],
};
