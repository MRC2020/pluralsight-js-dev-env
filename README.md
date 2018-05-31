# pluralsight-js-dev-env
Pluralsight course on setting up dev env for javascript

use npm start to kick off start script in buildScripts folder.

#### Github basics
git add .   = this adds all changed files to staging area for pushing up to github.  NOTE space before the period .
git commit -m "the message to add to the commit"   = this commits the changes in stage and adds the message for this commit.
git push   = push the commited changes to github.

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

####Tips
* Put all javascript in .js files and not wrapped in script tags. What you loose if you don't:
-Testing functionality
-Lint'ing
-Reuse of code
-Transpiling
-Importing of explicit dependencies

* Orgainize project files based on features and not file types.  This really helps in large projects.
--Example
-Org by file type
/components
/data
/models
/views
----Versus----
-Org by features
/authors
/courses
/clients

* Extract logic into "POJO's".  Even if using React or another processing language, keep and compile all logic in POJO no matter what the underlying language that is consuming the logic.  This makes the logic transportable across newer technologies as they arrive.











