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
 * The HistoricDecisionInstanceStatisticsDto model module.
 * @module model/HistoricDecisionInstanceStatisticsDto
 * @version 7.20.0
 */
export class HistoricDecisionInstanceStatisticsDto {
  /**
   * Constructs a new <code>HistoricDecisionInstanceStatisticsDto</code>.
   * @alias module:model/HistoricDecisionInstanceStatisticsDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HistoricDecisionInstanceStatisticsDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricDecisionInstanceStatisticsDto} obj Optional instance to populate.
   * @return {module:model/HistoricDecisionInstanceStatisticsDto} The populated <code>HistoricDecisionInstanceStatisticsDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HistoricDecisionInstanceStatisticsDto();
      if (data.hasOwnProperty('decisionDefinitionKey'))
        obj.decisionDefinitionKey = ApiClient.convertToType(data['decisionDefinitionKey'], 'String');
      if (data.hasOwnProperty('evaluations'))
        obj.evaluations = ApiClient.convertToType(data['evaluations'], 'Number');
    }
    return obj;
  }
}

/**
 * A key of decision definition.
 * @member {String} decisionDefinitionKey
 */
HistoricDecisionInstanceStatisticsDto.prototype.decisionDefinitionKey = undefined;

/**
 * A number of evaluation for decision definition.
 * @member {Number} evaluations
 */
HistoricDecisionInstanceStatisticsDto.prototype.evaluations = undefined;
