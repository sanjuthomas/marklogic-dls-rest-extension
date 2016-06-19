/**
 * Created by Sanju Thomas on 6/17/16.
 */

/**
 *
 * This REST extension covers most of the DLS functions listed in https://docs.marklogic.com/dls
 *
 * What is not implemented?
 *
 * 1. dls:retention-rule
 * 2. dls:retention-rule-insert
 * 3. dls:retention-rule-remove
 * 4. dls:retention-rules
 * 5. dls:set-upgrade-status
 * 6. dls:start-upgrade
 * 7. dls:validate-all-documents
 * 8. dls:link-expand
 * 9. dls:link-references
 * 10. dls:node-expand
 * 11. dls:latest-validation-results
 *
 * If you really need one of the above, please drop an email at ml@sanju.org
 */

var methods = {
    "dls:as-of-query": {
        "mandatory": ["$when"],
        "optional": []
    },
    "dls:author-query": {
        "mandatory": ["$author"],
        "optional": []
    },
    "dls:break-checkout" :{
        "mandatory" : ["$uri", "$deep"],
        "optional": []
    },
    "dls:document-add-collections" : {
        "mandatory" : ["$uri", "$collections"],
        "optional": []
    },
    "dls:document-add-permissions" : {
        "mandatory" : ["$uri", "$permissions"],
        "optional": [],
        "parameterValidation" : true
    },
    "dls:document-add-properties" : {
        "mandatory" : ["$uri", "$properties"],
        "optional": []
    },
    "dls:document-checkin" : {
        "mandatory" : ["$uri", "$deep"],
        "optional": []
    },
    "dls:document-checkout" : {
        "mandatory" : ["$uri", "$deep"],
        "optional": []
    },
    "dls:document-checkout-status" : {
        "mandatory" : ["$uri"]
    },
    "dls:document-checkout-update-checkin" : {
        "mandatory" : ["$uri", "$doc", "$annotation", "$retain-history"],
        "optional": []
    },
    "dls:document-delete" : {
        "mandatory" : ["$uri", "$keep-old-versions", "$retain-history "],
        "optional": []
    },
    "dls:document-extract-part" : {
        "mandatory" : ["$new-uri", "$element", "$annotation", "$retain-history"],
        "optional" : []
    },
    "dls:document-get-permissions" : {
        "mandatory" : ["$uri"],
        "optional" : []
    },
    "dls:document-history" : {
        "mandatory" : ["$uri"],
        "optional" : []
    },
    "dls:document-include-query" : {
        "mandatory" : ["$uri"],
        "optional" : []
    },
    "dls:document-insert-and-manage" : {
        "mandatory" : ["$uri", "$deep", "$doc"],
        "optional" : []
    },
    "dls:document-is-managed" : {
        "mandatory" : ["$uri"],
        "optional" : []
    },
    "dls:document-manage" : {
        "mandatory" : ["$uri", "$deep"],
        "optional" : []
    },
    "dls:document-purge" : {
        "mandatory" : ["$uri", "$delete"],
        "optional" : []
    },
    "dls:document-remove-collections" : {
        "mandatory" : ["$uri", "$collections"],
        "optional" : []
    },
    "dls:document-remove-permissions" : {
        "mandatory" : ["$uri", "$permissions"],
        "optional" : [],
        "parameterValidation" : true
    },
    "dls:document-remove-properties" : {
        "mandatory" : ["$uri", "$property-names"],
        "optional" : []
    },
    "dls:document-retention-rules" : {
        "mandatory" : ["$uri"],
        "optional" : []
    },
    "dls:document-set-collections" : {
        "mandatory" : ["$uri", "$collections"],
        "optional" : []
    },
    "dls:document-set-permissions" : {
        "mandatory" : ["$uri", "$permissions"],
        "optional" : [],
        "parameterValidation" : true
    },
    "dls:document-set-properties" : {
        "mandatory" : ["$uri", "$properties"],
        "optional" : []
    },
    "dls:document-set-quality" : {
        "mandatory" : ["$uri", "$quality"],
        "optional" : []
    },
    "dls:document-unmanage" : {
        "mandatory" : ["$uri", "$deep", "$remove-versions"],
        "optional" : []
    },
    "dls:document-update" : {
        "mandatory" : ["$uri", "$doc", "$annotation", "$retain-history"],
        "optional" : []
    },
    "dls:document-version" : {
        "mandatory" : ["$uri", "$version-number"],
        "optional" : []
    },
    "dls:document-version-as-of" : {
        "mandatory" : ["$uri", "$as-of"],
        "optional" : []
    },
    "dls:document-version-delete" : {
        "mandatory" : ["$uri", "$version", "$retain-history"],
        "optional" : []
    },
    "dls:document-version-query" : {
        "mandatory" : ["$version"],
        "optional" : []
    },
    "dls:document-version-uri" : {
        "mandatory" : ["$document-uri", "$version"],
        "optional" : []
    },
    "dls:document-version-uris" : {
        "mandatory" : ["$uri"],
        "optional" : []
    },
    "dls:purge" : {
        "mandatory" : ["$delete", "$retain-history"],
        "optional" : []
    },
    "dls:document-versions-query" : {
        "mandatory" : ["$uri"],
        "optional" : []
    },
    "dls:documents-query" : {
        "mandatory" : [],
        "optional" : []
    }
}

var parameters = {
    "$permissions" : {
        mandatory : ["$role", "$capability"]
    }
}

exports.methods = methods;
exports.parameters = parameters;