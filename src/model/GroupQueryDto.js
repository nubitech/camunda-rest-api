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
import {GroupQueryDtoSorting} from './GroupQueryDtoSorting';

/**
 * The GroupQueryDto model module.
 * @module model/GroupQueryDto
 * @version 7.20.0
 */
export class GroupQueryDto {
  /**
   * Constructs a new <code>GroupQueryDto</code>.
   * A group instance query which defines a list of group instances
   * @alias module:model/GroupQueryDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GroupQueryDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupQueryDto} obj Optional instance to populate.
   * @return {module:model/GroupQueryDto} The populated <code>GroupQueryDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GroupQueryDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('idIn'))
        obj.idIn = ApiClient.convertToType(data['idIn'], ['String']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('nameLike'))
        obj.nameLike = ApiClient.convertToType(data['nameLike'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('member'))
        obj.member = ApiClient.convertToType(data['member'], 'String');
      if (data.hasOwnProperty('memberOfTenant'))
        obj.memberOfTenant = ApiClient.convertToType(data['memberOfTenant'], 'String');
      if (data.hasOwnProperty('sorting'))
        obj.sorting = ApiClient.convertToType(data['sorting'], [GroupQueryDtoSorting]);
    }
    return obj;
  }
}

/**
 * Filter by the id of the group.
 * @member {String} id
 */
GroupQueryDto.prototype.id = undefined;

/**
 * Filter by a JSON string array of group ids.
 * @member {Array.<String>} idIn
 */
GroupQueryDto.prototype.idIn = undefined;

/**
 * Filter by the name of the group.
 * @member {String} name
 */
GroupQueryDto.prototype.name = undefined;

/**
 * Filter by the name that the parameter is a substring of.
 * @member {String} nameLike
 */
GroupQueryDto.prototype.nameLike = undefined;

/**
 * Filter by the type of the group.
 * @member {String} type
 */
GroupQueryDto.prototype.type = undefined;

/**
 * Only retrieve groups where the given user id is a member of.
 * @member {String} member
 */
GroupQueryDto.prototype.member = undefined;

/**
 * Only retrieve groups which are members of the given tenant.
 * @member {String} memberOfTenant
 */
GroupQueryDto.prototype.memberOfTenant = undefined;

/**
 * Apply sorting of the result
 * @member {Array.<module:model/GroupQueryDtoSorting>} sorting
 */
GroupQueryDto.prototype.sorting = undefined;
