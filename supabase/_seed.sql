INSERT INTO public.projects (id, start_date, end_date)
VALUES ('c1e3dae7-e45f-4947-8f57-dfd60f4a272f', '2023-08-29 00:00:00-03:00', '2023-09-25 23:59:59-03:00');

INSERT INTO public.tasks (id, name, category, time, completed, project_id)
VALUES 
  (uuid_generate_v4(), '1st Meal', 'Diet', '2023-09-02 07:00:00-03:00', 1, 'c1e3dae7-e45f-4947-8f57-dfd60f4a272f'),
  (uuid_generate_v4(), '2nd Meal', 'Diet', '2023-09-02 10:00:00-03:00', 1, 'c1e3dae7-e45f-4947-8f57-dfd60f4a272f'),
  (uuid_generate_v4(), '3rd Meal', 'Diet', '2023-09-02 12:00:00-03:00', 1, 'c1e3dae7-e45f-4947-8f57-dfd60f4a272f'),
  (uuid_generate_v4(), '4th Meal', 'Diet', '2023-09-02 16:00:00-03:00', 1, 'c1e3dae7-e45f-4947-8f57-dfd60f4a272f'),
  (uuid_generate_v4(), '5th Meal', 'Diet', '2023-09-02 19:00:00-03:00', 1, 'c1e3dae7-e45f-4947-8f57-dfd60f4a272f'),
  (uuid_generate_v4(), 'GYM', 'Workout', '2023-09-02 06:00:00-03:00', 1, 'c1e3dae7-e45f-4947-8f57-dfd60f4a272f'),
  (uuid_generate_v4(), '3L Water', 'Water', '2023-09-02 18:00:00-03:00', 1, 'c1e3dae7-e45f-4947-8f57-dfd60f4a272f'),
  (uuid_generate_v4(), 'Wake Up 5AM', 'Sleep', '2023-09-02 05:00:00-03:00', 1, 'c1e3dae7-e45f-4947-8f57-dfd60f4a272f'),
  (uuid_generate_v4(), 'Sleep 9PM', 'Sleep', '2023-09-02 21:00:00-03:00', 1, 'c1e3dae7-e45f-4947-8f57-dfd60f4a272f');