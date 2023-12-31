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
 * The CamundaFormRef model module.
 * @module model/CamundaFormRef
 * @version 7.20.0
 */
export class CamundaFormRef {
  /**
   * Constructs a new <code>CamundaFormRef</code>.
   * @alias module:model/CamundaFormRef
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CamundaFormRef</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CamundaFormRef} obj Optional instance to populate.
   * @return {module:model/CamundaFormRef} The populated <code>CamundaFormRef</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CamundaFormRef();
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('binding'))
        obj.binding = ApiClient.convertToType(data['binding'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
    }
    return obj;
  }
}

/**
 * The key of the Camunda Form.
 * @member {String} key
 */
CamundaFormRef.prototype.key = undefined;

/**
 * The binding of the Camunda Form. Can be `latest`, `deployment` or `version`.
 * @member {String} binding
 */
CamundaFormRef.prototype.binding = undefined;

/**
 * The specific version of a Camunda Form. This property is only set if `binding` is `version`.
 * @member {Number} version
 */
CamundaFormRef.prototype.version = undefined;

