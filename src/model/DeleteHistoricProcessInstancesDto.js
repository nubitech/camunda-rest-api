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
import {HistoricProcessInstanceQueryDto} from './HistoricProcessInstanceQueryDto';

/**
 * The DeleteHistoricProcessInstancesDto model module.
 * @module model/DeleteHistoricProcessInstancesDto
 * @version 7.20.0
 */
export class DeleteHistoricProcessInstancesDto {
  /**
   * Constructs a new <code>DeleteHistoricProcessInstancesDto</code>.
   * @alias module:model/DeleteHistoricProcessInstancesDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DeleteHistoricProcessInstancesDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteHistoricProcessInstancesDto} obj Optional instance to populate.
   * @return {module:model/DeleteHistoricProcessInstancesDto} The populated <code>DeleteHistoricProcessInstancesDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeleteHistoricProcessInstancesDto();
      if (data.hasOwnProperty('historicProcessInstanceIds'))
        obj.historicProcessInstanceIds = ApiClient.convertToType(data['historicProcessInstanceIds'], ['String']);
      if (data.hasOwnProperty('historicProcessInstanceQuery'))
        obj.historicProcessInstanceQuery = HistoricProcessInstanceQueryDto.constructFromObject(data['historicProcessInstanceQuery']);
      if (data.hasOwnProperty('deleteReason'))
        obj.deleteReason = ApiClient.convertToType(data['deleteReason'], 'String');
      if (data.hasOwnProperty('failIfNotExists'))
        obj.failIfNotExists = ApiClient.convertToType(data['failIfNotExists'], 'Boolean');
    }
    return obj;
  }
}

/**
 * A list historic process instance ids to delete.
 * @member {Array.<String>} historicProcessInstanceIds
 */
DeleteHistoricProcessInstancesDto.prototype.historicProcessInstanceIds = undefined;

/**
 * @member {module:model/HistoricProcessInstanceQueryDto} historicProcessInstanceQuery
 */
DeleteHistoricProcessInstancesDto.prototype.historicProcessInstanceQuery = undefined;

/**
 * A string with delete reason.
 * @member {String} deleteReason
 */
DeleteHistoricProcessInstancesDto.prototype.deleteReason = undefined;

/**
 * If set to `false`, the request will still be successful if one ore more of the process ids are not found.
 * @member {Boolean} failIfNotExists
 */
DeleteHistoricProcessInstancesDto.prototype.failIfNotExists = undefined;
