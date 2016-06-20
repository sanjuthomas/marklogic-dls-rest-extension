/**
 * Created by Sanju Thomas on 6/16/16.
 */

var dls = require("/MarkLogic/dls.xqy");
var json = require("/MarkLogic/json/json.xqy");

var documentInsertAndManage = function(params){
    dls.documentInsertAndManage(params["$uri"], params["$deep"], params["$doc"]);
    return params["$uri"];
}

var breakCheckout = function(params){
    dls.breakCheckout(params["$uri"], params["$deep"]);
    return params["$uri"];
}

var documentAddCollections = function(params){
    dls.documentAddCollections(params["$uri"], params["$collections"])
    return params["$uri"];
}

var documentAddPermissions = function(params){
    dls.documentAddPermissions(params["$uri"], getPermissions(params));
    return params["$uri"];
}

getPermissions = function(params){
    var permissions = [];
    var permissionObjects = [];
    var permission = params["$permissions"];
    permissions = permissions.concat(permission);
    permissions.forEach(function(p){
        permissionObjects.push(xdmp.permission(p["$roleId"], p["$capability"]));
    });
}

var documentRemovePermissions = function(params){
    dls.documentRemovePermissions(params["$uri"], getPermissions(params));
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

var documentCheckin = function(params){
    dls.documentCheckin(params["$uri"], params["$deep"]);
    return params["$uri"];
}

var documentCheckout = function(params){
    dls.documentCheckout(params["$uri"], params["$deep"]);
    return params["$uri"];
}

var documentCheckoutUpdateCheckin = function(params){
    dls.documentCheckoutUpdateCheckin(params["$uri"], params["$doc"], params["$annotation"], params["$retain-history"]);
    return params["$uri"];
}

var documentDelete = function(params){
    dls.documentDelete(params["$uri"], params["$keep-old-versions"], params["$retain-history"]);
    return params["$uri"];
}

var documentManage = function(params){
    dls.documentManage(params["$uri"], params["$deep"]);
    return params["$uri"];
}

var documentUnmanage = function(params){
    dls.documentUnmanage(params["$uri"], params["$deep"], params["$remove-versions"]);
    return params["$uri"];
}

var documentVersionDelete = function(params){
    dls.documentVersionDelete(params["$uri"], params["$version"], params["$retain-history"]);
    return params["$uri"];
}

var documentUpdate = function(params){
    dls.documentUpdate(params["$uri"], params["$doc"], params["$annotation"], params["$retain-history"]);
    return params["$uri"];
}

var documentRemoveProperties = function(params){

}

var functionMapping = {
    "dls:document-insert-and-manage" : documentInsertAndManage,
    "dls:break-checkout" : breakCheckout,
    "dls:document-add-collections" : documentAddCollections,
    "dls:document-add-permissions" : documentAddPermissions,
    "dls:document-add-properties" : documentAddProperties,
    "dls:document-remove-collections" : documentRemoveCollections,
    "dls:document-checkin" : documentCheckin,
    "dls:document-checkout" : documentCheckout,
    "dls:document-checkout-update-checkin" : documentCheckoutUpdateCheckin,
    "dls:document-delete" : documentDelete,
    "dls:document-manage" : documentManage,
    "dls:document-unmanage" : documentUnmanage,
    "dls:document-version-delete" : documentVersionDelete,
    "dls:document-update" : documentUpdate,
    "dls:document-remove-permissions" : documentRemovePermissions,
    "dls:document-remove-properties" : documentRemoveProperties
}

exports.documentRemovePermissions = documentRemovePermissions;
exports.documentAddCollections = documentAddCollections;
exports.documentInsertAndManage = documentInsertAndManage;
exports.documentAddPermissions = documentAddPermissions;
exports.documentAddProperties = documentAddProperties;
exports.documentRemoveCollections = documentRemoveCollections;
exports.documentCheckin = documentCheckin;
exports.documentCheckout = documentCheckout;
exports.breakCheckout = breakCheckout;
exports.documentCheckoutUpdateCheckin = documentCheckoutUpdateCheckin;
exports.documentDelete = documentDelete;
exports.documentManage = documentManage;
exports.documentUnmanage = documentUnmanage;
exports.documentVersionDelete = documentVersionDelete;
exports.documentUpdate = documentUpdate;
exports.documentRemoveProperties = documentRemoveProperties;
exports.functionMapping = functionMapping;


