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
import {AnyValue} from './AnyValue';

/**
 * The VariableValueDto model module.
 * @module model/VariableValueDto
 * @version 7.20.0
 */
export class VariableValueDto {
  /**
   * Constructs a new <code>VariableValueDto</code>.
   * @alias module:model/VariableValueDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VariableValueDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariableValueDto} obj Optional instance to populate.
   * @return {module:model/VariableValueDto} The populated <code>VariableValueDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VariableValueDto();
      if (data.hasOwnProperty('value'))
        obj.value = AnyValue.constructFromObject(data['value']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('valueInfo'))
        obj.valueInfo = ApiClient.convertToType(data['valueInfo'], {'String': Object});
    }
    return obj;
  }
}

/**
 * @member {module:model/AnyValue} value
 */
VariableValueDto.prototype.value = undefined;

/**
 * The value type of the variable.
 * @member {String} type
 */
VariableValueDto.prototype.type = undefined;

/**
 * A JSON object containing additional, value-type-dependent properties. For serialized variables of type Object, the following properties can be provided:  * `objectTypeName`: A string representation of the object's type name. * `serializationDataFormat`: The serialization format used to store the variable.  For serialized variables of type File, the following properties can be provided:  * `filename`: The name of the file. This is not the variable name but the name that will be used when downloading the file again. * `mimetype`: The MIME type of the file that is being uploaded. * `encoding`: The encoding of the file that is being uploaded.  The following property can be provided for all value types:  * `transient`: Indicates whether the variable should be transient or not. See [documentation](https://docs.camunda.org/manual/develop/user-guide/process-engine/variables#transient-variables) for more informations. (Not applicable for `decision-definition`, ` /process-instance/variables-async`, and `/migration/executeAsync` endpoints)
 * @member {Object.<String, Object>} valueInfo
 */
VariableValueDto.prototype.valueInfo = undefined;

