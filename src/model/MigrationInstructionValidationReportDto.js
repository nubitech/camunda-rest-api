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
import {MigrationInstructionDto} from './MigrationInstructionDto';

/**
 * The MigrationInstructionValidationReportDto model module.
 * @module model/MigrationInstructionValidationReportDto
 * @version 7.20.0
 */
export class MigrationInstructionValidationReportDto {
  /**
   * Constructs a new <code>MigrationInstructionValidationReportDto</code>.
   * @alias module:model/MigrationInstructionValidationReportDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MigrationInstructionValidationReportDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MigrationInstructionValidationReportDto} obj Optional instance to populate.
   * @return {module:model/MigrationInstructionValidationReportDto} The populated <code>MigrationInstructionValidationReportDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MigrationInstructionValidationReportDto();
      if (data.hasOwnProperty('instruction'))
        obj.instruction = MigrationInstructionDto.constructFromObject(data['instruction']);
      if (data.hasOwnProperty('failures'))
        obj.failures = ApiClient.convertToType(data['failures'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MigrationInstructionDto} instruction
 */
MigrationInstructionValidationReportDto.prototype.instruction = undefined;

/**
 * A list of instruction validation report messages.
 * @member {Array.<String>} failures
 */
MigrationInstructionValidationReportDto.prototype.failures = undefined;

