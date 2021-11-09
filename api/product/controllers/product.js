'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let products;
    if (ctx.query._q) {
      products = await strapi.services.product.search(ctx.query);
    } else {
      products = await strapi.services.product.find(ctx.query);
    }

    return products.map(product => (
      {
      id: product.id,
      title: product.title,
      categories: product.categories,
      desc: product.desc,
      price: product.price,
      created_at: product.created_at
    }));
  },
};
