-- User Table
CREATE TABLE user (
    userName varchar(20),
    firstName varchar(25),
    lastName varchar(25),
    email varchar(255),
    PRIMARY KEY (userName)
);

-- Details Table
CREATE TABLE details (
    details_ID int,
    process varchar(250),
    ingredients varchar(250),
    uploaded_date DATE,
    PRIMARY KEY (details_ID)
);

-- Receipe Table
CREATE TABLE receipe (
    receipe_ID int,
    name varchar(25),
    calories int,
    details_ID int,
    PRIMARY KEY (receipe_ID),
    FOREIGN KEY (details_ID) REFERENCES details(details_ID)
);

-- Comments Table
CREATE TABLE comments (
    comment_ID int,
    comment_msg varchar(25),
    userName varchar(20),
    receipe_ID int,
    PRIMARY KEY (comment_ID),
    FOREIGN KEY (userName) REFERENCES user(userName),
    FOREIGN KEY (receipe_ID) REFERENCES receipe(receipe_ID)
);

-- Likes Table
CREATE TABLE likes (
    like_ID int,
    userName varchar(20),
    receipe_ID int,
    PRIMARY KEY (like_ID),
    FOREIGN KEY (userName) REFERENCES user(userName),
    FOREIGN KEY (receipe_ID) REFERENCES receipe(receipe_ID)
);

-- View to get details of each receipe
CREATE VIEW RECEIPE_DETAILS AS 
SELECT * FROM receipe NATURAL JOIN details;



