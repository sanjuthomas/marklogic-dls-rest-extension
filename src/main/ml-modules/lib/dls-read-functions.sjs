/**
 * Created by Sanju Thomas on 6/16/16.
 */

var dls = require("/MarkLogic/dls.xqy");

var asOfQuery = function(params){
    return dls.asOfQuery(params["$when"])
}

var authorQuery = function(params){
    return dls.authorQuery(params["$author"])
}

var documentIncludeQuery = function(params){
    return dls.documentIncludeQuery(params["$uri"])
}

var documentVersionQuery = function(params){
    return dls.documentVersionQuery(params["$version"])
}

var documentVersionsQuery = function(params){
    return dls.documentVersionsQuery(params["$uri"])
}

var documentsQuery = function(params){
    return dls.documentsQuery()
}

var functionMapping = {
    "dls:as-of-query" : asOfQuery,
    "dls:author-query" : authorQuery,
    "dls:document-include-query" : documentIncludeQuery,
    "dls:document-version-query" : documentVersionQuery,
    "dls:document-versions-query" : documentVersionsQuery,
    "dls:documents-query" : documentsQuery
}

exports.functionMapping = functionMapping;
exports.asOfQuery = asOfQuery;
exports.authorQuery = authorQuery;
exports.documentIncludeQuery = documentIncludeQuery;
exports.documentVersionQuery = documentVersionQuery;
exports.documentVersionsQuery = documentVersionsQuery;
exports.documentsQuery = documentsQuery;

