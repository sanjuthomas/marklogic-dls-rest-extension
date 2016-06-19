/**
 * Created by Sanju Thomas on 6/16/16.
 */

var configuration = require("/lib/dls-function-conf.sjs");

validateParams = function(methodName, params){

    var validationResult = {
        "result" : true,
        "missingParams" : []
    }

    if(undefined == methodName){
        populateErrorMessage(validationResult, "dls-function");
    }

    var mandatoryArguments = configuration.methods[methodName].mandatory;
    mandatoryArguments.forEach(function(e){
        var argument = params[e]
        if(undefined === argument){
            populateErrorMessage(validationResult, e);
        }
    });

    return validationResult;
}

populateErrorMessage = function(validationResult, argument){
    validationResult.result = "Input validation failed."
    validationResult.missingParams.push(argument);
    validationResult.errorMessage = "Mandatory arguments are missing."
}

validateObjectParam = function(params){
    params.forEach(function (e) {
        var param = parameters[e];
        if(undefined !== param){

        }
    });
}

exports.validateParams = validateParams;
