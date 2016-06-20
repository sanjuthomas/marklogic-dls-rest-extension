/**
 * Created by Sanju Thomas on 6/16/16.
 */

var dls = require("/MarkLogic/dls.xqy");
var json = require("/MarkLogic/json/json.xqy");

var documentInsertAndManage = function(params){
    dls.documentInsertAndManage(params["$uri"], params["$deep"], params["$doc"]);
    return params["$uri"];
}

var dlsBreakCheckout = function(params){
    dls.dlsBreakCheckout(params["$uri"], params["$deep"]);
    return params["$uri"];
}

var documentAddCollections = function(params){
    dls.documentAddCollections(params["$uri"], params["$collections"])
    return params["$uri"];
}

var documentAddPermissions = function(params){
    var permissions = [];
    var permissionObjects = [];
    var permission = params["$permissions"];
    permissions = permissions.concat(permission);
    permissions.forEach(function(p){
        permissionObjects.push(xdmp.permission(p["$roleId"], p["$capability"]));
    });
    dls.documentAddPermissions(params["$uri"], permissionObjects);
    return params["$uri"];
}

var documentAddProperties = function(params){
    dls.documentAddProperties(params["$uri"], json.transformFromJson(params["$properties"]));
    return params["$uri"];
}

var documentRemoveCollections = function(params){
    dls.documentRemoveCollections(params["$uri"], params["$collections"]);
    return params["$uri"];
}

var functionMapping = {
    "dls:document-insert-and-manage" : documentInsertAndManage,
    "dls:break-checkout" : dlsBreakCheckout,
    "dls:document-add-collections" : documentAddCollections,
    "dls:document-add-permissions" : documentAddPermissions,
    "dls:document-add-properties" : documentAddProperties,
    "dls:document-remove-collections" : documentRemoveCollections
}


exports.dlsBreakCheckout = dlsBreakCheckout;
exports.documentAddCollections = documentAddCollections;
exports.documentInsertAndManage = documentInsertAndManage;
exports.documentAddPermissions = documentAddPermissions;
exports.documentAddProperties = documentAddProperties;
exports.documentRemoveCollections = documentRemoveCollections;
exports.functionMapping = functionMapping;


