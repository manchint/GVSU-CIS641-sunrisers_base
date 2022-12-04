-- INSERT INTO USER TABLE
INSERT INTO user VALUES ('toast', 'Ashutosh', 'Pologi', 'pologia@mail.gvsu.edu');
INSERT INTO user VALUES ('ram', 'Ram', 'Ayodhya', 'ayodhra@gvsu.edu');
INSERT INTO user VALUES ('sita', 'sita', 'Ram', 'ramsita@mail.gvsu.edu');
INSERT INTO user VALUES ('laxman', 'laxman', 'Ayodhya', 'ayodhyala@mail.gvsu.edu');
INSERT INTO user VALUES ('Hanuman', 'Hanuman', 'wyomshala', 'wyomshahanu@gvsu.edu');
INSERT INTO user VALUES ('ravan', 'ravan', 'lanka', 'lankarava@mail.gvsu.edu');



-- INSERT INTO DETAILS TABLE
INSERT INTO details VALUES (1, 'Heat oil, then add onions, chilli and fry them till they turn golden brown, and then add tomatoes, while cooking add spices and then add eggs, let them cook', 'Eggs, Onions, tomatoes, chilli, spices', '2022-10-24');
INSERT INTO details VALUES (2, 'Toast the bread on Pan, whisk the eggs in a bowl and pour in the pan on the bread, let it cook on the both sides', 'Eggs, Bread', '2022-02-17');
INSERT INTO details VALUES (3, 'Take 150 ml milk, with overnight soaked oats, bowl the milk with oats for two minutes, add peanut butter, honey, banana and dry fruits', 'OATS, Milk, peanutbutter, honey, banana and dry fruits', '2022-09-12');
INSERT INTO details VALUES (4, 'add onions and fry them and then add salt and then add potato add chili powder', 'Eggs, Onions, potatoes', '2022-11-28');

-- INSERT INTO RECEIPE TABLE
INSERT INTO receipe VALUES(1, 'Egg Fry', 120, 1);
INSERT INTO receipe VALUES(2, 'Oat meal', 70, 3);
INSERT INTO receipe VALUES(3, 'Potato Fry', 420, 4);
INSERT INTO receipe VALUES(4, 'French Omlet', 120, 2);


-- INSERT INTO COMMENTS TABLE
INSERT INTO comments VALUES(1, 'superbb', 'toast', 1);
INSERT INTO comments VALUES(2, 'tasty', 'toast', 1);
INSERT INTO comments VALUES(3, 'yummy', 'sita', 2);
INSERT INTO comments VALUES(4, 'healthy', 'toast', 2);

-- INSERT INTO LIKES TABLE
INSERT INTO likes VALUES(1, 'toast', 1);
INSERT INTO likes VALUES(2, 'sita', 2);
INSERT INTO likes VALUES(3, 'sita', 3);
INSERT INTO likes VALUES(4, 'sita', 4);