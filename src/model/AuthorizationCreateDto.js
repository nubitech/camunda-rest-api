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
 * The AuthorizationCreateDto model module.
 * @module model/AuthorizationCreateDto
 * @version 7.20.0
 */
export class AuthorizationCreateDto {
  /**
   * Constructs a new <code>AuthorizationCreateDto</code>.
   * @alias module:model/AuthorizationCreateDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AuthorizationCreateDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthorizationCreateDto} obj Optional instance to populate.
   * @return {module:model/AuthorizationCreateDto} The populated <code>AuthorizationCreateDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AuthorizationCreateDto();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
      if (data.hasOwnProperty('permissions'))
        obj.permissions = ApiClient.convertToType(data['permissions'], ['String']);
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
      if (data.hasOwnProperty('groupId'))
        obj.groupId = ApiClient.convertToType(data['groupId'], 'String');
      if (data.hasOwnProperty('resourceType'))
        obj.resourceType = ApiClient.convertToType(data['resourceType'], 'Number');
      if (data.hasOwnProperty('resourceId'))
        obj.resourceId = ApiClient.convertToType(data['resourceId'], 'String');
    }
    return obj;
  }
}

/**
 * The type of the authorization (0=global, 1=grant, 2=revoke). See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service.md#authorization-type) for more information about authorization types.
 * @member {Number} type
 */
AuthorizationCreateDto.prototype.type = undefined;

/**
 * An array of Strings holding the permissions provided by this authorization.
 * @member {Array.<String>} permissions
 */
AuthorizationCreateDto.prototype.permissions = undefined;

/**
 * The id of the user this authorization has been created for. The value `*` represents a global authorization ranging over all users.
 * @member {String} userId
 */
AuthorizationCreateDto.prototype.userId = undefined;

/**
 * The id of the group this authorization has been created for.
 * @member {String} groupId
 */
AuthorizationCreateDto.prototype.groupId = undefined;

/**
 * An integer representing the resource type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#resources) for a list of integer representations of resource types.
 * @member {Number} resourceType
 */
AuthorizationCreateDto.prototype.resourceType = undefined;

/**
 * The resource Id. The value `*` represents an authorization ranging over all instances of a resource.
 * @member {String} resourceId
 */
AuthorizationCreateDto.prototype.resourceId = undefined;

