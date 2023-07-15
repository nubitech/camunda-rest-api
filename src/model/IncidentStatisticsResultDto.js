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
 * The IncidentStatisticsResultDto model module.
 * @module model/IncidentStatisticsResultDto
 * @version 7.20.0
 */
export class IncidentStatisticsResultDto {
  /**
   * Constructs a new <code>IncidentStatisticsResultDto</code>.
   * @alias module:model/IncidentStatisticsResultDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IncidentStatisticsResultDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncidentStatisticsResultDto} obj Optional instance to populate.
   * @return {module:model/IncidentStatisticsResultDto} The populated <code>IncidentStatisticsResultDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncidentStatisticsResultDto();
      if (data.hasOwnProperty('incidentType'))
        obj.incidentType = ApiClient.convertToType(data['incidentType'], 'String');
      if (data.hasOwnProperty('incidentCount'))
        obj.incidentCount = ApiClient.convertToType(data['incidentCount'], 'Number');
    }
    return obj;
  }
}

/**
 * The type of the incident the number of incidents is aggregated for. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
 * @member {String} incidentType
 */
IncidentStatisticsResultDto.prototype.incidentType = undefined;

/**
 * The total number of incidents for the corresponding incident type.
 * @member {Number} incidentCount
 */
IncidentStatisticsResultDto.prototype.incidentCount = undefined;
