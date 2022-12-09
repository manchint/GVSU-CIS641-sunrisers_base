# Overview

The purpose of the Software Requirement Specification is to define assumptions and requirements for the product. The goal is to provide a high level of understanding of the System "The Cook Book", a modern recipe-sharing website, which aims to provide users with a variety of food recipes and be the starting point of development. 

# Software Requirements

This section provides a comprehensive understanding of the system’s underlying features and functionalities i.e what the system can do and the non-functional requirements which gives an insight into the system behavior and ensures the usability and effectiveness of the system. As it provides a high level of understanding of the application it is useful for developers to implement the system, testers to test the functionality, and end users and admins who would be using the application.

## Functional Requirements

### Sign Up
| ID | Requirement |
| -------------| ---------- |
| FR1 | The system shall provide a user, with a signup option that opens a signup form. |
| FR2 | The system shall register the new user when the user fills out the signup form with valid details. |
| FR3 | The system shall validate the user does not use an invalid or existing email address. |
| FR4 | The system shall validate the user a secured password meeting standard secured password criteria. |
| FR5 | The system shall display appropriate validation messages when the user enters invalid data. |
| FR6 | The system shall display a welcome message to the user after successful signup. |
| FR7 | The system shall redirect the new user to the home screen after successful signup. |
| FR8 | The system shall allow the user to cancel the signup. |

### Log In
| ID | Requirement |
| -------------| ---------- |
| FR9 | The system shall allow a user to enter his username and password on the login screen of the website. |
| FR10 | The system shall validate the email input fields and display the appropriate validation message. |
| FR11 | The system shall verify user login data entered on the login screen of the website. |
| FR12 | The system shall display appropriate error messages if a user enters an invalid username or password. |
| FR13 | The system shall allow a user to reset his password by clicking on forgot password. |
| FR14 | The system shall allow the user to provide their registered email for password recovery. |
| FR15 | The system shall redirect the signed-in user to the home screen after successful login. |

### Manage Account
| ID | Requirement |
| -------------| ---------- |
| FR16 | The system shall allow logged-in user to update their personal information except for email. |
| FR17 | The system shall allow the logged-in user to upload a new/change an existing profile picture. |
| FR18 | The system shall allow the logged-in user to change the password. |
| FR19 | The system shall prompt the logged-in user for the existing password along with the new password when changing the password. |
| FR20 | The system shall validate the new password as per the secured password criteria. |
| FR21 | The system shall persist the new updated information in the database for the signed-in user. |

### Search and View Recipe
| ID | Requirement |
| -------------|---------- |
| FR22 | The system shall allow any user to search and view recipe(s). |
| FR23 | The system shall allow a user to search for recipes by name. |
| FR24 | The system shall allow a user to search for recipes based on ingredients. |
| FR25 | The system shall use pagination to fetch the recipe list. |
| FR26 | The system shall allow a user to select a recipe from the search list result. |
| FR27 | The system shall allow a user to view the recipe selected.|

### Upload a Recipe
| ID | Requirement |
| -------------| ---------- | 
| FR28 | The system shall allow only logged-in users to upload recipes. |
| FR29 | The system shall allow a logged-in user to upload one recipe at a time. |
| FR30 | The system shall provide a form to upload the recipe details. |
| FR31 | The system shall allow a logged-in user to attach an image to the recipe being uploaded. |
| FR32 | The system shall validate the uploaded recipe form data and display the appropriate validation message. |
| FR33 | The system shall persist the uploaded recipe in the database after successful validation. |
| FR34 | The system shall close the upload recipe form and redirect the logged-in user to the home screen after upload. |

### Add a Review Comment
| ID | Requirement |
| -------------| ---------- | 
| FR35 | The system shall allow the logged-in user to add one or more review comments on a recipe. |
| FR36 | The system shall persist the comment added in the database. |
| FR37 | The system shall allow the logged-in user to view all review comments on a recipe. |
| FR38 | The system shall allow the logged-in user to edit their review comment. |
| FR39 | The system shall allow the logged-in user to delete their review comment. |
| FR40 | The system shall update/delete the review comment in the database based on the user's action. |

### Like a Recipe
| ID | Requirement |
| -------------| ---------- | 
| FR41 | The system shall display the count of total likes on a given recipe. |
| FR42 | The system shall allow a logged-in user to like a recipe. |
| FR43 | The system shall persist the like action by a logged-in user for a recipe in the database. |
| FR44 | The system shall allow a logged-in user to unlike a recipe. |
| FR45 | The system shall delete the like record for the logged-in user for the recipe in the database. |
| FR46 | The system shall refresh the total like count on the screen when a like or unlike action is performed by the logged-in user. |

### Log Out
| ID | Requirement |
| -------------| ---------- | 
| FR47 | The system shall allow the logged-in user to log out. |
| FR48 | The system shall redirect to the home page after the registered user logs out successfully. |
