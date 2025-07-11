"use strict";

/**
 * sidebar controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::sidebar.sidebar", ({ strapi }) => ({
  async find(ctx) {
    const populate = {
      menu_items: {
        populate: true,
      },
      social_links: {
        populate: true,
      },
      image: {
        fields: ["name", "url"],
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
      menu_items: {
        populate: true,
      },
      social_links: {
        populate: true,
      },
      image: {
        fields: ["name", "url"],
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
}));
