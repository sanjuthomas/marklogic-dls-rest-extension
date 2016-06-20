/**
 * Created by Sanju Thomas on 6/17/16.
 */

var readFunctions = require("/lib/dls-read-functions.sjs");
var updateFunctions = require("/lib/dls-update-functions.sjs");


invoke = function(methodType, methodName, params){
    if("GET" === methodType){
        var method = readFunctions.functionMapping[methodName];
        return method.call(this, params);
    }else if("PUT" === methodType){
        var method = updateFunctions.functionMapping[methodName];
        return method.call(this, params);
    }
}


exports.invoke = invoke;