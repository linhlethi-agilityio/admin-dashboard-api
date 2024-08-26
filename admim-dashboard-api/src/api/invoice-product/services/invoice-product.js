'use strict';

/**
 * invoice-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::invoice-product.invoice-product');
