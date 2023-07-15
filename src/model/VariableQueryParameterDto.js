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
import {AnyValue} from './AnyValue';
import {ConditionQueryParameterDto} from './ConditionQueryParameterDto';

/**
 * The VariableQueryParameterDto model module.
 * @module model/VariableQueryParameterDto
 * @version 7.20.0
 */
export class VariableQueryParameterDto {
  /**
   * Constructs a new <code>VariableQueryParameterDto</code>.
   * @alias module:model/VariableQueryParameterDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VariableQueryParameterDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariableQueryParameterDto} obj Optional instance to populate.
   * @return {module:model/VariableQueryParameterDto} The populated <code>VariableQueryParameterDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VariableQueryParameterDto();
      if (data.hasOwnProperty('operator'))
        obj.operator = ApiClient.convertToType(data['operator'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = AnyValue.constructFromObject(data['value']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */
VariableQueryParameterDto.OperatorEnum = {
  /**
   * value: "eq"
   * @const
   */
  eq: "eq",

  /**
   * value: "neq"
   * @const
   */
  neq: "neq",

  /**
   * value: "gt"
   * @const
   */
  gt: "gt",

  /**
   * value: "gteq"
   * @const
   */
  gteq: "gteq",

  /**
   * value: "lt"
   * @const
   */
  lt: "lt",

  /**
   * value: "lteq"
   * @const
   */
  lteq: "lteq",

  /**
   * value: "like"
   * @const
   */
  like: "like",

  /**
   * value: "notLike"
   * @const
   */
  notLike: "notLike"
};
/**
 * Comparison operator to be used. `notLike` is not supported by all endpoints.
 * @member {module:model/VariableQueryParameterDto.OperatorEnum} operator
 */
VariableQueryParameterDto.prototype.operator = undefined;

/**
 * @member {module:model/AnyValue} value
 */
VariableQueryParameterDto.prototype.value = undefined;

