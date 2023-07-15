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
 * The AtomLink model module.
 * @module model/AtomLink
 * @version 7.20.0
 */
export class AtomLink {
  /**
   * Constructs a new <code>AtomLink</code>.
   * @alias module:model/AtomLink
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AtomLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AtomLink} obj Optional instance to populate.
   * @return {module:model/AtomLink} The populated <code>AtomLink</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AtomLink();
      if (data.hasOwnProperty('rel'))
        obj.rel = ApiClient.convertToType(data['rel'], 'String');
      if (data.hasOwnProperty('href'))
        obj.href = ApiClient.convertToType(data['href'], 'String');
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
    }
    return obj;
  }
}

/**
 * The relation of the link to the object that belongs to.
 * @member {String} rel
 */
AtomLink.prototype.rel = undefined;

/**
 * The url of the link.
 * @member {String} href
 */
AtomLink.prototype.href = undefined;

/**
 * The http method.
 * @member {String} method
 */
AtomLink.prototype.method = undefined;

