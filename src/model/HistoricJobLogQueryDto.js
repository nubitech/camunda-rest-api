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
import {HistoricJobLogQueryDtoSorting} from './HistoricJobLogQueryDtoSorting';

/**
 * The HistoricJobLogQueryDto model module.
 * @module model/HistoricJobLogQueryDto
 * @version 7.20.0
 */
export class HistoricJobLogQueryDto {
  /**
   * Constructs a new <code>HistoricJobLogQueryDto</code>.
   * A Historic Job Log instance query which defines a list of Historic Job Log instances
   * @alias module:model/HistoricJobLogQueryDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HistoricJobLogQueryDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricJobLogQueryDto} obj Optional instance to populate.
   * @return {module:model/HistoricJobLogQueryDto} The populated <code>HistoricJobLogQueryDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HistoricJobLogQueryDto();
      if (data.hasOwnProperty('logId'))
        obj.logId = ApiClient.convertToType(data['logId'], 'String');
      if (data.hasOwnProperty('jobId'))
        obj.jobId = ApiClient.convertToType(data['jobId'], 'String');
      if (data.hasOwnProperty('jobExceptionMessage'))
        obj.jobExceptionMessage = ApiClient.convertToType(data['jobExceptionMessage'], 'String');
      if (data.hasOwnProperty('jobDefinitionId'))
        obj.jobDefinitionId = ApiClient.convertToType(data['jobDefinitionId'], 'String');
      if (data.hasOwnProperty('jobDefinitionType'))
        obj.jobDefinitionType = ApiClient.convertToType(data['jobDefinitionType'], 'String');
      if (data.hasOwnProperty('jobDefinitionConfiguration'))
        obj.jobDefinitionConfiguration = ApiClient.convertToType(data['jobDefinitionConfiguration'], 'String');
      if (data.hasOwnProperty('activityIdIn'))
        obj.activityIdIn = ApiClient.convertToType(data['activityIdIn'], ['String']);
      if (data.hasOwnProperty('failedActivityIdIn'))
        obj.failedActivityIdIn = ApiClient.convertToType(data['failedActivityIdIn'], ['String']);
      if (data.hasOwnProperty('executionIdIn'))
        obj.executionIdIn = ApiClient.convertToType(data['executionIdIn'], ['String']);
      if (data.hasOwnProperty('processInstanceId'))
        obj.processInstanceId = ApiClient.convertToType(data['processInstanceId'], 'String');
      if (data.hasOwnProperty('processDefinitionId'))
        obj.processDefinitionId = ApiClient.convertToType(data['processDefinitionId'], 'String');
      if (data.hasOwnProperty('processDefinitionKey'))
        obj.processDefinitionKey = ApiClient.convertToType(data['processDefinitionKey'], 'String');
      if (data.hasOwnProperty('deploymentId'))
        obj.deploymentId = ApiClient.convertToType(data['deploymentId'], 'String');
      if (data.hasOwnProperty('tenantIdIn'))
        obj.tenantIdIn = ApiClient.convertToType(data['tenantIdIn'], ['String']);
      if (data.hasOwnProperty('withoutTenantId'))
        obj.withoutTenantId = ApiClient.convertToType(data['withoutTenantId'], 'Boolean');
      if (data.hasOwnProperty('hostname'))
        obj.hostname = ApiClient.convertToType(data['hostname'], 'String');
      if (data.hasOwnProperty('jobPriorityLowerThanOrEquals'))
        obj.jobPriorityLowerThanOrEquals = ApiClient.convertToType(data['jobPriorityLowerThanOrEquals'], 'Number');
      if (data.hasOwnProperty('jobPriorityHigherThanOrEquals'))
        obj.jobPriorityHigherThanOrEquals = ApiClient.convertToType(data['jobPriorityHigherThanOrEquals'], 'Number');
      if (data.hasOwnProperty('creationLog'))
        obj.creationLog = ApiClient.convertToType(data['creationLog'], 'Boolean');
      if (data.hasOwnProperty('failureLog'))
        obj.failureLog = ApiClient.convertToType(data['failureLog'], 'Boolean');
      if (data.hasOwnProperty('successLog'))
        obj.successLog = ApiClient.convertToType(data['successLog'], 'Boolean');
      if (data.hasOwnProperty('deletionLog'))
        obj.deletionLog = ApiClient.convertToType(data['deletionLog'], 'Boolean');
      if (data.hasOwnProperty('sorting'))
        obj.sorting = ApiClient.convertToType(data['sorting'], [HistoricJobLogQueryDtoSorting]);
    }
    return obj;
  }
}

/**
 * Filter by historic job log id.
 * @member {String} logId
 */
HistoricJobLogQueryDto.prototype.logId = undefined;

/**
 * Filter by job id.
 * @member {String} jobId
 */
HistoricJobLogQueryDto.prototype.jobId = undefined;

/**
 * Filter by job exception message.
 * @member {String} jobExceptionMessage
 */
HistoricJobLogQueryDto.prototype.jobExceptionMessage = undefined;

/**
 * Filter by job definition id.
 * @member {String} jobDefinitionId
 */
HistoricJobLogQueryDto.prototype.jobDefinitionId = undefined;

/**
 * Filter by job definition type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/the-job-executor/#job-creation) for more information about job definition types.
 * @member {String} jobDefinitionType
 */
HistoricJobLogQueryDto.prototype.jobDefinitionType = undefined;

/**
 * Filter by job definition configuration.
 * @member {String} jobDefinitionConfiguration
 */
HistoricJobLogQueryDto.prototype.jobDefinitionConfiguration = undefined;

/**
 * Only include historic job logs which belong to one of the passed activity ids.
 * @member {Array.<String>} activityIdIn
 */
HistoricJobLogQueryDto.prototype.activityIdIn = undefined;

/**
 * Only include historic job logs which belong to failures of one of the passed activity ids.
 * @member {Array.<String>} failedActivityIdIn
 */
HistoricJobLogQueryDto.prototype.failedActivityIdIn = undefined;

/**
 * Only include historic job logs which belong to one of the passed execution ids.
 * @member {Array.<String>} executionIdIn
 */
HistoricJobLogQueryDto.prototype.executionIdIn = undefined;

/**
 * Filter by process instance id.
 * @member {String} processInstanceId
 */
HistoricJobLogQueryDto.prototype.processInstanceId = undefined;

/**
 * Filter by process definition id.
 * @member {String} processDefinitionId
 */
HistoricJobLogQueryDto.prototype.processDefinitionId = undefined;

/**
 * Filter by process definition key.
 * @member {String} processDefinitionKey
 */
HistoricJobLogQueryDto.prototype.processDefinitionKey = undefined;

/**
 * Filter by deployment id.
 * @member {String} deploymentId
 */
HistoricJobLogQueryDto.prototype.deploymentId = undefined;

/**
 * Only include historic job log entries which belong to one of the passed and comma- separated tenant ids.
 * @member {Array.<String>} tenantIdIn
 */
HistoricJobLogQueryDto.prototype.tenantIdIn = undefined;

/**
 * Only include historic job log entries that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} withoutTenantId
 */
HistoricJobLogQueryDto.prototype.withoutTenantId = undefined;

/**
 * Filter by hostname.
 * @member {String} hostname
 */
HistoricJobLogQueryDto.prototype.hostname = undefined;

/**
 * Only include logs for which the associated job had a priority lower than or equal to the given value. Value must be a valid `long` value.
 * @member {Number} jobPriorityLowerThanOrEquals
 */
HistoricJobLogQueryDto.prototype.jobPriorityLowerThanOrEquals = undefined;

/**
 * Only include logs for which the associated job had a priority higher than or equal to the given value. Value must be a valid `long` value.
 * @member {Number} jobPriorityHigherThanOrEquals
 */
HistoricJobLogQueryDto.prototype.jobPriorityHigherThanOrEquals = undefined;

/**
 * Only include creation logs. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} creationLog
 */
HistoricJobLogQueryDto.prototype.creationLog = undefined;

/**
 * Only include failure logs. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} failureLog
 */
HistoricJobLogQueryDto.prototype.failureLog = undefined;

/**
 * Only include success logs. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} successLog
 */
HistoricJobLogQueryDto.prototype.successLog = undefined;

/**
 * Only include deletion logs. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} deletionLog
 */
HistoricJobLogQueryDto.prototype.deletionLog = undefined;

/**
 * An array of criteria to sort the result by. Each element of the array is                        an object that specifies one ordering. The position in the array                        identifies the rank of an ordering, i.e., whether it is primary, secondary,                        etc. Sorting has no effect for `count` endpoints
 * @member {Array.<module:model/HistoricJobLogQueryDtoSorting>} sorting
 */
HistoricJobLogQueryDto.prototype.sorting = undefined;
