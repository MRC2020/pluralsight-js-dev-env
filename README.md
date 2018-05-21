# pluralsight-js-dev-env
Pluralsight course on setting up dev env for javascript

use npm start to kick off start script in buildScripts folder.

###Using Localtunnel - shares web project on public internet
cmd:  lt
example:  start localtunnel and select the port the project is currently using.  This will return a random url for access.
lt --port 3000
example:  start localtunnel and use named url for access
lt --port 3000 --subdomain mrc2020

####Using babel for tranpiling javascript to newer versions

####Using ESLint for linter.  Linter validates coding styles, standards and typo's.

####Testing
Testing Framework:    Mocha
Assertion Library:    Chai
Helper Library:       JSDOM
Run Tests in:         Node
Test File Placement:  Alongside code files
When to Run Tests:    Upon Saves

####Continuous Integration Servers
This does continuous testing throughout the entire dev life cycle.
In this project we will use Travis CI and Appveyor.

Travis CI = Integrates with github and javascript used for Linux environments.  You use your github account to login to https://travis-ci.org to setup the testing server.


AppVeyor = Continuous integration testing for Windows environments.




