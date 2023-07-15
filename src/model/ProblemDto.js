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
 * The ProblemDto model module.
 * @module model/ProblemDto
 * @version 7.20.0
 */
export class ProblemDto {
  /**
   * Constructs a new <code>ProblemDto</code>.
   * @alias module:model/ProblemDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProblemDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProblemDto} obj Optional instance to populate.
   * @return {module:model/ProblemDto} The populated <code>ProblemDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProblemDto();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('line'))
        obj.line = ApiClient.convertToType(data['line'], 'Number');
      if (data.hasOwnProperty('column'))
        obj.column = ApiClient.convertToType(data['column'], 'Number');
      if (data.hasOwnProperty('mainElementId'))
        obj.mainElementId = ApiClient.convertToType(data['mainElementId'], 'String');
      if (data.hasOwnProperty('elementIds'))
        obj.elementIds = ApiClient.convertToType(data['elementIds'], ['String']);
    }
    return obj;
  }
}

/**
 * The message of the problem.
 * @member {String} message
 */
ProblemDto.prototype.message = undefined;

/**
 * The line where the problem occurred.
 * @member {Number} line
 */
ProblemDto.prototype.line = undefined;

/**
 * The column where the problem occurred.
 * @member {Number} column
 */
ProblemDto.prototype.column = undefined;

/**
 * The main element id where the problem occurred.
 * @member {String} mainElementId
 */
ProblemDto.prototype.mainElementId = undefined;

/**
 * A list of element id affected by the problem.
 * @member {Array.<String>} elementIds
 */
ProblemDto.prototype.elementIds = undefined;
