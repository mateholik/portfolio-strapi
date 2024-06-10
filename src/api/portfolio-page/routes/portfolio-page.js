"use strict";

/**
 * portfolio-page router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::portfolio-page.portfolio-page", {
  config: {
    find: {
      middlewares: ["api::portfolio-page.portfolio-page-populate"],
    },
    findOne: {
      middlewares: ["api::portfolio-page.portfolio-page-populate"],
    },
  },
});
