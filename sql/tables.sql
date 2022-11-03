DROP TABLE IF EXISTS Streaks;
DROP TABLE IF EXISTS TodoLists;
DROP TABLE IF EXISTS Todos;

CREATE TABLE Streaks(
  streak_id SERIAL PRIMARY KEY,
  title VARCHAR(64) NOT NULL,
  start DATE NOT NULL
);

CREATE Table TodoLists(
  todolist_id SERIAL PRIMARY KEY,
  title VARCHAR(64) NOT NULL
);

CREATE TABLE Todos(
  todo_id SERIAL PRIMARY KEY,
  text VARCHAR(128) NOT NULL,
  done BOOLEAN,
  todolist_id INT NOT NULL REFERENCES TodoLists(todolist_id)
);
