/**
 * Created by Sanju Thomas on 6/16/16.
 */

var configuration = require("/lib/dls-function-conf.sjs");

validateParams = function(methodName, params){

    var validationResult = {
        "inputValidationResult" : true,
        "missingParams" : []
    }

    if(undefined == methodName){
        populateErrorMessage(validationResult, "dls-function");
    }

    //validate if all the mandatory params exist in the request
    var mandatoryArguments = configuration.methods[methodName].mandatory;
    mandatoryArguments.forEach(function(e){
        var argument = params[e]
        if(undefined === argument){
            populateErrorMessage(validationResult, e);
        }
    });

    //validate if the params are in correct structure
    if(true === validationResult.inputValidationResult){
        validateObjectParam(methodName, params, validationResult)
    }
    return validationResult;
}


populateErrorMessage = function(validationResult, argument){
    validationResult.inputValidationResult = "Input validation failed."
    validationResult.missingParams.push(argument);
    validationResult.reason = "Mandatory arguments are missing."
}

validateObjectParam = function(methodName, params, validationResult){
    var paramsToValidate = configuration.methods[methodName].paramsToValidate
    if(undefined !== paramsToValidate){
        paramsToValidate.forEach(function(p){
            var paramsValuesToValidate = getParamValuesValidate(params, p);
            paramsValuesToValidate.forEach(function(paramToValidate){
                var parameterObject = configuration.parameters[p];
                var mandatoryElements = parameterObject.mandatory;
                mandatoryElements.forEach(function(a){
                    if(undefined === paramToValidate[a]){
                        validationResult.inputValidationResult = "Input validation failed.";
                        validationResult.reason = "One or more input parameter is not in correct structure.";
                        validationResult.paramterName = p;
                        validationResult.missingElements = mandatoryElements;
                    }
                });
            });
        });
    }
}

getParamValuesValidate = function(params, p){
    var toArray = [];
    var paramToValidate = params[p];
    if(paramToValidate instanceof Array){
        toArray = paramToValidate;
    }else{
        toArray.push(paramToValidate);
    }
    return toArray;
}

exports.validateParams = validateParams;
