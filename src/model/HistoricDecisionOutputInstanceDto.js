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
 * The HistoricDecisionOutputInstanceDto model module.
 * @module model/HistoricDecisionOutputInstanceDto
 * @version 7.20.0
 */
export class HistoricDecisionOutputInstanceDto {
  /**
   * Constructs a new <code>HistoricDecisionOutputInstanceDto</code>.
   * @alias module:model/HistoricDecisionOutputInstanceDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HistoricDecisionOutputInstanceDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricDecisionOutputInstanceDto} obj Optional instance to populate.
   * @return {module:model/HistoricDecisionOutputInstanceDto} The populated <code>HistoricDecisionOutputInstanceDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HistoricDecisionOutputInstanceDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('decisionInstanceId'))
        obj.decisionInstanceId = ApiClient.convertToType(data['decisionInstanceId'], 'String');
      if (data.hasOwnProperty('clauseId'))
        obj.clauseId = ApiClient.convertToType(data['clauseId'], 'String');
      if (data.hasOwnProperty('clauseName'))
        obj.clauseName = ApiClient.convertToType(data['clauseName'], 'String');
      if (data.hasOwnProperty('ruleId'))
        obj.ruleId = ApiClient.convertToType(data['ruleId'], 'String');
      if (data.hasOwnProperty('ruleOrder'))
        obj.ruleOrder = ApiClient.convertToType(data['ruleOrder'], 'Number');
      if (data.hasOwnProperty('errorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['errorMessage'], 'String');
      if (data.hasOwnProperty('variableName'))
        obj.variableName = ApiClient.convertToType(data['variableName'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('createTime'))
        obj.createTime = ApiClient.convertToType(data['createTime'], 'Date');
      if (data.hasOwnProperty('removalTime'))
        obj.removalTime = ApiClient.convertToType(data['removalTime'], 'Date');
      if (data.hasOwnProperty('rootProcessInstanceId'))
        obj.rootProcessInstanceId = ApiClient.convertToType(data['rootProcessInstanceId'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], Object);
      if (data.hasOwnProperty('valueInfo'))
        obj.valueInfo = ApiClient.convertToType(data['valueInfo'], {'String': Object});
    }
    return obj;
  }
}

/**
 * The id of the decision output value.
 * @member {String} id
 */
HistoricDecisionOutputInstanceDto.prototype.id = undefined;

/**
 * The id of the decision instance the output value belongs to.
 * @member {String} decisionInstanceId
 */
HistoricDecisionOutputInstanceDto.prototype.decisionInstanceId = undefined;

/**
 * The id of the clause the output value belongs to.
 * @member {String} clauseId
 */
HistoricDecisionOutputInstanceDto.prototype.clauseId = undefined;

/**
 * The name of the clause the output value belongs to.
 * @member {String} clauseName
 */
HistoricDecisionOutputInstanceDto.prototype.clauseName = undefined;

/**
 * The id of the rule the output value belongs to.
 * @member {String} ruleId
 */
HistoricDecisionOutputInstanceDto.prototype.ruleId = undefined;

/**
 * The order of the rule the output value belongs to.
 * @member {Number} ruleOrder
 */
HistoricDecisionOutputInstanceDto.prototype.ruleOrder = undefined;

/**
 * An error message in case a Java Serialized Object could not be de-serialized.
 * @member {String} errorMessage
 */
HistoricDecisionOutputInstanceDto.prototype.errorMessage = undefined;

/**
 * The name of the output variable.
 * @member {String} variableName
 */
HistoricDecisionOutputInstanceDto.prototype.variableName = undefined;

/**
 * The value type of the variable.
 * @member {String} type
 */
HistoricDecisionOutputInstanceDto.prototype.type = undefined;

/**
 * The time the variable was inserted.  [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} createTime
 */
HistoricDecisionOutputInstanceDto.prototype.createTime = undefined;

/**
 * The time after which the entry should be removed by the History Cleanup job. [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} removalTime
 */
HistoricDecisionOutputInstanceDto.prototype.removalTime = undefined;

/**
 * The process instance id of the root process instance that initiated the process containing this entry.
 * @member {String} rootProcessInstanceId
 */
HistoricDecisionOutputInstanceDto.prototype.rootProcessInstanceId = undefined;

/**
 * The variable's value. Value differs depending on the variable's type and on the `disableCustomObjectDeserialization` parameter.
 * @member {Object} value
 */
HistoricDecisionOutputInstanceDto.prototype.value = undefined;

/**
 * A JSON object containing additional, value-type-dependent properties.  For variables of type `Object`, the following properties are returned:  * `objectTypeName`: A string representation of the object's type name.  * `serializationDataFormat`: The serialization format used to store the variable.
 * @member {Object.<String, Object>} valueInfo
 */
HistoricDecisionOutputInstanceDto.prototype.valueInfo = undefined;

