/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.2.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EasApi);
  }
}(this, function(expect, EasApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EasApi.Letter();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Letter', function() {
    it('should create an instance of Letter', function() {
      // uncomment below and update the code to test Letter
      //var instance = new EasApi.Letter();
      //expect(instance).to.be.a(EasApi.Letter);
    });

    it('should have the property numberOfResults (base name: "number_of_results")', function() {
      // uncomment below and update the code to test the property numberOfResults
      //var instance = new EasApi.Letter();
      //expect(instance).to.be();
    });

    it('should have the property allowRepeatedResults (base name: "allow_repeated_results")', function() {
      // uncomment below and update the code to test the property allowRepeatedResults
      //var instance = new EasApi.Letter();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instance = new EasApi.Letter();
      //expect(instance).to.be();
    });

  });

}));
