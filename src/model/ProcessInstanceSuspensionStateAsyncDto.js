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
 * The ProcessInstanceSuspensionStateAsyncDto model module.
 * @module model/ProcessInstanceSuspensionStateAsyncDto
 * @version 7.20.0
 */
export class ProcessInstanceSuspensionStateAsyncDto {
  /**
   * Constructs a new <code>ProcessInstanceSuspensionStateAsyncDto</code>.
   * @alias module:model/ProcessInstanceSuspensionStateAsyncDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProcessInstanceSuspensionStateAsyncDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessInstanceSuspensionStateAsyncDto} obj Optional instance to populate.
   * @return {module:model/ProcessInstanceSuspensionStateAsyncDto} The populated <code>ProcessInstanceSuspensionStateAsyncDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProcessInstanceSuspensionStateAsyncDto();
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
ProcessInstanceSuspensionStateAsyncDto.prototype.suspended = undefined;

