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
 * The HistoricDecisionInputInstanceDto model module.
 * @module model/HistoricDecisionInputInstanceDto
 * @version 7.20.0
 */
export class HistoricDecisionInputInstanceDto {
  /**
   * Constructs a new <code>HistoricDecisionInputInstanceDto</code>.
   * @alias module:model/HistoricDecisionInputInstanceDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HistoricDecisionInputInstanceDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricDecisionInputInstanceDto} obj Optional instance to populate.
   * @return {module:model/HistoricDecisionInputInstanceDto} The populated <code>HistoricDecisionInputInstanceDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HistoricDecisionInputInstanceDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('decisionInstanceId'))
        obj.decisionInstanceId = ApiClient.convertToType(data['decisionInstanceId'], 'String');
      if (data.hasOwnProperty('clauseId'))
        obj.clauseId = ApiClient.convertToType(data['clauseId'], 'String');
      if (data.hasOwnProperty('clauseName'))
        obj.clauseName = ApiClient.convertToType(data['clauseName'], 'String');
      if (data.hasOwnProperty('errorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['errorMessage'], 'String');
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
 * The id of the decision input value.
 * @member {String} id
 */
HistoricDecisionInputInstanceDto.prototype.id = undefined;

/**
 * The id of the decision instance the input value belongs to.
 * @member {String} decisionInstanceId
 */
HistoricDecisionInputInstanceDto.prototype.decisionInstanceId = undefined;

/**
 * The id of the clause the input value belongs to.
 * @member {String} clauseId
 */
HistoricDecisionInputInstanceDto.prototype.clauseId = undefined;

/**
 * The name of the clause the input value belongs to.
 * @member {String} clauseName
 */
HistoricDecisionInputInstanceDto.prototype.clauseName = undefined;

/**
 * An error message in case a Java Serialized Object could not be de-serialized.
 * @member {String} errorMessage
 */
HistoricDecisionInputInstanceDto.prototype.errorMessage = undefined;

/**
 * The value type of the variable.
 * @member {String} type
 */
HistoricDecisionInputInstanceDto.prototype.type = undefined;

/**
 * The time the variable was inserted.  [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} createTime
 */
HistoricDecisionInputInstanceDto.prototype.createTime = undefined;

/**
 * The time after which the entry should be removed by the History Cleanup job. [Default format](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} removalTime
 */
HistoricDecisionInputInstanceDto.prototype.removalTime = undefined;

/**
 * The process instance id of the root process instance that initiated the process containing this entry.
 * @member {String} rootProcessInstanceId
 */
HistoricDecisionInputInstanceDto.prototype.rootProcessInstanceId = undefined;

/**
 * The variable's value. Value differs depending on the variable's type and on the `disableCustomObjectDeserialization` parameter.
 * @member {Object} value
 */
HistoricDecisionInputInstanceDto.prototype.value = undefined;

/**
 * A JSON object containing additional, value-type-dependent properties.  For variables of type `Object`, the following properties are returned:  * `objectTypeName`: A string representation of the object's type name.  * `serializationDataFormat`: The serialization format used to store the variable.
 * @member {Object.<String, Object>} valueInfo
 */
HistoricDecisionInputInstanceDto.prototype.valueInfo = undefined;

