/**
 * Created by Sanju Thomas on 6/16/16.
 */

var dls = require("/MarkLogic/dls.xqy");

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
    dls.documentAddPermissions(params["$uri"], params["$permissions"])
}

var functionMapping = {
    "dls:document-insert-and-manage" : documentInsertAndManage,
    "dls:break-checkout" : dlsBreakCheckout,
    "dls:document-add-collections" : documentAddCollections,
    "document-add-permissions" : documentAddPermissions
}


exports.dlsBreakCheckout = dlsBreakCheckout;
exports.documentAddCollections = documentAddCollections;
exports.documentInsertAndManage = documentInsertAndManage;
exports.documentAddPermissions = documentAddPermissions;
exports.functionMapping = functionMapping;


