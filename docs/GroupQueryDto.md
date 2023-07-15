# CamundaRestApi.GroupQueryDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Filter by the id of the group. | [optional] 
**idIn** | **[String]** | Filter by a JSON string array of group ids. | [optional] 
**name** | **String** | Filter by the name of the group. | [optional] 
**nameLike** | **String** | Filter by the name that the parameter is a substring of. | [optional] 
**type** | **String** | Filter by the type of the group. | [optional] 
**member** | **String** | Only retrieve groups where the given user id is a member of. | [optional] 
**memberOfTenant** | **String** | Only retrieve groups which are members of the given tenant. | [optional] 
**sorting** | [**[GroupQueryDtoSorting]**](GroupQueryDtoSorting.md) | Apply sorting of the result | [optional] 
