# SUNRISERS

we are proposing “The Cook Book”, a modern recipe sharing website, which aims to provide users with a variety of food recipes from healthy to various gourmet, super quick to fine culinary dishes with the ingredients available to the user.A user can register on the website and can browse through a variety of recipes with the help of the powerful search feature with sorting and filtering, user can retrieve recipes based on the ingredients provided, user can like a recipe, provide comments and reviews on recipes and upload own recipes and contribute to the system. A user can also filter out the recipes based on the number of likes. 

The website does not just make cooking easier, faster, and convenient but also gives users an opportunity to share their culinary experience with others.


https://user-images.githubusercontent.com/105932811/207743027-08aad6c7-d828-4ab3-b4ba-573f0dfb16e6.mp4
## Essential Links
* [Meetings](https://github.com/manchint/GVSU-CIS641-sunrisers_base/tree/master/meetings)
* [Project Proposal](https://github.com/manchint/GVSU-CIS641-sunrisers_base/blob/master/docs/proposal-template.md)
* [Documents](https://github.com/manchint/GVSU-CIS641-sunrisers_base/tree/master/docs)
* [Software Requirement Specifications](https://github.com/manchint/GVSU-CIS641-sunrisers_base/blob/master/docs/software_requirements_specification_final.md)
* [Project Artifact](https://github.com/manchint/GVSU-CIS641-sunrisers_base/tree/master/artifacts)
* [Test Cases](https://docs.google.com/spreadsheets/d/1-KVzSljaQIR3rlwRSOCFy5D9pP0jH9YzYIdnmdjHJbM/edit#gid=0)


## Team Members and Roles
All team members will be included in every task

* [TEJASWI MANCHINEELLA](https://github.com/manchint/CIS641-HW2-manchineella) Project Manager/ Developer
* [SELINA MOHAPATRA](https://github.com/SelinaMohapatra/CIS641-HW2-Mohapatra) Project Lead / Developer
* [ASHUTOSH KIRAN POLOGI](https://github.com/ashutoast7/CIS641-HW2-pologia) Developer
* [MAHESH THAKKILAPATI](https://github.com/thakkilm/CIS641-HW2-THAKKILAPATI)  Developer

## Prerequisites

* knowlegde of bootstrap
* Experience with any Javascript frameworks
* Should be able to understand Java

## Installation Guide:

### Clone the Project
- Clone the sourcecode from https://github.com/manchint/GVSU-CIS641-sunrisers_base

### Install MySQLServer
- Download MySQL from https://dev.mysql.com/downloads/mysql/
- Extract the file and install the MySQL.
- Go to System Preferences and click on MySQL to check the server is running or not.

### Install MySQLWorkbench
- Download MySQLWorkbench from https://dev.mysql.com/downloads/workbench/
- Extract the file and install the MySQL Workbench
- Click on the MySQLWorkbench to launch.
- Create a database/schema.

### Install Spring Tool Suite(STS)
- Download Spring Tool Suite from https://spring.io/tools3/sts/all. Click on the platform which you are using.
- Extract the file and install the STS.
- Spring Tool Suite 4 Launcher dialog box appears on the screen. Click on the Launch button. You can change the Workspace if you want.
- STS is launched.
- Import the cloned project GVSU-CIS641-sunrisers_base/src/backend as Maven project file->Import->Maven->Existing Maven Projects
- Create a dummy folder for sql backend for logging purpose in the path GVSU-CIS641-sunrisers_base/src/
- Open GVSU-CIS641-sunrisers_base/src/backend/cookbook/src/main/resources/application.properties and replace with the configuration of the database created and filePath with the sql dummy folder path created.
- Right click on Project and Run as Spring Boot App
- To access all the API’s use the following URL: http://localhost:8081/swagger-ui/index.html

### Install Node.js
- Download .pkg installer from https://nodejs.org/en/download/
- Extract the file and install node js
- Import the cloned project GVSU-CIS641-sunrisers_base/src/frontend in vs code.
- Run npm i to install required packages
- Run npm start to start the application
- Application would automatically open in the browser.
