CREATE DATABASE starBlazerDB;

-- "starBlazerDB" is just an arbitrarily chosen name --

USE starBlazerDB;

-- if use sequelize, STOP HERE --

CREATE TABLE game_Log (
    captain_id INTEGER NOT NULL AUTO_INCREMENT,
    captain_name VARCHAR(20) NOT NULL,
    vessel_name VARCHAR(50) NOT NULL,
    scrap_amount INTEGER(10) NOT NULL,
    crew_hp INTEGER(2) NOT NULL,
    proficiency_points INTEGER (3) NOT NULL,
    death_condition BOOLEAN DEFAULT false,
    victory_condition BOOLEAN DEFAULT false,
    -- bottom two only needed if implementing good/bad
    paragon_points INTEGER(2) NOT NULL,
    renegade_points INTEGER(2) NOT NULL,
    PRIMARY KEY (captain_id)
);

-- create table for Merchant items --

CREATE TABLE merchant_items (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(20) NOT NULL,
    item_category VARCHAR(20) NOT NULL,
    price INTEGER(10) NOT NULL,
    -- may or may not be concerned about quantity --
    item_quantity INTEGER(1) NOT NULL,
    PRIMARY KEY (item_id)
);


-- create table for Riddles --

CREATE TABLE riddles (
    riddle_id INTEGER NOT NULL AUTO_INCREMENT,
    riddle VARCHAR(100) NOT NULL,
    -- may or may not need a category --
    -- need to implement riddle answer column? --
    riddle_quantity VARCHAR(20) NOT NULL,
    PRIMARY KEY (riddle_id)
);

-- create table for inventory (ICEBOX) -- 

