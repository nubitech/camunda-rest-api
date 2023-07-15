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
 * The CreateFilterDto model module.
 * @module model/CreateFilterDto
 * @version 7.20.0
 */
export class CreateFilterDto {
  /**
   * Constructs a new <code>CreateFilterDto</code>.
   * @alias module:model/CreateFilterDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateFilterDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFilterDto} obj Optional instance to populate.
   * @return {module:model/CreateFilterDto} The populated <code>CreateFilterDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateFilterDto();
      if (data.hasOwnProperty('resourceType'))
        obj.resourceType = ApiClient.convertToType(data['resourceType'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'String');
      if (data.hasOwnProperty('query'))
        obj.query = ApiClient.convertToType(data['query'], Object);
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], Object);
    }
    return obj;
  }
}

/**
 * The resource type of the filter.
 * @member {String} resourceType
 */
CreateFilterDto.prototype.resourceType = undefined;

/**
 * The name of the filter.
 * @member {String} name
 */
CreateFilterDto.prototype.name = undefined;

/**
 * The user id of the owner of the filter.
 * @member {String} owner
 */
CreateFilterDto.prototype.owner = undefined;

/**
 * The query of the filter as a JSON object.
 * @member {Object} query
 */
CreateFilterDto.prototype.query = undefined;

/**
 * The properties of a filter as a JSON object.
 * @member {Object} properties
 */
CreateFilterDto.prototype.properties = undefined;

