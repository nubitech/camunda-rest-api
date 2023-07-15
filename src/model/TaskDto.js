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
import {CamundaFormRef} from './CamundaFormRef';

/**
 * The TaskDto model module.
 * @module model/TaskDto
 * @version 7.20.0
 */
export class TaskDto {
  /**
   * Constructs a new <code>TaskDto</code>.
   * @alias module:model/TaskDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskDto} obj Optional instance to populate.
   * @return {module:model/TaskDto} The populated <code>TaskDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('assignee'))
        obj.assignee = ApiClient.convertToType(data['assignee'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('lastUpdated'))
        obj.lastUpdated = ApiClient.convertToType(data['lastUpdated'], 'Date');
      if (data.hasOwnProperty('due'))
        obj.due = ApiClient.convertToType(data['due'], 'Date');
      if (data.hasOwnProperty('followUp'))
        obj.followUp = ApiClient.convertToType(data['followUp'], 'Date');
      if (data.hasOwnProperty('delegationState'))
        obj.delegationState = ApiClient.convertToType(data['delegationState'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('executionId'))
        obj.executionId = ApiClient.convertToType(data['executionId'], 'String');
      if (data.hasOwnProperty('parentTaskId'))
        obj.parentTaskId = ApiClient.convertToType(data['parentTaskId'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
      if (data.hasOwnProperty('processDefinitionId'))
        obj.processDefinitionId = ApiClient.convertToType(data['processDefinitionId'], 'String');
      if (data.hasOwnProperty('processInstanceId'))
        obj.processInstanceId = ApiClient.convertToType(data['processInstanceId'], 'String');
      if (data.hasOwnProperty('caseExecutionId'))
        obj.caseExecutionId = ApiClient.convertToType(data['caseExecutionId'], 'String');
      if (data.hasOwnProperty('caseDefinitionId'))
        obj.caseDefinitionId = ApiClient.convertToType(data['caseDefinitionId'], 'String');
      if (data.hasOwnProperty('caseInstanceId'))
        obj.caseInstanceId = ApiClient.convertToType(data['caseInstanceId'], 'String');
      if (data.hasOwnProperty('taskDefinitionKey'))
        obj.taskDefinitionKey = ApiClient.convertToType(data['taskDefinitionKey'], 'String');
      if (data.hasOwnProperty('suspended'))
        obj.suspended = ApiClient.convertToType(data['suspended'], 'Boolean');
      if (data.hasOwnProperty('formKey'))
        obj.formKey = ApiClient.convertToType(data['formKey'], 'String');
      if (data.hasOwnProperty('camundaFormRef'))
        obj.camundaFormRef = ApiClient.convertToType(data['camundaFormRef'], {'String': CamundaFormRef});
      if (data.hasOwnProperty('tenantId'))
        obj.tenantId = ApiClient.convertToType(data['tenantId'], 'String');
    }
    return obj;
  }
}

/**
 * The task id.
 * @member {String} id
 */
TaskDto.prototype.id = undefined;

/**
 * The task name.
 * @member {String} name
 */
TaskDto.prototype.name = undefined;

/**
 * The assignee's id.
 * @member {String} assignee
 */
TaskDto.prototype.assignee = undefined;

/**
 * The owner's id.
 * @member {String} owner
 */
TaskDto.prototype.owner = undefined;

/**
 * The date the task was created on. [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} created
 */
TaskDto.prototype.created = undefined;

/**
 * The date the task was last updated. Every action that fires a [task update event](https://docs.camunda.org/manual/develop/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) will update this property. [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} lastUpdated
 */
TaskDto.prototype.lastUpdated = undefined;

/**
 * The task's due date. [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} due
 */
TaskDto.prototype.due = undefined;

/**
 * The follow-up date for the task. [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} followUp
 */
TaskDto.prototype.followUp = undefined;

/**
 * Allowed values for the <code>delegationState</code> property.
 * @enum {String}
 * @readonly
 */
TaskDto.DelegationStateEnum = {
  /**
   * value: "PENDING"
   * @const
   */
  PENDING: "PENDING",

  /**
   * value: "RESOLVED"
   * @const
   */
  RESOLVED: "RESOLVED"
};
/**
 * The task's delegation state. Possible values are `PENDING` and `RESOLVED`.
 * @member {module:model/TaskDto.DelegationStateEnum} delegationState
 */
TaskDto.prototype.delegationState = undefined;

/**
 * The task's description.
 * @member {String} description
 */
TaskDto.prototype.description = undefined;

/**
 * The id of the execution the task belongs to.
 * @member {String} executionId
 */
TaskDto.prototype.executionId = undefined;

/**
 * The id the parent task, if this task is a subtask.
 * @member {String} parentTaskId
 */
TaskDto.prototype.parentTaskId = undefined;

/**
 * The task's priority.
 * @member {Number} priority
 */
TaskDto.prototype.priority = undefined;

/**
 * The id of the process definition the task belongs to.
 * @member {String} processDefinitionId
 */
TaskDto.prototype.processDefinitionId = undefined;

/**
 * The id of the process instance the task belongs to.
 * @member {String} processInstanceId
 */
TaskDto.prototype.processInstanceId = undefined;

/**
 * The id of the case execution the task belongs to.
 * @member {String} caseExecutionId
 */
TaskDto.prototype.caseExecutionId = undefined;

/**
 * The id of the case definition the task belongs to.
 * @member {String} caseDefinitionId
 */
TaskDto.prototype.caseDefinitionId = undefined;

/**
 * The id of the case instance the task belongs to.
 * @member {String} caseInstanceId
 */
TaskDto.prototype.caseInstanceId = undefined;

/**
 * The task's key.
 * @member {String} taskDefinitionKey
 */
TaskDto.prototype.taskDefinitionKey = undefined;

/**
 * Whether the task belongs to a process instance that is suspended.
 * @member {Boolean} suspended
 */
TaskDto.prototype.suspended = undefined;

/**
 * If not `null`, the form key for the task.
 * @member {String} formKey
 */
TaskDto.prototype.formKey = undefined;

/**
 * A reference to a specific version of a Camunda Form.
 * @member {Object.<String, module:model/CamundaFormRef>} camundaFormRef
 */
TaskDto.prototype.camundaFormRef = undefined;

/**
 * If not `null`, the tenant id of the task.
 * @member {String} tenantId
 */
TaskDto.prototype.tenantId = undefined;
