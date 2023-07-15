/*
 * Camunda Platform REST API
 * OpenApi Spec for Camunda Platform REST API.
 *
 * OpenAPI spec version: 7.20.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The JobDuedateDto model module.
 * @module model/JobDuedateDto
 * @version 7.20.0
 */
export class JobDuedateDto {
  /**
   * Constructs a new <code>JobDuedateDto</code>.
   * @alias module:model/JobDuedateDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>JobDuedateDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobDuedateDto} obj Optional instance to populate.
   * @return {module:model/JobDuedateDto} The populated <code>JobDuedateDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new JobDuedateDto();
      if (data.hasOwnProperty('duedate'))
        obj.duedate = ApiClient.convertToType(data['duedate'], 'Date');
      if (data.hasOwnProperty('cascade'))
        obj.cascade = ApiClient.convertToType(data['cascade'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The date to set when the job has the next execution.
 * @member {Date} duedate
 */
JobDuedateDto.prototype.duedate = undefined;

/**
 * A boolean value to indicate if modifications to the due date should cascade to subsequent jobs. (e.g. Modify the due date of a timer by +15 minutes. This flag indicates if a +15 minutes should be applied to all subsequent timers.) This flag only affects timer jobs and only works if due date is not null. Default: `false`
 * @member {Boolean} cascade
 */
JobDuedateDto.prototype.cascade = undefined;

