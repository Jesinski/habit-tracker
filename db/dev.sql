CREATE TABLE IF NOT EXISTS tasks (
    id          SERIAL PRIMARY KEY,
    name        TEXT,
    category    TEXT,
    time        TIME WITH TIME ZONE,
    completed   INT
)

INSERT INTO tasks (name, category, time, completed)
VALUES ('1st Meal', 'Nutrition', '07:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('2nd Meal', 'Nutrition', '10:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('3rd Meal', 'Nutrition', '12:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('4th Meal', 'Nutrition', '16:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('5th Meal', 'Nutrition', '20:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('GYM', 'Workout', '06:00', 0);
INSERT INTO tasks (name, category, time, completed)
VALUES ('Run 5K', 'Workout', '18:00', 0);
