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
 * The TelemetryCountDto model module.
 * @module model/TelemetryCountDto
 * @version 7.20.0
 */
export class TelemetryCountDto {
  /**
   * Constructs a new <code>TelemetryCountDto</code>.
   * @alias module:model/TelemetryCountDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TelemetryCountDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TelemetryCountDto} obj Optional instance to populate.
   * @return {module:model/TelemetryCountDto} The populated <code>TelemetryCountDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TelemetryCountDto();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * An integer value representing the count for this metric.
 * @member {Number} count
 */
TelemetryCountDto.prototype.count = undefined;

