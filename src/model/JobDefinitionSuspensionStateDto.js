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
import {SuspensionStateDto} from './SuspensionStateDto';

/**
 * The JobDefinitionSuspensionStateDto model module.
 * @module model/JobDefinitionSuspensionStateDto
 * @version 7.20.0
 */
export class JobDefinitionSuspensionStateDto {
  /**
   * Constructs a new <code>JobDefinitionSuspensionStateDto</code>.
   * @alias module:model/JobDefinitionSuspensionStateDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>JobDefinitionSuspensionStateDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobDefinitionSuspensionStateDto} obj Optional instance to populate.
   * @return {module:model/JobDefinitionSuspensionStateDto} The populated <code>JobDefinitionSuspensionStateDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new JobDefinitionSuspensionStateDto();
      if (data.hasOwnProperty('suspended'))
        obj.suspended = ApiClient.convertToType(data['suspended'], 'Boolean');
    }
    return obj;
  }
}

/**
 * A Boolean value which indicates whether to activate or suspend a given instance  (e.g. process instance, job, job definition, or batch). When the value is set to true,  the given instance will be suspended and when the value is set to false,  the given instance will be activated.
 * @member {Boolean} suspended
 */
JobDefinitionSuspensionStateDto.prototype.suspended = undefined;

