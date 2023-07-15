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
import {AtomLink} from './AtomLink';
import {LinkableDto} from './LinkableDto';

/**
 * The CommentDto model module.
 * @module model/CommentDto
 * @version 7.20.0
 */
export class CommentDto {
  /**
   * Constructs a new <code>CommentDto</code>.
   * @alias module:model/CommentDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CommentDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentDto} obj Optional instance to populate.
   * @return {module:model/CommentDto} The populated <code>CommentDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CommentDto();
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [AtomLink]);
    }
    return obj;
  }
}

/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
CommentDto.prototype.links = undefined;

