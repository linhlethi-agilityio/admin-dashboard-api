'use strict';

/**
 * favorite-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::favorite-service.favorite-service');
