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
 * The TenantDto model module.
 * @module model/TenantDto
 * @version 7.20.0
 */
export class TenantDto {
  /**
   * Constructs a new <code>TenantDto</code>.
   * @alias module:model/TenantDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TenantDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TenantDto} obj Optional instance to populate.
   * @return {module:model/TenantDto} The populated <code>TenantDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TenantDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * The id of the tenant.
 * @member {String} id
 */
TenantDto.prototype.id = undefined;

/**
 * The name of the tenant.
 * @member {String} name
 */
TenantDto.prototype.name = undefined;

