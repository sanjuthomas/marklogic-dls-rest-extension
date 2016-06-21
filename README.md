# What is MarkLogic Document Library Service?
The Library Services enable you to create and maintain versions of managed documents in MarkLogic Server. Access to managed documents is controlled using a check-out/check-in model. For more details refer to MarkLogic official documentation here (https://docs.marklogic.com/guide/app-dev/dls).

# What is MarkLogic DLS REST Extension?
You are here because you already know that, as of today, the DLS XQuery APIs are not exposed via REST in MarkLogic. You may use this project as a reference implementation to expose the DLS XQuery functions via REST. This is my personal repository and MarkLogic coporation has nothing to do with this repo.

## Installation and Testing
git clone https://github.com/sanjuthomas/marklogic-dls-rest-extension.git
cd marklogic-dls-rest-extension
gradle mlDeploy

Sample Requests for both read and update functions are available at (https://github.com/sanjuthomas/marklogic-dls-rest-extension/tree/master/src/sample-requests). You may use a standard REST client line Postman to test.

## Contact
Please contact me at ml@sanju.org if you find any issues or looking for clarification.