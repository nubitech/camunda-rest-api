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
 * The HistoricTaskInstanceReportResultDto model module.
 * @module model/HistoricTaskInstanceReportResultDto
 * @version 7.20.0
 */
export class HistoricTaskInstanceReportResultDto {
  /**
   * Constructs a new <code>HistoricTaskInstanceReportResultDto</code>.
   * @alias module:model/HistoricTaskInstanceReportResultDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HistoricTaskInstanceReportResultDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricTaskInstanceReportResultDto} obj Optional instance to populate.
   * @return {module:model/HistoricTaskInstanceReportResultDto} The populated <code>HistoricTaskInstanceReportResultDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HistoricTaskInstanceReportResultDto();
      if (data.hasOwnProperty('taskName'))
        obj.taskName = ApiClient.convertToType(data['taskName'], 'String');
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('processDefinitionKey'))
        obj.processDefinitionKey = ApiClient.convertToType(data['processDefinitionKey'], 'String');
      if (data.hasOwnProperty('processDefinitionId'))
        obj.processDefinitionId = ApiClient.convertToType(data['processDefinitionId'], 'String');
      if (data.hasOwnProperty('processDefinitionName'))
        obj.processDefinitionName = ApiClient.convertToType(data['processDefinitionName'], 'String');
      if (data.hasOwnProperty('period'))
        obj.period = ApiClient.convertToType(data['period'], 'Number');
      if (data.hasOwnProperty('periodUnit'))
        obj.periodUnit = ApiClient.convertToType(data['periodUnit'], 'String');
      if (data.hasOwnProperty('minimum'))
        obj.minimum = ApiClient.convertToType(data['minimum'], 'Number');
      if (data.hasOwnProperty('maximum'))
        obj.maximum = ApiClient.convertToType(data['maximum'], 'Number');
      if (data.hasOwnProperty('average'))
        obj.average = ApiClient.convertToType(data['average'], 'Number');
    }
    return obj;
  }
}

/**
 * The name of the task. It is only available when the `groupBy` parameter is set to `taskName`. Else the value is `null`.  **Note:** This property is only set for a historic task report object. In these cases, the value of the `reportType` query parameter is `count`.
 * @member {String} taskName
 */
HistoricTaskInstanceReportResultDto.prototype.taskName = undefined;

/**
 * The number of tasks which have the given definition.  **Note:** This property is only set for a historic task report object. In these cases, the value of the `reportType` query parameter is `count`.
 * @member {Number} count
 */
HistoricTaskInstanceReportResultDto.prototype.count = undefined;

/**
 * The key of the process definition.  **Note:** This property is only set for a historic task report object. In these cases, the value of the `reportType` query parameter is `count`.
 * @member {String} processDefinitionKey
 */
HistoricTaskInstanceReportResultDto.prototype.processDefinitionKey = undefined;

/**
 * The id of the process definition.  **Note:** This property is only set for a historic task report object. In these cases, the value of the `reportType` query parameter is `count`.
 * @member {String} processDefinitionId
 */
HistoricTaskInstanceReportResultDto.prototype.processDefinitionId = undefined;

/**
 * The name of the process definition.  **Note:** This property is only set for a historic task report object. In these cases, the value of the `reportType` query parameter is `count`.
 * @member {String} processDefinitionName
 */
HistoricTaskInstanceReportResultDto.prototype.processDefinitionName = undefined;

/**
 * Specifies a span of time within a year. **Note:** The period must be interpreted in conjunction with the returned `periodUnit`.  **Note:** This property is only set for a duration report object. In these cases, the value of the `reportType` query parameter is `duration`.
 * @member {Number} period
 */
HistoricTaskInstanceReportResultDto.prototype.period = undefined;

/**
 * Allowed values for the <code>periodUnit</code> property.
 * @enum {String}
 * @readonly
 */
HistoricTaskInstanceReportResultDto.PeriodUnitEnum = {
  /**
   * value: "MONTH"
   * @const
   */
  MONTH: "MONTH",

  /**
   * value: "QUARTER"
   * @const
   */
  QUARTER: "QUARTER"
};
/**
 * The unit of the given period. Possible values are `MONTH` and `QUARTER`.  **Note:** This property is only set for a duration report object. In these cases, the value of the `reportType` query parameter is `duration`.
 * @member {module:model/HistoricTaskInstanceReportResultDto.PeriodUnitEnum} periodUnit
 */
HistoricTaskInstanceReportResultDto.prototype.periodUnit = undefined;

/**
 * The smallest duration in milliseconds of all completed process instances which were started in the given period.  **Note:** This property is only set for a duration report object. In these cases, the value of the `reportType` query parameter is `duration`.
 * @member {Number} minimum
 */
HistoricTaskInstanceReportResultDto.prototype.minimum = undefined;

/**
 * The greatest duration in milliseconds of all completed process instances which were started in the given period.  **Note:** This property is only set for a duration report object. In these cases, the value of the `reportType` query parameter is `duration`.
 * @member {Number} maximum
 */
HistoricTaskInstanceReportResultDto.prototype.maximum = undefined;

/**
 * The average duration in milliseconds of all completed process instances which were started in the given period.  **Note:** This property is only set for a duration report object. In these cases, the value of the `reportType` query parameter is `duration`.
 * @member {Number} average
 */
HistoricTaskInstanceReportResultDto.prototype.average = undefined;
