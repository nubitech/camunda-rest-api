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
import {JobRetriesDto} from './JobRetriesDto';

/**
 * The SetJobRetriesDto model module.
 * @module model/SetJobRetriesDto
 * @version 7.20.0
 */
export class SetJobRetriesDto {
  /**
   * Constructs a new <code>SetJobRetriesDto</code>.
   * @alias module:model/SetJobRetriesDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SetJobRetriesDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetJobRetriesDto} obj Optional instance to populate.
   * @return {module:model/SetJobRetriesDto} The populated <code>SetJobRetriesDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SetJobRetriesDto();
      if (data.hasOwnProperty('retries'))
        obj.retries = ApiClient.convertToType(data['retries'], 'Number');
    }
    return obj;
  }
}

/**
 * The number of retries to set for the resource.  Must be >= 0. If this is 0, an incident is created and the task, or job, cannot be fetched, or acquired anymore unless the retries are increased again. Can not be null.
 * @member {Number} retries
 */
SetJobRetriesDto.prototype.retries = undefined;

