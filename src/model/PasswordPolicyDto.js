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
import {PasswordPolicyRuleDto} from './PasswordPolicyRuleDto';

/**
 * The PasswordPolicyDto model module.
 * @module model/PasswordPolicyDto
 * @version 7.20.0
 */
export class PasswordPolicyDto {
  /**
   * Constructs a new <code>PasswordPolicyDto</code>.
   * @alias module:model/PasswordPolicyDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PasswordPolicyDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordPolicyDto} obj Optional instance to populate.
   * @return {module:model/PasswordPolicyDto} The populated <code>PasswordPolicyDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PasswordPolicyDto();
      if (data.hasOwnProperty('rules'))
        obj.rules = ApiClient.convertToType(data['rules'], [PasswordPolicyRuleDto]);
    }
    return obj;
  }
}

/**
 * An array of password policy rules. Each element of the array is representing one rule of the policy.
 * @member {Array.<module:model/PasswordPolicyRuleDto>} rules
 */
PasswordPolicyDto.prototype.rules = undefined;
