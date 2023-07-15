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
 * The HistoricDecisionInstanceQueryDto model module.
 * @module model/HistoricDecisionInstanceQueryDto
 * @version 7.20.0
 */
export class HistoricDecisionInstanceQueryDto {
  /**
   * Constructs a new <code>HistoricDecisionInstanceQueryDto</code>.
   * A historic decision instance query which defines a list of historic decision instances
   * @alias module:model/HistoricDecisionInstanceQueryDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HistoricDecisionInstanceQueryDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricDecisionInstanceQueryDto} obj Optional instance to populate.
   * @return {module:model/HistoricDecisionInstanceQueryDto} The populated <code>HistoricDecisionInstanceQueryDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HistoricDecisionInstanceQueryDto();
      if (data.hasOwnProperty('decisionInstanceId'))
        obj.decisionInstanceId = ApiClient.convertToType(data['decisionInstanceId'], 'String');
      if (data.hasOwnProperty('decisionInstanceIdIn'))
        obj.decisionInstanceIdIn = ApiClient.convertToType(data['decisionInstanceIdIn'], ['String']);
      if (data.hasOwnProperty('decisionDefinitionId'))
        obj.decisionDefinitionId = ApiClient.convertToType(data['decisionDefinitionId'], 'String');
      if (data.hasOwnProperty('decisionDefinitionIdIn'))
        obj.decisionDefinitionIdIn = ApiClient.convertToType(data['decisionDefinitionIdIn'], ['String']);
      if (data.hasOwnProperty('decisionDefinitionKey'))
        obj.decisionDefinitionKey = ApiClient.convertToType(data['decisionDefinitionKey'], 'String');
      if (data.hasOwnProperty('decisionDefinitionKeyIn'))
        obj.decisionDefinitionKeyIn = ApiClient.convertToType(data['decisionDefinitionKeyIn'], ['String']);
      if (data.hasOwnProperty('decisionDefinitionName'))
        obj.decisionDefinitionName = ApiClient.convertToType(data['decisionDefinitionName'], 'String');
      if (data.hasOwnProperty('decisionDefinitionNameLike'))
        obj.decisionDefinitionNameLike = ApiClient.convertToType(data['decisionDefinitionNameLike'], 'String');
      if (data.hasOwnProperty('processDefinitionId'))
        obj.processDefinitionId = ApiClient.convertToType(data['processDefinitionId'], 'String');
      if (data.hasOwnProperty('processDefinitionKey'))
        obj.processDefinitionKey = ApiClient.convertToType(data['processDefinitionKey'], 'String');
      if (data.hasOwnProperty('processInstanceId'))
        obj.processInstanceId = ApiClient.convertToType(data['processInstanceId'], 'String');
      if (data.hasOwnProperty('caseDefinitionId'))
        obj.caseDefinitionId = ApiClient.convertToType(data['caseDefinitionId'], 'String');
      if (data.hasOwnProperty('caseDefinitionKey'))
        obj.caseDefinitionKey = ApiClient.convertToType(data['caseDefinitionKey'], 'String');
      if (data.hasOwnProperty('caseInstanceId'))
        obj.caseInstanceId = ApiClient.convertToType(data['caseInstanceId'], 'String');
      if (data.hasOwnProperty('activityIdIn'))
        obj.activityIdIn = ApiClient.convertToType(data['activityIdIn'], ['String']);
      if (data.hasOwnProperty('activityInstanceIdIn'))
        obj.activityInstanceIdIn = ApiClient.convertToType(data['activityInstanceIdIn'], ['String']);
      if (data.hasOwnProperty('tenantIdIn'))
        obj.tenantIdIn = ApiClient.convertToType(data['tenantIdIn'], ['String']);
      if (data.hasOwnProperty('withoutTenantId'))
        obj.withoutTenantId = ApiClient.convertToType(data['withoutTenantId'], 'Boolean');
      if (data.hasOwnProperty('evaluatedBefore'))
        obj.evaluatedBefore = ApiClient.convertToType(data['evaluatedBefore'], 'Date');
      if (data.hasOwnProperty('evaluatedAfter'))
        obj.evaluatedAfter = ApiClient.convertToType(data['evaluatedAfter'], 'Date');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
      if (data.hasOwnProperty('rootDecisionInstanceId'))
        obj.rootDecisionInstanceId = ApiClient.convertToType(data['rootDecisionInstanceId'], 'String');
      if (data.hasOwnProperty('rootDecisionInstancesOnly'))
        obj.rootDecisionInstancesOnly = ApiClient.convertToType(data['rootDecisionInstancesOnly'], 'Boolean');
      if (data.hasOwnProperty('decisionRequirementsDefinitionId'))
        obj.decisionRequirementsDefinitionId = ApiClient.convertToType(data['decisionRequirementsDefinitionId'], 'String');
      if (data.hasOwnProperty('decisionRequirementsDefinitionKey'))
        obj.decisionRequirementsDefinitionKey = ApiClient.convertToType(data['decisionRequirementsDefinitionKey'], 'String');
      if (data.hasOwnProperty('includeInputs'))
        obj.includeInputs = ApiClient.convertToType(data['includeInputs'], 'Boolean');
      if (data.hasOwnProperty('includeOutputs'))
        obj.includeOutputs = ApiClient.convertToType(data['includeOutputs'], 'Boolean');
      if (data.hasOwnProperty('disableBinaryFetching'))
        obj.disableBinaryFetching = ApiClient.convertToType(data['disableBinaryFetching'], 'Boolean');
      if (data.hasOwnProperty('disableCustomObjectDeserialization'))
        obj.disableCustomObjectDeserialization = ApiClient.convertToType(data['disableCustomObjectDeserialization'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Filter by decision instance id.
 * @member {String} decisionInstanceId
 */
HistoricDecisionInstanceQueryDto.prototype.decisionInstanceId = undefined;

/**
 * Filter by decision instance ids. Must be a comma-separated list of decision instance ids.
 * @member {Array.<String>} decisionInstanceIdIn
 */
HistoricDecisionInstanceQueryDto.prototype.decisionInstanceIdIn = undefined;

/**
 * Filter by the decision definition the instances belongs to.
 * @member {String} decisionDefinitionId
 */
HistoricDecisionInstanceQueryDto.prototype.decisionDefinitionId = undefined;

/**
 * Filter by the decision definitions the instances belongs to. Must be a comma-separated list of decision definition ids.
 * @member {Array.<String>} decisionDefinitionIdIn
 */
HistoricDecisionInstanceQueryDto.prototype.decisionDefinitionIdIn = undefined;

/**
 * Filter by the key of the decision definition the instances belongs to.
 * @member {String} decisionDefinitionKey
 */
HistoricDecisionInstanceQueryDto.prototype.decisionDefinitionKey = undefined;

/**
 * Filter by the keys of the decision definition the instances belongs to. Must be a comma- separated list of decision definition keys.
 * @member {Array.<String>} decisionDefinitionKeyIn
 */
HistoricDecisionInstanceQueryDto.prototype.decisionDefinitionKeyIn = undefined;

/**
 * Filter by the name of the decision definition the instances belongs to.
 * @member {String} decisionDefinitionName
 */
HistoricDecisionInstanceQueryDto.prototype.decisionDefinitionName = undefined;

/**
 * Filter by the name of the decision definition the instances belongs to, that the parameter is a substring of.
 * @member {String} decisionDefinitionNameLike
 */
HistoricDecisionInstanceQueryDto.prototype.decisionDefinitionNameLike = undefined;

/**
 * Filter by the process definition the instances belongs to.
 * @member {String} processDefinitionId
 */
HistoricDecisionInstanceQueryDto.prototype.processDefinitionId = undefined;

/**
 * Filter by the key of the process definition the instances belongs to.
 * @member {String} processDefinitionKey
 */
HistoricDecisionInstanceQueryDto.prototype.processDefinitionKey = undefined;

/**
 * Filter by the process instance the instances belongs to.
 * @member {String} processInstanceId
 */
HistoricDecisionInstanceQueryDto.prototype.processInstanceId = undefined;

/**
 * Filter by the case definition the instances belongs to.
 * @member {String} caseDefinitionId
 */
HistoricDecisionInstanceQueryDto.prototype.caseDefinitionId = undefined;

/**
 * Filter by the key of the case definition the instances belongs to.
 * @member {String} caseDefinitionKey
 */
HistoricDecisionInstanceQueryDto.prototype.caseDefinitionKey = undefined;

/**
 * Filter by the case instance the instances belongs to.
 * @member {String} caseInstanceId
 */
HistoricDecisionInstanceQueryDto.prototype.caseInstanceId = undefined;

/**
 * Filter by the activity ids the instances belongs to. Must be a comma-separated list of acitvity ids.
 * @member {Array.<String>} activityIdIn
 */
HistoricDecisionInstanceQueryDto.prototype.activityIdIn = undefined;

/**
 * Filter by the activity instance ids the instances belongs to. Must be a comma-separated list of acitvity instance ids.
 * @member {Array.<String>} activityInstanceIdIn
 */
HistoricDecisionInstanceQueryDto.prototype.activityInstanceIdIn = undefined;

/**
 * Filter by a comma-separated list of tenant ids. A historic decision instance must have one of the given tenant ids.
 * @member {Array.<String>} tenantIdIn
 */
HistoricDecisionInstanceQueryDto.prototype.tenantIdIn = undefined;

/**
 * Only include historic decision instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} withoutTenantId
 */
HistoricDecisionInstanceQueryDto.prototype.withoutTenantId = undefined;

/**
 * Restrict to instances that were evaluated before the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM- dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
 * @member {Date} evaluatedBefore
 */
HistoricDecisionInstanceQueryDto.prototype.evaluatedBefore = undefined;

/**
 * Restrict to instances that were evaluated after the given date. By [default](https://docs.camunda.org/manual/develop/reference/rest/overview/date-format/), the date must have the format `yyyy-MM- dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
 * @member {Date} evaluatedAfter
 */
HistoricDecisionInstanceQueryDto.prototype.evaluatedAfter = undefined;

/**
 * Restrict to instances that were evaluated by the given user.
 * @member {String} userId
 */
HistoricDecisionInstanceQueryDto.prototype.userId = undefined;

/**
 * Restrict to instances that have a given root decision instance id. This also includes the decision instance with the given id.
 * @member {String} rootDecisionInstanceId
 */
HistoricDecisionInstanceQueryDto.prototype.rootDecisionInstanceId = undefined;

/**
 * Restrict to instances those are the root decision instance of an evaluation. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} rootDecisionInstancesOnly
 */
HistoricDecisionInstanceQueryDto.prototype.rootDecisionInstancesOnly = undefined;

/**
 * Filter by the decision requirements definition the instances belongs to.
 * @member {String} decisionRequirementsDefinitionId
 */
HistoricDecisionInstanceQueryDto.prototype.decisionRequirementsDefinitionId = undefined;

/**
 * Filter by the key of the decision requirements definition the instances belongs to.
 * @member {String} decisionRequirementsDefinitionKey
 */
HistoricDecisionInstanceQueryDto.prototype.decisionRequirementsDefinitionKey = undefined;

/**
 * Include input values in the result. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} includeInputs
 */
HistoricDecisionInstanceQueryDto.prototype.includeInputs = undefined;

/**
 * Include output values in the result. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} includeOutputs
 */
HistoricDecisionInstanceQueryDto.prototype.includeOutputs = undefined;

/**
 * Disables fetching of byte array input and output values. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} disableBinaryFetching
 */
HistoricDecisionInstanceQueryDto.prototype.disableBinaryFetching = undefined;

/**
 * Disables deserialization of input and output values that are custom objects. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} disableCustomObjectDeserialization
 */
HistoricDecisionInstanceQueryDto.prototype.disableCustomObjectDeserialization = undefined;

