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
 * The IdentityServiceUserDto model module.
 * @module model/IdentityServiceUserDto
 * @version 7.20.0
 */
export class IdentityServiceUserDto {
  /**
   * Constructs a new <code>IdentityServiceUserDto</code>.
   * @alias module:model/IdentityServiceUserDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IdentityServiceUserDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdentityServiceUserDto} obj Optional instance to populate.
   * @return {module:model/IdentityServiceUserDto} The populated <code>IdentityServiceUserDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IdentityServiceUserDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
    }
    return obj;
  }
}

/**
 * The id of the user.
 * @member {String} id
 */
IdentityServiceUserDto.prototype.id = undefined;

/**
 * The firstname of the user.
 * @member {String} firstName
 */
IdentityServiceUserDto.prototype.firstName = undefined;

/**
 * The lastname of the user.
 * @member {String} lastName
 */
IdentityServiceUserDto.prototype.lastName = undefined;

/**
 * The displayName is generated from the id or firstName and lastName if available.
 * @member {String} displayName
 */
IdentityServiceUserDto.prototype.displayName = undefined;
