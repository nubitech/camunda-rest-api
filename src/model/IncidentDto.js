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
 * The IncidentDto model module.
 * @module model/IncidentDto
 * @version 7.20.0
 */
export class IncidentDto {
  /**
   * Constructs a new <code>IncidentDto</code>.
   * @alias module:model/IncidentDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IncidentDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncidentDto} obj Optional instance to populate.
   * @return {module:model/IncidentDto} The populated <code>IncidentDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncidentDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('processDefinitionId'))
        obj.processDefinitionId = ApiClient.convertToType(data['processDefinitionId'], 'String');
      if (data.hasOwnProperty('processInstanceId'))
        obj.processInstanceId = ApiClient.convertToType(data['processInstanceId'], 'String');
      if (data.hasOwnProperty('executionId'))
        obj.executionId = ApiClient.convertToType(data['executionId'], 'String');
      if (data.hasOwnProperty('incidentTimestamp'))
        obj.incidentTimestamp = ApiClient.convertToType(data['incidentTimestamp'], 'Date');
      if (data.hasOwnProperty('incidentType'))
        obj.incidentType = ApiClient.convertToType(data['incidentType'], 'String');
      if (data.hasOwnProperty('activityId'))
        obj.activityId = ApiClient.convertToType(data['activityId'], 'String');
      if (data.hasOwnProperty('failedActivityId'))
        obj.failedActivityId = ApiClient.convertToType(data['failedActivityId'], 'String');
      if (data.hasOwnProperty('causeIncidentId'))
        obj.causeIncidentId = ApiClient.convertToType(data['causeIncidentId'], 'String');
      if (data.hasOwnProperty('rootCauseIncidentId'))
        obj.rootCauseIncidentId = ApiClient.convertToType(data['rootCauseIncidentId'], 'String');
      if (data.hasOwnProperty('configuration'))
        obj.configuration = ApiClient.convertToType(data['configuration'], 'String');
      if (data.hasOwnProperty('tenantId'))
        obj.tenantId = ApiClient.convertToType(data['tenantId'], 'String');
      if (data.hasOwnProperty('incidentMessage'))
        obj.incidentMessage = ApiClient.convertToType(data['incidentMessage'], 'String');
      if (data.hasOwnProperty('jobDefinitionId'))
        obj.jobDefinitionId = ApiClient.convertToType(data['jobDefinitionId'], 'String');
      if (data.hasOwnProperty('annotation'))
        obj.annotation = ApiClient.convertToType(data['annotation'], 'String');
    }
    return obj;
  }
}

/**
 * The id of the incident.
 * @member {String} id
 */
IncidentDto.prototype.id = undefined;

/**
 * The id of the process definition this incident is associated with.
 * @member {String} processDefinitionId
 */
IncidentDto.prototype.processDefinitionId = undefined;

/**
 * The id of the process instance this incident is associated with.
 * @member {String} processInstanceId
 */
IncidentDto.prototype.processInstanceId = undefined;

/**
 * The id of the execution this incident is associated with.
 * @member {String} executionId
 */
IncidentDto.prototype.executionId = undefined;

/**
 * The time this incident happened. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
 * @member {Date} incidentTimestamp
 */
IncidentDto.prototype.incidentTimestamp = undefined;

/**
 * The type of incident, for example: `failedJobs` will be returned in case of an incident which identified a failed job during the execution of a process instance. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
 * @member {String} incidentType
 */
IncidentDto.prototype.incidentType = undefined;

/**
 * The id of the activity this incident is associated with.
 * @member {String} activityId
 */
IncidentDto.prototype.activityId = undefined;

/**
 * The id of the activity on which the last exception occurred.
 * @member {String} failedActivityId
 */
IncidentDto.prototype.failedActivityId = undefined;

/**
 * The id of the associated cause incident which has been triggered.
 * @member {String} causeIncidentId
 */
IncidentDto.prototype.causeIncidentId = undefined;

/**
 * The id of the associated root cause incident which has been triggered.
 * @member {String} rootCauseIncidentId
 */
IncidentDto.prototype.rootCauseIncidentId = undefined;

/**
 * The payload of this incident.
 * @member {String} configuration
 */
IncidentDto.prototype.configuration = undefined;

/**
 * The id of the tenant this incident is associated with.
 * @member {String} tenantId
 */
IncidentDto.prototype.tenantId = undefined;

/**
 * The message of this incident.
 * @member {String} incidentMessage
 */
IncidentDto.prototype.incidentMessage = undefined;

/**
 * The job definition id the incident is associated with.
 * @member {String} jobDefinitionId
 */
IncidentDto.prototype.jobDefinitionId = undefined;

/**
 * The annotation set to the incident.
 * @member {String} annotation
 */
IncidentDto.prototype.annotation = undefined;
