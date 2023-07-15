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
import {HistoricBatchQueryDtoSorting} from './HistoricBatchQueryDtoSorting';

/**
 * The HistoricBatchQueryDto model module.
 * @module model/HistoricBatchQueryDto
 * @version 7.20.0
 */
export class HistoricBatchQueryDto {
  /**
   * Constructs a new <code>HistoricBatchQueryDto</code>.
   * Query for the historic batches to set the removal time for.
   * @alias module:model/HistoricBatchQueryDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HistoricBatchQueryDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricBatchQueryDto} obj Optional instance to populate.
   * @return {module:model/HistoricBatchQueryDto} The populated <code>HistoricBatchQueryDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HistoricBatchQueryDto();
      if (data.hasOwnProperty('batchId'))
        obj.batchId = ApiClient.convertToType(data['batchId'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('completed'))
        obj.completed = ApiClient.convertToType(data['completed'], 'Boolean');
      if (data.hasOwnProperty('tenantIdIn'))
        obj.tenantIdIn = ApiClient.convertToType(data['tenantIdIn'], ['String']);
      if (data.hasOwnProperty('withoutTenantId'))
        obj.withoutTenantId = ApiClient.convertToType(data['withoutTenantId'], 'Boolean');
      if (data.hasOwnProperty('sorting'))
        obj.sorting = ApiClient.convertToType(data['sorting'], [HistoricBatchQueryDtoSorting]);
    }
    return obj;
  }
}

/**
 * Filter by batch id.
 * @member {String} batchId
 */
HistoricBatchQueryDto.prototype.batchId = undefined;

/**
 * Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types.
 * @member {String} type
 */
HistoricBatchQueryDto.prototype.type = undefined;

/**
 *  Filter completed or not completed batches. If the value is `true`, only completed batches, i.e., end time is set, are returned. Otherwise, if the value is `false`, only running batches, i.e., end time is null, are returned.
 * @member {Boolean} completed
 */
HistoricBatchQueryDto.prototype.completed = undefined;

/**
 * Filter by a comma-separated list of tenant ids. A batch matches if it has one of the given tenant ids.
 * @member {Array.<String>} tenantIdIn
 */
HistoricBatchQueryDto.prototype.tenantIdIn = undefined;

/**
 * Only include batches which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
 * @member {Boolean} withoutTenantId
 */
HistoricBatchQueryDto.prototype.withoutTenantId = undefined;

/**
 * An array of criteria to sort the result by. Each element of the array is                        an object that specifies one ordering. The position in the array                        identifies the rank of an ordering, i.e., whether it is primary, secondary,                        etc. Has no effect for the `/count` endpoint
 * @member {Array.<module:model/HistoricBatchQueryDtoSorting>} sorting
 */
HistoricBatchQueryDto.prototype.sorting = undefined;

