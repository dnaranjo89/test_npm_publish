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
import BaseDraw from './BaseDraw';
import DrawMetadata from './DrawMetadata';
import SpinnerResult from './SpinnerResult';

/**
 * The Spinner model module.
 * @module model/Spinner
 * @version v1
 */
class Spinner {
    /**
     * Constructs a new <code>Spinner</code>.
     * @alias module:model/Spinner
     * @extends module:model/BaseDraw
     * @implements module:model/BaseDraw
     */
    constructor() { 
        BaseDraw.initialize(this);
        Spinner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Spinner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Spinner} obj Optional instance to populate.
     * @return {module:model/Spinner} The populated <code>Spinner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Spinner();
            BaseDraw.constructFromObject(data, obj);
            BaseDraw.constructFromObject(data, obj);

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [SpinnerResult]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SpinnerResult>} results
 */
Spinner.prototype['results'] = undefined;


// Implement BaseDraw interface:
/**
 * @member {} id
 */
BaseDraw.prototype['id'] = undefined;
/**
 * @member {} created_at
 */
BaseDraw.prototype['created_at'] = undefined;
/**
 * @member {} updated_at
 */
BaseDraw.prototype['updated_at'] = undefined;
/**
 * @member {} title
 */
BaseDraw.prototype['title'] = undefined;
/**
 * @member {} description
 */
BaseDraw.prototype['description'] = undefined;
/**
 * @member {} private_id
 */
BaseDraw.prototype['private_id'] = undefined;
/**
 * @member {} metadata
 */
BaseDraw.prototype['metadata'] = undefined;




export default Spinner;

