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
 * The ExecutionDto model module.
 * @module model/ExecutionDto
 * @version 7.20.0
 */
export class ExecutionDto {
  /**
   * Constructs a new <code>ExecutionDto</code>.
   * @alias module:model/ExecutionDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ExecutionDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExecutionDto} obj Optional instance to populate.
   * @return {module:model/ExecutionDto} The populated <code>ExecutionDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ExecutionDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('processInstanceId'))
        obj.processInstanceId = ApiClient.convertToType(data['processInstanceId'], 'String');
      if (data.hasOwnProperty('ended'))
        obj.ended = ApiClient.convertToType(data['ended'], 'Boolean');
      if (data.hasOwnProperty('tenantId'))
        obj.tenantId = ApiClient.convertToType(data['tenantId'], 'String');
    }
    return obj;
  }
}

/**
 * The id of the Execution.
 * @member {String} id
 */
ExecutionDto.prototype.id = undefined;

/**
 * The id of the root of the execution tree representing the process instance.
 * @member {String} processInstanceId
 */
ExecutionDto.prototype.processInstanceId = undefined;

/**
 * Indicates if the execution is ended.
 * @member {Boolean} ended
 */
ExecutionDto.prototype.ended = undefined;

/**
 * The id of the tenant this execution belongs to. Can be `null` if the execution belongs to no single tenant.
 * @member {String} tenantId
 */
ExecutionDto.prototype.tenantId = undefined;

