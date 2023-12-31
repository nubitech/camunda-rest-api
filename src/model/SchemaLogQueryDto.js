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
import {SchemaLogQueryDtoSorting} from './SchemaLogQueryDtoSorting';

/**
 * The SchemaLogQueryDto model module.
 * @module model/SchemaLogQueryDto
 * @version 7.20.0
 */
export class SchemaLogQueryDto {
  /**
   * Constructs a new <code>SchemaLogQueryDto</code>.
   * @alias module:model/SchemaLogQueryDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SchemaLogQueryDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SchemaLogQueryDto} obj Optional instance to populate.
   * @return {module:model/SchemaLogQueryDto} The populated <code>SchemaLogQueryDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SchemaLogQueryDto();
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('sorting'))
        obj.sorting = ApiClient.convertToType(data['sorting'], [SchemaLogQueryDtoSorting]);
    }
    return obj;
  }
}

/**
 * The version of the schema.
 * @member {String} version
 */
SchemaLogQueryDto.prototype.version = undefined;

/**
 * A JSON array of criteria to sort the result by. Each element of the array is                       a JSON object that specifies one ordering. The position in the array                       identifies the rank of an ordering, i.e., whether it is primary, secondary,                       etc. 
 * @member {Array.<module:model/SchemaLogQueryDtoSorting>} sorting
 */
SchemaLogQueryDto.prototype.sorting = undefined;

