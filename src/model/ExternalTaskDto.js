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
 * The ExternalTaskDto model module.
 * @module model/ExternalTaskDto
 * @version 7.20.0
 */
export class ExternalTaskDto {
  /**
   * Constructs a new <code>ExternalTaskDto</code>.
   * An External Task object with the following properties
   * @alias module:model/ExternalTaskDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ExternalTaskDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalTaskDto} obj Optional instance to populate.
   * @return {module:model/ExternalTaskDto} The populated <code>ExternalTaskDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ExternalTaskDto();
      if (data.hasOwnProperty('activityId'))
        obj.activityId = ApiClient.convertToType(data['activityId'], 'String');
      if (data.hasOwnProperty('activityInstanceId'))
        obj.activityInstanceId = ApiClient.convertToType(data['activityInstanceId'], 'String');
      if (data.hasOwnProperty('errorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['errorMessage'], 'String');
      if (data.hasOwnProperty('executionId'))
        obj.executionId = ApiClient.convertToType(data['executionId'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('lockExpirationTime'))
        obj.lockExpirationTime = ApiClient.convertToType(data['lockExpirationTime'], 'Date');
      if (data.hasOwnProperty('processDefinitionId'))
        obj.processDefinitionId = ApiClient.convertToType(data['processDefinitionId'], 'String');
      if (data.hasOwnProperty('processDefinitionKey'))
        obj.processDefinitionKey = ApiClient.convertToType(data['processDefinitionKey'], 'String');
      if (data.hasOwnProperty('processDefinitionVersionTag'))
        obj.processDefinitionVersionTag = ApiClient.convertToType(data['processDefinitionVersionTag'], 'String');
      if (data.hasOwnProperty('processInstanceId'))
        obj.processInstanceId = ApiClient.convertToType(data['processInstanceId'], 'String');
      if (data.hasOwnProperty('tenantId'))
        obj.tenantId = ApiClient.convertToType(data['tenantId'], 'String');
      if (data.hasOwnProperty('retries'))
        obj.retries = ApiClient.convertToType(data['retries'], 'Number');
      if (data.hasOwnProperty('suspended'))
        obj.suspended = ApiClient.convertToType(data['suspended'], 'Boolean');
      if (data.hasOwnProperty('workerId'))
        obj.workerId = ApiClient.convertToType(data['workerId'], 'String');
      if (data.hasOwnProperty('topicName'))
        obj.topicName = ApiClient.convertToType(data['topicName'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
      if (data.hasOwnProperty('businessKey'))
        obj.businessKey = ApiClient.convertToType(data['businessKey'], 'String');
    }
    return obj;
  }
}

/**
 * The id of the activity that this external task belongs to.
 * @member {String} activityId
 */
ExternalTaskDto.prototype.activityId = undefined;

/**
 * The id of the activity instance that the external task belongs to.
 * @member {String} activityInstanceId
 */
ExternalTaskDto.prototype.activityInstanceId = undefined;

/**
 * The full error message submitted with the latest reported failure executing this task; `null` if no failure was reported previously or if no error message was submitted
 * @member {String} errorMessage
 */
ExternalTaskDto.prototype.errorMessage = undefined;

/**
 * The id of the execution that the external task belongs to.
 * @member {String} executionId
 */
ExternalTaskDto.prototype.executionId = undefined;

/**
 * The id of the external task.
 * @member {String} id
 */
ExternalTaskDto.prototype.id = undefined;

/**
 * The date that the task's most recent lock expires or has expired.
 * @member {Date} lockExpirationTime
 */
ExternalTaskDto.prototype.lockExpirationTime = undefined;

/**
 * The id of the process definition the external task is defined in.
 * @member {String} processDefinitionId
 */
ExternalTaskDto.prototype.processDefinitionId = undefined;

/**
 * The key of the process definition the external task is defined in.
 * @member {String} processDefinitionKey
 */
ExternalTaskDto.prototype.processDefinitionKey = undefined;

/**
 * The version tag of the process definition the external task is defined in.
 * @member {String} processDefinitionVersionTag
 */
ExternalTaskDto.prototype.processDefinitionVersionTag = undefined;

/**
 * The id of the process instance the external task belongs to.
 * @member {String} processInstanceId
 */
ExternalTaskDto.prototype.processInstanceId = undefined;

/**
 * The id of the tenant the external task belongs to.
 * @member {String} tenantId
 */
ExternalTaskDto.prototype.tenantId = undefined;

/**
 * The number of retries the task currently has left.
 * @member {Number} retries
 */
ExternalTaskDto.prototype.retries = undefined;

/**
 * A flag indicating whether the external task is suspended or not.
 * @member {Boolean} suspended
 */
ExternalTaskDto.prototype.suspended = undefined;

/**
 * The id of the worker that posesses or posessed the most recent lock.
 * @member {String} workerId
 */
ExternalTaskDto.prototype.workerId = undefined;

/**
 * The topic name of the external task.
 * @member {String} topicName
 */
ExternalTaskDto.prototype.topicName = undefined;

/**
 * The priority of the external task.
 * @member {Number} priority
 */
ExternalTaskDto.prototype.priority = undefined;

/**
 * The business key of the process instance the external task belongs to.
 * @member {String} businessKey
 */
ExternalTaskDto.prototype.businessKey = undefined;

