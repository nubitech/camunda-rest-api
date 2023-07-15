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
import {BatchDto} from './BatchDto';

/**
 * The BatchStatisticsDto model module.
 * @module model/BatchStatisticsDto
 * @version 7.20.0
 */
export class BatchStatisticsDto {
  /**
   * Constructs a new <code>BatchStatisticsDto</code>.
   * @alias module:model/BatchStatisticsDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BatchStatisticsDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchStatisticsDto} obj Optional instance to populate.
   * @return {module:model/BatchStatisticsDto} The populated <code>BatchStatisticsDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BatchStatisticsDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('totalJobs'))
        obj.totalJobs = ApiClient.convertToType(data['totalJobs'], 'Number');
      if (data.hasOwnProperty('jobsCreated'))
        obj.jobsCreated = ApiClient.convertToType(data['jobsCreated'], 'Number');
      if (data.hasOwnProperty('batchJobsPerSeed'))
        obj.batchJobsPerSeed = ApiClient.convertToType(data['batchJobsPerSeed'], 'Number');
      if (data.hasOwnProperty('invocationsPerBatchJob'))
        obj.invocationsPerBatchJob = ApiClient.convertToType(data['invocationsPerBatchJob'], 'Number');
      if (data.hasOwnProperty('seedJobDefinitionId'))
        obj.seedJobDefinitionId = ApiClient.convertToType(data['seedJobDefinitionId'], 'String');
      if (data.hasOwnProperty('monitorJobDefinitionId'))
        obj.monitorJobDefinitionId = ApiClient.convertToType(data['monitorJobDefinitionId'], 'String');
      if (data.hasOwnProperty('batchJobDefinitionId'))
        obj.batchJobDefinitionId = ApiClient.convertToType(data['batchJobDefinitionId'], 'String');
      if (data.hasOwnProperty('suspended'))
        obj.suspended = ApiClient.convertToType(data['suspended'], 'Boolean');
      if (data.hasOwnProperty('tenantId'))
        obj.tenantId = ApiClient.convertToType(data['tenantId'], 'String');
      if (data.hasOwnProperty('createUserId'))
        obj.createUserId = ApiClient.convertToType(data['createUserId'], 'String');
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'Date');
      if (data.hasOwnProperty('executionStartTime'))
        obj.executionStartTime = ApiClient.convertToType(data['executionStartTime'], 'Date');
    }
    return obj;
  }
}

/**
 * The id of the batch.
 * @member {String} id
 */
BatchStatisticsDto.prototype.id = undefined;

/**
 * The type of the batch. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types.
 * @member {String} type
 */
BatchStatisticsDto.prototype.type = undefined;

/**
 * The total jobs of a batch is the number of batch execution jobs required to complete the batch.
 * @member {Number} totalJobs
 */
BatchStatisticsDto.prototype.totalJobs = undefined;

/**
 * The number of batch execution jobs already created by the seed job.
 * @member {Number} jobsCreated
 */
BatchStatisticsDto.prototype.jobsCreated = undefined;

/**
 * The number of batch execution jobs created per seed job invocation. The batch seed job is invoked until it has created all batch execution jobs required by the batch (see `totalJobs` property).
 * @member {Number} batchJobsPerSeed
 */
BatchStatisticsDto.prototype.batchJobsPerSeed = undefined;

/**
 * Every batch execution job invokes the command executed by the batch `invocationsPerBatchJob` times. E.g., for a process instance migration batch this specifies the number of process instances which are migrated per batch execution job.
 * @member {Number} invocationsPerBatchJob
 */
BatchStatisticsDto.prototype.invocationsPerBatchJob = undefined;

/**
 * The job definition id for the seed jobs of this batch.
 * @member {String} seedJobDefinitionId
 */
BatchStatisticsDto.prototype.seedJobDefinitionId = undefined;

/**
 * The job definition id for the monitor jobs of this batch.
 * @member {String} monitorJobDefinitionId
 */
BatchStatisticsDto.prototype.monitorJobDefinitionId = undefined;

/**
 * The job definition id for the batch execution jobs of this batch.
 * @member {String} batchJobDefinitionId
 */
BatchStatisticsDto.prototype.batchJobDefinitionId = undefined;

/**
 * Indicates whether this batch is suspended or not.
 * @member {Boolean} suspended
 */
BatchStatisticsDto.prototype.suspended = undefined;

/**
 * The tenant id of the batch.
 * @member {String} tenantId
 */
BatchStatisticsDto.prototype.tenantId = undefined;

/**
 * The id of the user that created the batch.
 * @member {String} createUserId
 */
BatchStatisticsDto.prototype.createUserId = undefined;

/**
 * The time the batch was started. Default format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`. For further information, please see the [documentation] (https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/)
 * @member {Date} startTime
 */
BatchStatisticsDto.prototype.startTime = undefined;

/**
 * The time the batch execution was started, i.e., at least one batch job has been executed. Default format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`. For further information, please see the [documentation] (https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/)
 * @member {Date} executionStartTime
 */
BatchStatisticsDto.prototype.executionStartTime = undefined;

