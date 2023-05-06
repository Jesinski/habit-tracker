create database app;
create schema tracker;

drop table tasks;
create TABLE tasks (
    id          SERIAL PRIMARY KEY,
    name        text not NULL,
    category    text not NULL,
    datetime    timestamp WITH TIME zone not NULL,
    completed   INT not null default 0
);

INSERT INTO tasks (name, category, datetime, completed)
VALUES ('out of bounds min', 'Nutrition', '2023-04-01 10:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('out of bounds max', 'Nutrition', '2023-12-01 13:00 UTC', 0);


INSERT INTO tasks (name, category, datetime, completed)
VALUES ('1st Meal', 'Nutrition', '2023-05-05 10:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('2nd Meal', 'Nutrition', '2023-05-05 13:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('3rd Meal', 'Nutrition', '2023-05-05 15:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('4th Meal', 'Nutrition', '2023-05-05 19:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('5th Meal', 'Nutrition', '2023-05-05 23:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('GYM', 'Workout', '2023-05-05 09:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('Run 5K', 'Workout', '2023-05-05 21:00 UTC', 0);

INSERT INTO tasks (name, category, datetime, completed)
VALUES ('1st Meal', 'Nutrition', '2023-05-06 10:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('2nd Meal', 'Nutrition', '2023-05-06 13:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('3rd Meal', 'Nutrition', '2023-05-06 15:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('4th Meal', 'Nutrition', '2023-05-06 19:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('5th Meal', 'Nutrition', '2023-05-06 23:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('GYM', 'Workout', '2023-05-06 09:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('Run 5K', 'Workout', '2023-05-06 21:00 UTC', 0);

INSERT INTO tasks (name, category, datetime, completed)
VALUES ('1st Meal', 'Nutrition', '2023-05-07 10:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('2nd Meal', 'Nutrition', '2023-05-07 13:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('3rd Meal', 'Nutrition', '2023-05-07 15:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('4th Meal', 'Nutrition', '2023-05-07 19:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('5th Meal', 'Nutrition', '2023-05-07 23:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('GYM', 'Workout', '2023-05-07 09:00 UTC', 0);
INSERT INTO tasks (name, category, datetime, completed)
VALUES ('Run 5K', 'Workout', '2023-05-07 21:00 UTC', 0);
