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
 * The CountResultDto model module.
 * @module model/CountResultDto
 * @version 7.20.0
 */
export class CountResultDto {
  /**
   * Constructs a new <code>CountResultDto</code>.
   * @alias module:model/CountResultDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CountResultDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CountResultDto} obj Optional instance to populate.
   * @return {module:model/CountResultDto} The populated <code>CountResultDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CountResultDto();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The number of matching instances.
 * @member {Number} count
 */
CountResultDto.prototype.count = undefined;

