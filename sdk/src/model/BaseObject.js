/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BaseObject model module.
 * @module model/BaseObject
 * @version v1
 */
class BaseObject {
    /**
     * Constructs a new <code>BaseObject</code>.
     * @alias module:model/BaseObject
     */
    constructor() { 
        
        BaseObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseObject} obj Optional instance to populate.
     * @return {module:model/BaseObject} The populated <code>BaseObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseObject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
BaseObject.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
BaseObject.prototype['created_at'] = undefined;






export default BaseObject;

