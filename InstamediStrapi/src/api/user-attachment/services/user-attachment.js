'use strict';

/**
 * user-attachment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-attachment.user-attachment');
