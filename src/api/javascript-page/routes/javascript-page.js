"use strict";

/**
 * javascript-page router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::javascript-page.javascript-page", {
  config: {
    find: {
      middlewares: ["api::javascript-page.javascript-page-populate"],
    },
    findOne: {
      middlewares: ["api::javascript-page.javascript-page-populate"],
    },
  },
});
