# Overview

The purpose of the Software Requirement Specification is to define assumptions and requirements for the product. The goal is to provide a high level of understanding of the System "The Cook Book", a modern recipe-sharing website, which aims to provide users with a variety of food recipes and be the starting point of development. This document provides a comprehensive understanding of the system’s underlying features and functionalities i.e what the system can do and the non-functional requirements which gives an insight into the system behavior and ensures the usability and effectiveness of the system. 

# Functional Requirements
<ol type="1">
    <li> Sign Up
        <ol type="1">
            <li>The system shall register the new user when the user fills the sign-up form provided with a valid unique
                email address.</li>
            <li>The system shall validate the data entered by the user while filling the form.</li>
            <li>The system shall display appropriate error messages if user enters invalid data while filling the form.</li>
        </ol>
    </li>
    <li> Log In
        <ol type="1">
            <li>The system shall allow the end user to enter his username and password on the login screen of the website.</li>
            <li>The system shall validate user login data entered on the login screen of the website.</li>
        </ol>
    </li>
    <li> Manage Account
        <ol type="1">
            <li>The system shall allow the registered user to update their personal information.</li>
            <li>The system shall update the updated information of the registered user in the database.</li>
        </ol>
    </li>
    <li> Search Recipe
        <ol type="1">
            <li>The system shall allow the registered user to search for recipes.</li>
            <li>The system shall allow the registered user to add filters on the search.</li>
            <li>The system shall allow the registered user to search for recipes based on the number of likes on recipes.</li>
            <li>The system shall fetch limited data per page.</li>
        </ol>
    </li>
    <li> View Recipe
        <ol type="1">
            <li>The system shall allow the registered user to view the recipes.</li>
        </ol>
    </li>
    <li> Upload a Recipe
        <ol type="1">
            <li>The system shall allow the registered user to upload a recipe.</li>
            <li>The system shall insert the recipe uploaded by the registered user in the database.</li>
        </ol>
    </li>
    <li> Add a Review Comment
        <ol type="1">
            <li>The system shall allow the registered user to add a review comment on a recipe.</li>
            <li>The system shall insert the comment added by the registered user in the database.</li>
            <li>The system shall allow the registered user to view other users review comments on a recipe.</li>
        </ol>
    </li>
    <li> Like a Recipe
        <ol type="1">
            <li>The system shall allow the registered user to hit like on a recipe.</li>
            <li>The system shall insert the like added by the registered user in the database.</li>
            <li>The system shall allow the registered user to view the total number of likes on a recipe.</li>
        </ol>
    </li>
    <li> Log Out
        <ol type="1">
            <li>The system shall allow the registered user to logout.</li>
            <li>The system shall redirect to the login page after the user logs out successfully.</li>
        </ol>
    </li>
</ol>

# Non-Functional Requirements
