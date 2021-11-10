CREATE DATABASE IF NOT EXISTS christ;

USE christ;

CREATE TABLE IF NOT EXISTS stuinfo (
  `id` INT(11) PRIMARY KEY,
  `name` VARCHAR(40) NOT NULL,
  `age` INT NOT NULL,
  `gender` ENUM('Male', 'Female', 'Other', 'Do not wish to disclose') NOT NULL,
  `course` VARCHAR(50) NOT NULL,
  `address` TEXT NOT NULL
);