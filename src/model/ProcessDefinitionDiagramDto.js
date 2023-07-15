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
 * The ProcessDefinitionDiagramDto model module.
 * @module model/ProcessDefinitionDiagramDto
 * @version 7.20.0
 */
export class ProcessDefinitionDiagramDto {
  /**
   * Constructs a new <code>ProcessDefinitionDiagramDto</code>.
   * @alias module:model/ProcessDefinitionDiagramDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProcessDefinitionDiagramDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessDefinitionDiagramDto} obj Optional instance to populate.
   * @return {module:model/ProcessDefinitionDiagramDto} The populated <code>ProcessDefinitionDiagramDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProcessDefinitionDiagramDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('bpmn20Xml'))
        obj.bpmn20Xml = ApiClient.convertToType(data['bpmn20Xml'], 'String');
    }
    return obj;
  }
}

/**
 * The id of the process definition.
 * @member {String} id
 */
ProcessDefinitionDiagramDto.prototype.id = undefined;

/**
 * An escaped XML string containing the XML that this definition was deployed with. Carriage returns, line feeds and quotation marks are escaped.
 * @member {String} bpmn20Xml
 */
ProcessDefinitionDiagramDto.prototype.bpmn20Xml = undefined;
