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
import {RestartProcessInstanceModificationInstructionDto} from './RestartProcessInstanceModificationInstructionDto';

/**
 * The RestartProcessInstanceDto model module.
 * @module model/RestartProcessInstanceDto
 * @version 7.20.0
 */
export class RestartProcessInstanceDto {
  /**
   * Constructs a new <code>RestartProcessInstanceDto</code>.
   * @alias module:model/RestartProcessInstanceDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RestartProcessInstanceDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestartProcessInstanceDto} obj Optional instance to populate.
   * @return {module:model/RestartProcessInstanceDto} The populated <code>RestartProcessInstanceDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RestartProcessInstanceDto();
      if (data.hasOwnProperty('processInstanceIds'))
        obj.processInstanceIds = ApiClient.convertToType(data['processInstanceIds'], ['String']);
      if (data.hasOwnProperty('historicProcessInstanceQuery'))
        obj.historicProcessInstanceQuery = HistoricProcessInstanceQueryDto.constructFromObject(data['historicProcessInstanceQuery']);
      if (data.hasOwnProperty('skipCustomListeners'))
        obj.skipCustomListeners = ApiClient.convertToType(data['skipCustomListeners'], 'Boolean');
      if (data.hasOwnProperty('skipIoMappings'))
        obj.skipIoMappings = ApiClient.convertToType(data['skipIoMappings'], 'Boolean');
      if (data.hasOwnProperty('initialVariables'))
        obj.initialVariables = ApiClient.convertToType(data['initialVariables'], 'Boolean');
      if (data.hasOwnProperty('withoutBusinessKey'))
        obj.withoutBusinessKey = ApiClient.convertToType(data['withoutBusinessKey'], 'Boolean');
      if (data.hasOwnProperty('instructions'))
        obj.instructions = ApiClient.convertToType(data['instructions'], [RestartProcessInstanceModificationInstructionDto]);
    }
    return obj;
  }
}

/**
 * A list of process instance ids to restart.
 * @member {Array.<String>} processInstanceIds
 */
RestartProcessInstanceDto.prototype.processInstanceIds = undefined;

/**
 * @member {module:model/HistoricProcessInstanceQueryDto} historicProcessInstanceQuery
 */
RestartProcessInstanceDto.prototype.historicProcessInstanceQuery = undefined;

/**
 * Skip execution listener invocation for activities that are started as part of this request.
 * @member {Boolean} skipCustomListeners
 */
RestartProcessInstanceDto.prototype.skipCustomListeners = undefined;

/**
 * Skip execution of [input/output variable mappings](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables/#input-output-variable-mapping) for activities that are started as part of this request.
 * @member {Boolean} skipIoMappings
 */
RestartProcessInstanceDto.prototype.skipIoMappings = undefined;

/**
 * Set the initial set of variables during restart. By default, the last set of variables is used.
 * @member {Boolean} initialVariables
 */
RestartProcessInstanceDto.prototype.initialVariables = undefined;

/**
 * Do not take over the business key of the historic process instance.
 * @member {Boolean} withoutBusinessKey
 */
RestartProcessInstanceDto.prototype.withoutBusinessKey = undefined;

/**
 * **Optional**. A JSON array of instructions that specify which activities to start the process instance at. If this property is omitted, the process instance starts at its default blank start event.
 * @member {Array.<module:model/RestartProcessInstanceModificationInstructionDto>} instructions
 */
RestartProcessInstanceDto.prototype.instructions = undefined;

