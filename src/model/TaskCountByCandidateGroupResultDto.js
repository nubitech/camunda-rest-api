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
 * The TaskCountByCandidateGroupResultDto model module.
 * @module model/TaskCountByCandidateGroupResultDto
 * @version 7.20.0
 */
export class TaskCountByCandidateGroupResultDto {
  /**
   * Constructs a new <code>TaskCountByCandidateGroupResultDto</code>.
   * @alias module:model/TaskCountByCandidateGroupResultDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaskCountByCandidateGroupResultDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskCountByCandidateGroupResultDto} obj Optional instance to populate.
   * @return {module:model/TaskCountByCandidateGroupResultDto} The populated <code>TaskCountByCandidateGroupResultDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaskCountByCandidateGroupResultDto();
      if (data.hasOwnProperty('groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], 'String');
      if (data.hasOwnProperty('taskCount'))
        obj.taskCount = ApiClient.convertToType(data['taskCount'], 'Number');
    }
    return obj;
  }
}

/**
 * The name of the candidate group. If there are tasks without a group name, the value will be `null`
 * @member {String} groupName
 */
TaskCountByCandidateGroupResultDto.prototype.groupName = undefined;

/**
 * The number of tasks which have the group name as candidate group.
 * @member {Number} taskCount
 */
TaskCountByCandidateGroupResultDto.prototype.taskCount = undefined;

