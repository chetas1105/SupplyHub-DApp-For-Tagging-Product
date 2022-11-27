'use strict';

var ElementService = require('qrious-core/src/service/element/ElementService');

/**
 * An implementation of {@link ElementService} intended for use within a browser environment.
 *
 * @public
 * @class
 * @extends ElementService
 */
var BrowserElementService = ElementService.extend({

  /**
   * @override
   */
  createCanvas: function () {
    return document.createElement('canvas');
  },

  /**
   * @override
   */
  createImage: function () {
    return document.createElement('img');
  },

  /**
   * @override
   */
  isCanvas: function (element) {
    return element instanceof HTMLCanvasElement;
  },

  /**
   * @override
   */
  isImage: function (element) {
    return element instanceof HTMLImageElement;
  }

});

module.exports = BrowserElementService;
