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
 * The AuthorizationDto model module.
 * @module model/AuthorizationDto
 * @version 7.20.0
 */
export class AuthorizationDto {
  /**
   * Constructs a new <code>AuthorizationDto</code>.
   * @alias module:model/AuthorizationDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AuthorizationDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthorizationDto} obj Optional instance to populate.
   * @return {module:model/AuthorizationDto} The populated <code>AuthorizationDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AuthorizationDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
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
      if (data.hasOwnProperty('removalTime'))
        obj.removalTime = ApiClient.convertToType(data['removalTime'], 'Date');
      if (data.hasOwnProperty('rootProcessInstanceId'))
        obj.rootProcessInstanceId = ApiClient.convertToType(data['rootProcessInstanceId'], 'String');
    }
    return obj;
  }
}

/**
 * The id of the authorization.
 * @member {String} id
 */
AuthorizationDto.prototype.id = undefined;

/**
 * The type of the authorization (0=global, 1=grant, 2=revoke). See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service.md#authorization-type) for more information about authorization types.
 * @member {Number} type
 */
AuthorizationDto.prototype.type = undefined;

/**
 * An array of Strings holding the permissions provided by this authorization.
 * @member {Array.<String>} permissions
 */
AuthorizationDto.prototype.permissions = undefined;

/**
 * The id of the user this authorization has been created for. The value `*` represents a global authorization ranging over all users.
 * @member {String} userId
 */
AuthorizationDto.prototype.userId = undefined;

/**
 * The id of the group this authorization has been created for.
 * @member {String} groupId
 */
AuthorizationDto.prototype.groupId = undefined;

/**
 * An integer representing the resource type. See the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/authorization-service/#resources) for a list of integer representations of resource types.
 * @member {Number} resourceType
 */
AuthorizationDto.prototype.resourceType = undefined;

/**
 * The resource Id. The value `*` represents an authorization ranging over all instances of a resource.
 * @member {String} resourceId
 */
AuthorizationDto.prototype.resourceId = undefined;

/**
 * The removal time indicates the date a historic instance authorization is cleaned up. A removal time can only be assigned to a historic instance authorization. Can be `null` when not related to a historic instance resource or when the removal time strategy is end and the root process instance is not finished. Default format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} removalTime
 */
AuthorizationDto.prototype.removalTime = undefined;

/**
 * The process instance id of the root process instance the historic instance authorization is related to. Can be `null` if not related to a historic instance resource.
 * @member {String} rootProcessInstanceId
 */
AuthorizationDto.prototype.rootProcessInstanceId = undefined;

