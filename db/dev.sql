drop table tasks;

create database app;
create schema tracker;
create TABLE tasks (
    id          SERIAL PRIMARY KEY,
    name        text not NULL,
    category    text not NULL,
    time        TIME WITH TIME zone not NULL,
    completed   INT not null default 0
);

INSERT INTO tasks (name, category, time, completed)
VALUES ('1st Meal', 'Nutrition', '10:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('2nd Meal', 'Nutrition', '13:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('3rd Meal', 'Nutrition', '15:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('4th Meal', 'Nutrition', '19:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('5th Meal', 'Nutrition', '23:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('GYM', 'Workout', '09:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('Run 5K', 'Workout', '21:00', 0);
