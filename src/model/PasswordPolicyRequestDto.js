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
import {UserProfileDto} from './UserProfileDto';

/**
 * The PasswordPolicyRequestDto model module.
 * @module model/PasswordPolicyRequestDto
 * @version 7.20.0
 */
export class PasswordPolicyRequestDto {
  /**
   * Constructs a new <code>PasswordPolicyRequestDto</code>.
   * @alias module:model/PasswordPolicyRequestDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PasswordPolicyRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordPolicyRequestDto} obj Optional instance to populate.
   * @return {module:model/PasswordPolicyRequestDto} The populated <code>PasswordPolicyRequestDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PasswordPolicyRequestDto();
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('profile'))
        obj.profile = UserProfileDto.constructFromObject(data['profile']);
    }
    return obj;
  }
}

/**
 * The candidate password to be check against the password policy.
 * @member {String} password
 */
PasswordPolicyRequestDto.prototype.password = undefined;

/**
 * @member {module:model/UserProfileDto} profile
 */
PasswordPolicyRequestDto.prototype.profile = undefined;
