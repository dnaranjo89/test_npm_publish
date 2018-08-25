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
    instance = new EasApi.RandomNumberApi();
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

  describe('RandomNumberApi', function() {
    describe('randomNumberCreate', function() {
      it('should call randomNumberCreate successfully', function(done) {
        //uncomment below and update the code to test randomNumberCreate
        //instance.randomNumberCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('randomNumberRead', function() {
      it('should call randomNumberRead successfully', function(done) {
        //uncomment below and update the code to test randomNumberRead
        //instance.randomNumberRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('randomNumberToss', function() {
      it('should call randomNumberToss successfully', function(done) {
        //uncomment below and update the code to test randomNumberToss
        //instance.randomNumberToss(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
