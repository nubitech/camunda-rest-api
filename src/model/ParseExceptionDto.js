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
import {ExceptionDto} from './ExceptionDto';

/**
 * The ParseExceptionDto model module.
 * @module model/ParseExceptionDto
 * @version 7.20.0
 */
export class ParseExceptionDto {
  /**
   * Constructs a new <code>ParseExceptionDto</code>.
   * @alias module:model/ParseExceptionDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ParseExceptionDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParseExceptionDto} obj Optional instance to populate.
   * @return {module:model/ParseExceptionDto} The populated <code>ParseExceptionDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ParseExceptionDto();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
    }
    return obj;
  }
}

/**
 * An exception class indicating the occurred error.
 * @member {String} type
 */
ParseExceptionDto.prototype.type = undefined;

/**
 * A detailed message of the error.
 * @member {String} message
 */
ParseExceptionDto.prototype.message = undefined;

/**
 * The code allows your client application to identify the error in an automated fashion. You can look up the meaning of all built-in codes and learn how to add custom codes in the [User Guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/error-handling/#exception-codes).
 * @member {Number} code
 */
ParseExceptionDto.prototype.code = undefined;

