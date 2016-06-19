/**
 * Created by Sanju Thomas on 6/16/16.
 */
var validator = require("/lib/dls-input-validator.sjs");
var dlsFunctions = require("/lib/dls-functions.sjs");

function put(context, params, input) {

    var inputObject = input.toObject();
    var methodName = inputObject["dls-function"];
    var validationResult = validator.validateParams(methodName, inputObject);
    if(validationResult.result === true){
        return dlsFunctions.invoke("POST", methodName, inputObject);
    }
    return validationResult;
};

function get(context, params) {

    var methodName = params["dls-function"];
    var validationResult = validator.validateParams(methodName, params);
    if(validationResult.result === true){
        return dlsFunctions.invoke("GET", methodName, params);
    }
    return validationResult;
};

exports.GET = get;
exports.PUT = put;

