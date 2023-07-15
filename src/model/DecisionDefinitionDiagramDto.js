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
 * The DecisionDefinitionDiagramDto model module.
 * @module model/DecisionDefinitionDiagramDto
 * @version 7.20.0
 */
export class DecisionDefinitionDiagramDto {
  /**
   * Constructs a new <code>DecisionDefinitionDiagramDto</code>.
   * @alias module:model/DecisionDefinitionDiagramDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DecisionDefinitionDiagramDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecisionDefinitionDiagramDto} obj Optional instance to populate.
   * @return {module:model/DecisionDefinitionDiagramDto} The populated <code>DecisionDefinitionDiagramDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecisionDefinitionDiagramDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('dmnXml'))
        obj.dmnXml = ApiClient.convertToType(data['dmnXml'], 'String');
    }
    return obj;
  }
}

/**
 * The id of the decision definition.
 * @member {String} id
 */
DecisionDefinitionDiagramDto.prototype.id = undefined;

/**
 * An escaped XML string containing the XML that this decision definition was deployed with. Carriage returns, line feeds and quotation marks are escaped.
 * @member {String} dmnXml
 */
DecisionDefinitionDiagramDto.prototype.dmnXml = undefined;
