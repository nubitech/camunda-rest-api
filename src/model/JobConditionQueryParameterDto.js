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
 * The JobConditionQueryParameterDto model module.
 * @module model/JobConditionQueryParameterDto
 * @version 7.20.0
 */
export class JobConditionQueryParameterDto {
  /**
   * Constructs a new <code>JobConditionQueryParameterDto</code>.
   * @alias module:model/JobConditionQueryParameterDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>JobConditionQueryParameterDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobConditionQueryParameterDto} obj Optional instance to populate.
   * @return {module:model/JobConditionQueryParameterDto} The populated <code>JobConditionQueryParameterDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new JobConditionQueryParameterDto();
      if (data.hasOwnProperty('operator'))
        obj.operator = ApiClient.convertToType(data['operator'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Date');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */
JobConditionQueryParameterDto.OperatorEnum = {
  /**
   * value: "gt"
   * @const
   */
  gt: "gt",

  /**
   * value: "lt"
   * @const
   */
  lt: "lt"
};
/**
 * Comparison operator to be used.
 * @member {module:model/JobConditionQueryParameterDto.OperatorEnum} operator
 */
JobConditionQueryParameterDto.prototype.operator = undefined;

/**
 * Date value to compare with.
 * @member {Date} value
 */
JobConditionQueryParameterDto.prototype.value = undefined;
