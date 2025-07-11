"use strict";

/**
 * faq-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::faq-page.faq-page",
  ({ strapi }) => ({
    async find(ctx) {
      const populate = {
        faqs: {
          populate: true,
        },
        seo: {
          populate: {
            metaImage: {
              fields: ["name", "url"],
            },
            metaSocial: {
              populate: true,
            },
          },
        },
      };

      // Merge with any existing query parameters
      ctx.query = {
        populate,
        ...ctx.query,
      };

      // Call the default core action
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },

    async findOne(ctx) {
      const populate = {
        faqs: {
          populate: true,
        },
        seo: {
          populate: {
            metaImage: {
              fields: ["name", "url"],
            },
            metaSocial: {
              populate: true,
            },
          },
        },
      };

      // Merge with any existing query parameters
      ctx.query = {
        populate,
        ...ctx.query,
      };

      // Call the default core action
      const { data, meta } = await super.findOne(ctx);
      return { data, meta };
    },
  })
);
