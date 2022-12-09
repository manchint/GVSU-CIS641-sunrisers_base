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


## Non-Functional Requirements

### Availability and Reliability
| ID | Requirement |
| -------------| ---------- |
| NFR1 | The system should have an availability of 99.999%.|
| NFR2 | The system should have a failover server in case of failure.|
| NFR3 | The system shall take database backups every 3 hours to allow recovery.|
| NFR4 | The system shall support a recovery time objective of 3 hours.|
| NFR5 | The system shall provide customer support for solving issues faced by the user while accessing the website.|

### Accessibility
| ID | Requirement |
| -------------| ---------- |
| NFR6 | The system shall be rendered on screen in less than 1 second. |
| NFR7 | The system should retrieve the recipes in less than 2 seconds on screen. |
| NFR8 | The system should persist/update/delete a comment for a recipe in less than 0.5 seconds. |
| NFR9 | The system should persist an uploaded recipe in less than 1 second. |
| NFR10 | The system should update the like count in less than 2 seconds on the like/unlike action. |

### Security
| ID | Requirement |
| -------------| ---------- |
| NFR11 | The system should not allow users to see the personal identifiable information (PII) of other users. |
| NFR12 | The system should not allow non-logged-in users to upload recipes. |
| NFR13 | The system should not allow non-logged-in users to add/update/delete review comments on a recipe. |
| NFR14 | The system should not allow logged-in users to update/delete review comments of other registered users on a recipe. |
| NFR15 | The system shall record unsuccessful user login attempts and audit. |
| NFR16 | The system’s back-end servers shall only be accessible to authenticated administrators. |
| NFR17 | The system shall follow secure coding practices. | 

### Performance
| ID | Requirement |
| -------------| ---------- |
| NFR18 | The system shall handle a maximum number of 20K users at a time.|
| NFR19 | The system shall scale up to 30k users and scale down based on the load on the website.|
| NFR20 | The system should process the login and signup request in less than 2 seconds.|
| NFR21 | The system shall limit the size of the recipe images for performance optimization. |
| NFR22 | The system's database should be able to store a minimum of 30k recipes.|

### Usability
| ID | Requirement |
| -------------| ---------- |
| NFR23 | The system shall be user-friendly and in an easily understandable format or readable format. |
| NFR24 | The system shall consist of a standard visual experience for all users. |
| NFR25 | The system shall provide users with an aesthetic and minimal design experience. |
| NFR26 | The system shall be accessible easily to users of any age group. |
| NFR27 | The system shall be supported by major web browsers. |

# Change Management Plan
The purpose of the change management plan is to help manage the change process and minimize the impact a change can have on the application and the stakeholders involved thus reducing the risk and resistance while improving communication and long-term adoption of the new system or process. This section provides the change management plan for "The Cook Book" system. The main focus is to provide users with training on the system, integrate it into our organization's ecosystem, and continuously monitor the system.

### Why "The Cook Book"?
Cooking not only helps us to understand the world's cultures, customs, and flavors but also helps us learn life skills like eating healthy and budgeting our money. However, with a busy schedule searching for the right recipes of choice based on the ingredients available in the kitchen is a time-consuming job. Hence we came up with the idea to develop "The Cook Book" a modern recipe-sharing website, which aims to provide users with a variety of food recipes from healthy to various gourmet, super quick to fine culinary dishes with the ingredients available to the user.

### Training Strategy:
As our primary aim is to make our application reach Students at GVSU, we came up with a strategy, to begin with, advertising our application over the Television all over the campus and through College radio which gives us better reach with less or no expense. We will also display QR codes in the television advertisements which on scanning takes them to a portal where they can find more details on how to make use of this application. In addition to that, we will also prepare posters that include the QR code of the website and place them all over the campus.

On the website, we would have a demo video for the user to get familiar with the featues of the system.

We will also request the faculty of the GVSU related to Food and Culinary Science to support our application by suggesting it to the students enrolled in the related courses.

### Integrating within GVSU Software:
Since GVSU already has an attractive and robust website, we can easily integrate our "The Cook Book" application with it. Instead of merging it into the GVSU system, we can add our application link as an external like on the GVSU system by keeping our application servers and databases separate.

### Continuous Monitoring and Support:
We will have a maintainace team working on the issues raised and fix the bugs.We will continuously monitor the systems's performance using Grafana. Also, we will be working on new features for continuous improvements of the system based on ongoing trends and user feedback.
