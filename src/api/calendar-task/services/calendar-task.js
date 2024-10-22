'use strict';

/**
 * calendar-task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calendar-task.calendar-task');
