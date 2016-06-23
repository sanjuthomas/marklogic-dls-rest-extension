/**
 * Created by Sanju Thomas on 6/16/16.
 */

var configuration = require("/lib/dls-function-conf.sjs");

validateParams = function (methodName, params) {

    var validationResult = {
        "inputValidationResult": true,
        "missingParams": []
    }

    if (undefined == methodName) {
        populateErrorMessage(validationResult, "$dls-function");
    } else {
        //validate if all the mandatory params exist in the request
        var mandatoryArguments = configuration.methods[methodName].mandatory;
        mandatoryArguments.forEach(function (e) {
            var argument = params[e]
            if (undefined === argument) {
                populateErrorMessage(validationResult, e);
            }
        });

        //validate if the params are in correct structure
        if (true === validationResult.inputValidationResult) {
            validateObjectParam(params, validationResult)
        }
    }
    return validationResult;
}


populateErrorMessage = function (validationResult, argument) {
    validationResult.inputValidationResult = "Input validation failed."
    validationResult.missingParams.push(argument);
    validationResult.reason = "Mandatory arguments are missing."
}

validateObjectParam = function (params, validationResult) {
    var permissions = [];
    if (undefined !== params["$permissions"]) {
        permissions = permissions.concat(params["$permissions"]);
        permissions.forEach(function (permission) {
            if (permission["$roleId"] === undefined || permission["$capability"] === undefined) {
                validationResult.missingParams = undefined;
                validationResult.inputValidationResult = "Input validation failed.";
                validationResult.reason = "Permission is not in correct structure.";
                validationResult.paramterName = "$permissions";
                validationResult.sampleInput = { "$permissions": { "$roleId": "dls-admin", "$capability": "update" } };
            }
        });
    }
}

exports.validateParams = validateParams;
