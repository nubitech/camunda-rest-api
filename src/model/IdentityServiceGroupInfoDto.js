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
import {IdentityServiceGroupDto} from './IdentityServiceGroupDto';
import {IdentityServiceUserDto} from './IdentityServiceUserDto';

/**
 * The IdentityServiceGroupInfoDto model module.
 * @module model/IdentityServiceGroupInfoDto
 * @version 7.20.0
 */
export class IdentityServiceGroupInfoDto {
  /**
   * Constructs a new <code>IdentityServiceGroupInfoDto</code>.
   * @alias module:model/IdentityServiceGroupInfoDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IdentityServiceGroupInfoDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdentityServiceGroupInfoDto} obj Optional instance to populate.
   * @return {module:model/IdentityServiceGroupInfoDto} The populated <code>IdentityServiceGroupInfoDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IdentityServiceGroupInfoDto();
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], [IdentityServiceGroupDto]);
      if (data.hasOwnProperty('groupUsers'))
        obj.groupUsers = ApiClient.convertToType(data['groupUsers'], [IdentityServiceUserDto]);
    }
    return obj;
  }
}

/**
 * An array of group objects.
 * @member {Array.<module:model/IdentityServiceGroupDto>} groups
 */
IdentityServiceGroupInfoDto.prototype.groups = undefined;

/**
 * An array that contains all users that are member in one of the groups.
 * @member {Array.<module:model/IdentityServiceUserDto>} groupUsers
 */
IdentityServiceGroupInfoDto.prototype.groupUsers = undefined;

