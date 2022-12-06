# Project Setup Instructions for Backend
## Clone the Project
- Clone the sourcecode from https://github.com/manchint/GVSU-CIS641-sunrisers_base

## Install MySQLServer
- Download MySQL from https://dev.mysql.com/downloads/mysql/
- Extract the file and install the MySQL.
- Go to System Preferences and click on MySQL to check the server is running or not.

## Install MySQLWorkbench
- Download MySQLWorkbench from https://dev.mysql.com/downloads/workbench/
- Extract the file and install the MySQL Workbench
- Click on the MySQLWorkbench to launch.
- Create a database/schema.

## Install Spring Tool Suite(STS)
- Download Spring Tool Suite from https://spring.io/tools3/sts/all. Click on the platform which you are using.
- Extract the file and install the STS.
- Spring Tool Suite 4 Launcher dialog box appears on the screen. Click on the Launch button. You can change the Workspace if you want.
- STS is launched.
- Import the cloned project GVSU-CIS641-sunrisers_base/src/backend as Maven project file->Import->Maven->Existing Maven Projects
- Create a dummy folder for sql backend for logging purpose in the path GVSU-CIS641-sunrisers_base/src/
- Open GVSU-CIS641-sunrisers_base/src/backend/cookbook/src/main/resources/application.properties and replace with the configuration of the database created and filePath with the sql dummy folder path created.
- Right click on Project and Run as Spring Boot App
- To access all the API’s use the following URL: http://localhost:8081/swagger-ui/index.html
