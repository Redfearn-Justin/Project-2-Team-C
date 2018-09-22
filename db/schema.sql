CREATE DATABASE starBlazerDB;

CREATE DATABASE testDB;

-- "starBlazerDB" is just an arbitrarily chosen name for DB --

USE starBlazerDB;

USE testDB;

CREATE TABLE game_log (
    captain_id INTEGER NOT NULL AUTO_INCREMENT,
    captain_name VARCHAR(20) NOT NULL,
    ship_name VARCHAR(50) NOT NULL,
    scrap_amount INTEGER(5) NOT NULL DEFAULT 0,
    crew_hp INTEGER(3) NOT NULL DEFAULT 10,
    proficiency_points INTEGER (3) NOT NULL DEFAULT 0,
    death_condition BOOLEAN DEFAULT false,
    victory_condition BOOLEAN DEFAULT false,

    -- BONUS OBJECTIVES --
    -- ================================================

    -- bottom two only needed if implementing good/bad stats
    -- paragon_points INTEGER(2) NOT NULL,
    -- renegade_points INTEGER(2) NOT NULL,
    -- cumulative_stats INTEGER(3) NOT NULL,
    PRIMARY KEY (captain_id)
);

-- TEST DB
-- ======================================================

CREATE TABLE test_log (
    captain_id INTEGER NOT NULL AUTO_INCREMENT,
    captain_name VARCHAR(20) NOT NULL,
    ship_name VARCHAR(50) NOT NULL,
    scrap_amount INTEGER(5) NOT NULL DEFAULT 0,
    crew_hp INTEGER(3) NOT NULL DEFAULT 10,
    proficiency_points INTEGER (3) NOT NULL DEFAULT 0,
    death_condition BOOLEAN DEFAULT false,
    victory_condition BOOLEAN DEFAULT false,

    -- BONUS OBJECTIVES --
    -- ================================================

    -- bottom two only needed if implementing good/bad stats
    -- paragon_points INTEGER(2) NOT NULL,
    -- renegade_points INTEGER(2) NOT NULL,
    -- cumulative_stats INTEGER(3) NOT NULL,
    PRIMARY KEY (captain_id)
);

-- ICEBOX TABLES BELOW 

-- ========================================================

-- create table for Merchant items (ICEBOX) --

CREATE TABLE merchant_items (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(20) NOT NULL,
    item_category VARCHAR(20) NOT NULL,
    price INTEGER(10) NOT NULL,
    -- may or may not be concerned about quantity --
    item_quantity INTEGER(1) NOT NULL,
    PRIMARY KEY (item_id)
);


-- create table for Riddles (ICEBOX) --

CREATE TABLE riddles (
    riddle_id INTEGER NOT NULL AUTO_INCREMENT,
    riddle VARCHAR(100) NOT NULL,
    -- may or may not need a category --
    -- need to implement riddle answer column? --
    PRIMARY KEY (riddle_id)
);

-- TO DO --

-- BONUS OBJECTIVE

    -- CREATE a SQL function to get the best captain out of all, we do this by:
        -- ADD all these scores to the Cumulative_Stat column
        -- sort that column from highest to lowest
    -- 
--

