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
 * The HistoricDetailDto model module.
 * @module model/HistoricDetailDto
 * @version 7.20.0
 */
export class HistoricDetailDto {
  /**
   * Constructs a new <code>HistoricDetailDto</code>.
   * @alias module:model/HistoricDetailDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HistoricDetailDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricDetailDto} obj Optional instance to populate.
   * @return {module:model/HistoricDetailDto} The populated <code>HistoricDetailDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HistoricDetailDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('processDefinitionKey'))
        obj.processDefinitionKey = ApiClient.convertToType(data['processDefinitionKey'], 'String');
      if (data.hasOwnProperty('processDefinitionId'))
        obj.processDefinitionId = ApiClient.convertToType(data['processDefinitionId'], 'String');
      if (data.hasOwnProperty('processInstanceId'))
        obj.processInstanceId = ApiClient.convertToType(data['processInstanceId'], 'String');
      if (data.hasOwnProperty('activityInstanceId'))
        obj.activityInstanceId = ApiClient.convertToType(data['activityInstanceId'], 'String');
      if (data.hasOwnProperty('executionId'))
        obj.executionId = ApiClient.convertToType(data['executionId'], 'String');
      if (data.hasOwnProperty('caseDefinitionKey'))
        obj.caseDefinitionKey = ApiClient.convertToType(data['caseDefinitionKey'], 'String');
      if (data.hasOwnProperty('caseDefinitionId'))
        obj.caseDefinitionId = ApiClient.convertToType(data['caseDefinitionId'], 'String');
      if (data.hasOwnProperty('caseInstanceId'))
        obj.caseInstanceId = ApiClient.convertToType(data['caseInstanceId'], 'String');
      if (data.hasOwnProperty('caseExecutionId'))
        obj.caseExecutionId = ApiClient.convertToType(data['caseExecutionId'], 'String');
      if (data.hasOwnProperty('taskId'))
        obj.taskId = ApiClient.convertToType(data['taskId'], 'String');
      if (data.hasOwnProperty('tenantId'))
        obj.tenantId = ApiClient.convertToType(data['tenantId'], 'String');
      if (data.hasOwnProperty('userOperationId'))
        obj.userOperationId = ApiClient.convertToType(data['userOperationId'], 'String');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
      if (data.hasOwnProperty('removalTime'))
        obj.removalTime = ApiClient.convertToType(data['removalTime'], 'Date');
      if (data.hasOwnProperty('rootProcessInstanceId'))
        obj.rootProcessInstanceId = ApiClient.convertToType(data['rootProcessInstanceId'], 'String');
      if (data.hasOwnProperty('fieldId'))
        obj.fieldId = ApiClient.convertToType(data['fieldId'], 'String');
      if (data.hasOwnProperty('fieldValue'))
        obj.fieldValue = ApiClient.convertToType(data['fieldValue'], Object);
      if (data.hasOwnProperty('variableName'))
        obj.variableName = ApiClient.convertToType(data['variableName'], 'String');
      if (data.hasOwnProperty('variableInstanceId'))
        obj.variableInstanceId = ApiClient.convertToType(data['variableInstanceId'], 'String');
      if (data.hasOwnProperty('variableType'))
        obj.variableType = ApiClient.convertToType(data['variableType'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], Object);
      if (data.hasOwnProperty('valueInfo'))
        obj.valueInfo = ApiClient.convertToType(data['valueInfo'], {'String': Object});
      if (data.hasOwnProperty('initial'))
        obj.initial = ApiClient.convertToType(data['initial'], 'Boolean');
      if (data.hasOwnProperty('revision'))
        obj.revision = ApiClient.convertToType(data['revision'], 'Number');
      if (data.hasOwnProperty('errorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['errorMessage'], 'String');
    }
    return obj;
  }
}

/**
 * The id of the historic detail.
 * @member {String} id
 */
HistoricDetailDto.prototype.id = undefined;

/**
 * The type of the historic detail. Either `formField` for a submitted form field value or `variableUpdate` for variable updates.
 * @member {String} type
 */
HistoricDetailDto.prototype.type = undefined;

/**
 * The key of the process definition that this historic detail belongs to.
 * @member {String} processDefinitionKey
 */
HistoricDetailDto.prototype.processDefinitionKey = undefined;

/**
 * The id of the process definition that this historic detail belongs to.
 * @member {String} processDefinitionId
 */
HistoricDetailDto.prototype.processDefinitionId = undefined;

/**
 * The id of the process instance the historic detail belongs to.
 * @member {String} processInstanceId
 */
HistoricDetailDto.prototype.processInstanceId = undefined;

/**
 * The id of the activity instance the historic detail belongs to.
 * @member {String} activityInstanceId
 */
HistoricDetailDto.prototype.activityInstanceId = undefined;

/**
 * The id of the execution the historic detail belongs to.
 * @member {String} executionId
 */
HistoricDetailDto.prototype.executionId = undefined;

/**
 * The key of the case definition that this historic detail belongs to.
 * @member {String} caseDefinitionKey
 */
HistoricDetailDto.prototype.caseDefinitionKey = undefined;

/**
 * The id of the case definition that this historic detail belongs to.
 * @member {String} caseDefinitionId
 */
HistoricDetailDto.prototype.caseDefinitionId = undefined;

/**
 * The id of the case instance the historic detail belongs to.
 * @member {String} caseInstanceId
 */
HistoricDetailDto.prototype.caseInstanceId = undefined;

/**
 * The id of the case execution the historic detail belongs to.
 * @member {String} caseExecutionId
 */
HistoricDetailDto.prototype.caseExecutionId = undefined;

/**
 * The id of the task the historic detail belongs to.
 * @member {String} taskId
 */
HistoricDetailDto.prototype.taskId = undefined;

/**
 * The id of the tenant that this historic detail belongs to.
 * @member {String} tenantId
 */
HistoricDetailDto.prototype.tenantId = undefined;

/**
 * The id of user operation which links historic detail with [user operation log](https://docs.camunda.org/manual/develop/reference/rest/history/user-operation-log/) entries.
 * @member {String} userOperationId
 */
HistoricDetailDto.prototype.userOperationId = undefined;

/**
 * The time when this historic detail occurred. Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} time
 */
HistoricDetailDto.prototype.time = undefined;

/**
 * The time after which the historic detail should be removed by the History Cleanup job. Default [format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} removalTime
 */
HistoricDetailDto.prototype.removalTime = undefined;

/**
 * The process instance id of the root process instance that initiated the process containing this historic detail.
 * @member {String} rootProcessInstanceId
 */
HistoricDetailDto.prototype.rootProcessInstanceId = undefined;

/**
 * The id of the form field.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `formField`.
 * @member {String} fieldId
 */
HistoricDetailDto.prototype.fieldId = undefined;

/**
 * The submitted form field value. The value differs depending on the form field's type and on the `deserializeValue` parameter.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `formField`.
 * @member {Object} fieldValue
 */
HistoricDetailDto.prototype.fieldValue = undefined;

/**
 * The name of the variable which has been updated.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
 * @member {String} variableName
 */
HistoricDetailDto.prototype.variableName = undefined;

/**
 * The id of the associated variable instance.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
 * @member {String} variableInstanceId
 */
HistoricDetailDto.prototype.variableInstanceId = undefined;

/**
 * The value type of the variable.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
 * @member {String} variableType
 */
HistoricDetailDto.prototype.variableType = undefined;

/**
 * The variable's value. Value differs depending on the variable's type and on the deserializeValues parameter.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
 * @member {Object} value
 */
HistoricDetailDto.prototype.value = undefined;

/**
 * A JSON object containing additional, value-type-dependent properties. For variables of type `Object`, the following properties are returned:  * `objectTypeName`: A string representation of the object's type name. * `serializationDataFormat`: The serialization format used to store the variable.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
 * @member {Object.<String, Object>} valueInfo
 */
HistoricDetailDto.prototype.valueInfo = undefined;

/**
 * Returns `true` for variable updates that contains the initial values of the variables.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
 * @member {Boolean} initial
 */
HistoricDetailDto.prototype.initial = undefined;

/**
 * The revision of the historic variable update.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
 * @member {Number} revision
 */
HistoricDetailDto.prototype.revision = undefined;

/**
 * An error message in case a Java Serialized Object could not be de-serialized.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
 * @member {String} errorMessage
 */
HistoricDetailDto.prototype.errorMessage = undefined;

