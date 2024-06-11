"use strict";

/**
 * `javascript-page-populate` middleware
 */

const populate = {
  websites: {
    populate: {
      card: {
        populate: {
          category: {
            populate: true,
          },
          image: {
            fields: ["name", "url"],
          },
        },
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In javascript-page-populate middleware.");
    ctx.query = {
      populate,
      ...ctx.query,
    };
    await next();
  };
};
