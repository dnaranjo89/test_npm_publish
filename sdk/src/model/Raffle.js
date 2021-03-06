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
import Participant from './Participant';
import Prize from './Prize';
import RaffleResult from './RaffleResult';

/**
 * The Raffle model module.
 * @module model/Raffle
 * @version v1
 */
class Raffle {
    /**
     * Constructs a new <code>Raffle</code>.
     * @alias module:model/Raffle
     * @extends module:model/BaseDraw
     * @implements module:model/BaseDraw
     * @param prizes {} 
     * @param participants {} 
     */
    constructor(prizes, participants) { 
        BaseDraw.initialize(this);
        Raffle.initialize(this, prizes, participants);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, prizes, participants) { 
        obj['prizes'] = prizes;
        obj['participants'] = participants;
    }

    /**
     * Constructs a <code>Raffle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Raffle} obj Optional instance to populate.
     * @return {module:model/Raffle} The populated <code>Raffle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Raffle();
            BaseDraw.constructFromObject(data, obj);
            BaseDraw.constructFromObject(data, obj);

            if (data.hasOwnProperty('prizes')) {
                obj['prizes'] = ApiClient.convertToType(data['prizes'], [Prize]);
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [Participant]);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [RaffleResult]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Prize>} prizes
 */
Raffle.prototype['prizes'] = undefined;

/**
 * @member {Array.<module:model/Participant>} participants
 */
Raffle.prototype['participants'] = undefined;

/**
 * @member {Array.<module:model/RaffleResult>} results
 */
Raffle.prototype['results'] = undefined;


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




export default Raffle;

