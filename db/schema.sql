-- DROP DATABASE
DROP DATABASE IF EXISTS techblog_db;

-- CREATE DATABASE
CREATE DATABASE techblog_db;
USE techblog_db;

CREATE TABLE
  users
  (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL
  );

CREATE TABLE
  posts
  (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    post_title VARCHAR(255) NOT NULL,
    post_content TEXT NOT NULL,
    post_user INTEGER NOT NULL,
    CONSTRAINT post_fk0 FOREIGN KEY (post_user) REFERENCES users(id)
  );

CREATE TABLE
  comments
  (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    comment_content TEXT NOT NULL,
    comment_post INTEGER NOT NULL,
    CONSTRAINT comment_fk0 FOREIGN KEY (comment_post) REFERENCES posts(id)
  );