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
import {ProcessInstanceQueryDto} from './ProcessInstanceQueryDto';
import {VariableValueDto} from './VariableValueDto';

/**
 * The CorrelationMessageAsyncDto model module.
 * @module model/CorrelationMessageAsyncDto
 * @version 7.20.0
 */
export class CorrelationMessageAsyncDto {
  /**
   * Constructs a new <code>CorrelationMessageAsyncDto</code>.
   * @alias module:model/CorrelationMessageAsyncDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CorrelationMessageAsyncDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CorrelationMessageAsyncDto} obj Optional instance to populate.
   * @return {module:model/CorrelationMessageAsyncDto} The populated <code>CorrelationMessageAsyncDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CorrelationMessageAsyncDto();
      if (data.hasOwnProperty('messageName'))
        obj.messageName = ApiClient.convertToType(data['messageName'], 'String');
      if (data.hasOwnProperty('processInstanceIds'))
        obj.processInstanceIds = ApiClient.convertToType(data['processInstanceIds'], ['String']);
      if (data.hasOwnProperty('processInstanceQuery'))
        obj.processInstanceQuery = ProcessInstanceQueryDto.constructFromObject(data['processInstanceQuery']);
      if (data.hasOwnProperty('historicProcessInstanceQuery'))
        obj.historicProcessInstanceQuery = HistoricProcessInstanceQueryDto.constructFromObject(data['historicProcessInstanceQuery']);
      if (data.hasOwnProperty('variables'))
        obj.variables = ApiClient.convertToType(data['variables'], {'String': VariableValueDto});
    }
    return obj;
  }
}

/**
 * The name of the message to correlate. Corresponds to the 'name' element of the message defined in BPMN 2.0 XML. Can be null to correlate by other criteria only.
 * @member {String} messageName
 */
CorrelationMessageAsyncDto.prototype.messageName = undefined;

/**
 * A list of process instance ids that define a group of process instances to which the operation will correlate a message.  Please note that if `processInstanceIds`, `processInstanceQuery` and `historicProcessInstanceQuery` are defined, the resulting operation will be performed on the union of these sets.
 * @member {Array.<String>} processInstanceIds
 */
CorrelationMessageAsyncDto.prototype.processInstanceIds = undefined;

/**
 * @member {module:model/ProcessInstanceQueryDto} processInstanceQuery
 */
CorrelationMessageAsyncDto.prototype.processInstanceQuery = undefined;

/**
 * @member {module:model/HistoricProcessInstanceQueryDto} historicProcessInstanceQuery
 */
CorrelationMessageAsyncDto.prototype.historicProcessInstanceQuery = undefined;

/**
 * All variables the operation will set in the root scope of the process instances the message is correlated to.
 * @member {Object.<String, module:model/VariableValueDto>} variables
 */
CorrelationMessageAsyncDto.prototype.variables = undefined;

