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
import {ActivityInstanceIncidentDto} from './ActivityInstanceIncidentDto';

/**
 * The TransitionInstanceDto model module.
 * @module model/TransitionInstanceDto
 * @version 7.20.0
 */
export class TransitionInstanceDto {
  /**
   * Constructs a new <code>TransitionInstanceDto</code>.
   * A JSON object corresponding to the Activity Instance tree of the given process instance.
   * @alias module:model/TransitionInstanceDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransitionInstanceDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransitionInstanceDto} obj Optional instance to populate.
   * @return {module:model/TransitionInstanceDto} The populated <code>TransitionInstanceDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransitionInstanceDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('parentActivityInstanceId'))
        obj.parentActivityInstanceId = ApiClient.convertToType(data['parentActivityInstanceId'], 'String');
      if (data.hasOwnProperty('activityId'))
        obj.activityId = ApiClient.convertToType(data['activityId'], 'String');
      if (data.hasOwnProperty('activityName'))
        obj.activityName = ApiClient.convertToType(data['activityName'], 'String');
      if (data.hasOwnProperty('activityType'))
        obj.activityType = ApiClient.convertToType(data['activityType'], 'String');
      if (data.hasOwnProperty('processInstanceId'))
        obj.processInstanceId = ApiClient.convertToType(data['processInstanceId'], 'String');
      if (data.hasOwnProperty('processDefinitionId'))
        obj.processDefinitionId = ApiClient.convertToType(data['processDefinitionId'], 'String');
      if (data.hasOwnProperty('executionId'))
        obj.executionId = ApiClient.convertToType(data['executionId'], 'String');
      if (data.hasOwnProperty('incidentIds'))
        obj.incidentIds = ApiClient.convertToType(data['incidentIds'], ['String']);
      if (data.hasOwnProperty('incidents'))
        obj.incidents = ApiClient.convertToType(data['incidents'], [ActivityInstanceIncidentDto]);
    }
    return obj;
  }
}

/**
 * The id of the transition instance.
 * @member {String} id
 */
TransitionInstanceDto.prototype.id = undefined;

/**
 * The id of the parent activity instance, for example a sub process instance.
 * @member {String} parentActivityInstanceId
 */
TransitionInstanceDto.prototype.parentActivityInstanceId = undefined;

/**
 * The id of the activity that this instance enters (asyncBefore job) or leaves (asyncAfter job)
 * @member {String} activityId
 */
TransitionInstanceDto.prototype.activityId = undefined;

/**
 * The name of the activity that this instance enters (asyncBefore job) or leaves (asyncAfter job)
 * @member {String} activityName
 */
TransitionInstanceDto.prototype.activityName = undefined;

/**
 * The type of the activity that this instance enters (asyncBefore job) or leaves (asyncAfter job)
 * @member {String} activityType
 */
TransitionInstanceDto.prototype.activityType = undefined;

/**
 * The id of the process instance this instance is part of.
 * @member {String} processInstanceId
 */
TransitionInstanceDto.prototype.processInstanceId = undefined;

/**
 * The id of the process definition.
 * @member {String} processDefinitionId
 */
TransitionInstanceDto.prototype.processDefinitionId = undefined;

/**
 * The execution id.
 * @member {String} executionId
 */
TransitionInstanceDto.prototype.executionId = undefined;

/**
 * A list of incident ids.
 * @member {Array.<String>} incidentIds
 */
TransitionInstanceDto.prototype.incidentIds = undefined;

/**
 * A list of JSON objects containing incident specific properties: * `id`: the id of the incident * `activityId`: the activity id in which the incident occurred
 * @member {Array.<module:model/ActivityInstanceIncidentDto>} incidents
 */
TransitionInstanceDto.prototype.incidents = undefined;

