create database app;
create schema tracker;

drop table projects;
create table projects (
    id          SERIAL PRIMARY KEY,
    startDate   DATE NOT NULL,
    endDate     DATE NOT NULL,
    length      INT NOT NULL
);

drop table tasks;
create TABLE tasks (
    id          SERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    category    TEXT NOT NULL,
    datetime    TIMESTAMP WITH TIME ZONE NOT NULL,
    completed   INT NOT NULL DEFAULT 0,
    projectId   INTEGER NOT NULL REFERENCES projects(id)
);
