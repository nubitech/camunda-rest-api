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
import {VariableValueDto} from './VariableValueDto';

/**
 * The EvaluationConditionDto model module.
 * @module model/EvaluationConditionDto
 * @version 7.20.0
 */
export class EvaluationConditionDto {
  /**
   * Constructs a new <code>EvaluationConditionDto</code>.
   * @alias module:model/EvaluationConditionDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EvaluationConditionDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EvaluationConditionDto} obj Optional instance to populate.
   * @return {module:model/EvaluationConditionDto} The populated <code>EvaluationConditionDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EvaluationConditionDto();
      if (data.hasOwnProperty('variables'))
        obj.variables = ApiClient.convertToType(data['variables'], {'String': VariableValueDto});
      if (data.hasOwnProperty('businessKey'))
        obj.businessKey = ApiClient.convertToType(data['businessKey'], 'String');
      if (data.hasOwnProperty('tenantId'))
        obj.tenantId = ApiClient.convertToType(data['tenantId'], 'String');
      if (data.hasOwnProperty('withoutTenantId'))
        obj.withoutTenantId = ApiClient.convertToType(data['withoutTenantId'], 'Boolean');
      if (data.hasOwnProperty('processDefinitionId'))
        obj.processDefinitionId = ApiClient.convertToType(data['processDefinitionId'], 'String');
    }
    return obj;
  }
}

/**
 * A map of variables which are used for evaluation of the conditions and are injected into the process instances which have been triggered. Each key is a variable name and each value a JSON variable value object with the following properties.
 * @member {Object.<String, module:model/VariableValueDto>} variables
 */
EvaluationConditionDto.prototype.variables = undefined;

/**
 * Used for the process instances that have been triggered after the evaluation.
 * @member {String} businessKey
 */
EvaluationConditionDto.prototype.businessKey = undefined;

/**
 * Used to evaluate a condition for a tenant with the given id. Will only evaluate conditions of process definitions which belong to the tenant.
 * @member {String} tenantId
 */
EvaluationConditionDto.prototype.tenantId = undefined;

/**
 * A Boolean value that indicates whether the conditions should only be evaluated of process definitions which belong to no tenant or not. Value may only be true, as false is the default behavior.
 * @member {Boolean} withoutTenantId
 */
EvaluationConditionDto.prototype.withoutTenantId = undefined;

/**
 * Used to evaluate conditions of the process definition with the given id.
 * @member {String} processDefinitionId
 */
EvaluationConditionDto.prototype.processDefinitionId = undefined;

