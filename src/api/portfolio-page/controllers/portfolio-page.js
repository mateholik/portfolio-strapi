"use strict";

/**
 * portfolio-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::portfolio-page.portfolio-page",
  ({ strapi }) => ({
    async find(ctx) {
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
        seo: {
          populate: {
            metaImage: {
              fields: ["name", "url"],
            },
            metaSocial: {
              populate: {
                image: {
                  fields: ["name", "url"],
                },
              },
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
        seo: {
          populate: {
            metaImage: {
              fields: ["name", "url"],
            },
            metaSocial: {
              populate: {
                image: {
                  fields: ["name", "url"],
                },
              },
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
