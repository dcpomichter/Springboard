-- All of the teams in the league
-- All of the goals scored by every player for each game
-- All of the players in the league and their corresponding teams
-- All of the referees who have been part of each game
-- All of the matches played between teams
-- All of the start and end dates for season that a league has
-- The standings/rankings of each team in the league (This doesn’t have to be its own table if the data can be captured somehow).

CREATE TABLE teams
(
  id SERIAL PRIMARY KEY,
  team_name TEXT UNIQUE NOT NULL,
  mascot TEXT UNIQUE NOT NULL,
);

CREATE TABLE players
(
  id SERIAL PRIMARY KEY,
  first_name TEXT  NOT NULL,
  last_name TEXT NOT NULL,
  team_id INTEGER REFERENCES teams(id),
);

CREATE TABLE referees
(
  id SERIAL PRIMARY KEY,
  first_name TEXT  NOT NULL,
  last_name TEXT NOT NULL,
);

CREATE TABLE matches
(
  id SERIAL PRIMARY KEY,
  team_one INTEGER REFERENCES teams(id),
  team_two INTEGER REFERENCES teams(id),
  referee INTEGER REFERENCES referees(id),
  winning_team INTEGER REFERENCES teams(id),
  game_date DATE NOT NULL
);

CREATE TABLE analytics
(
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES players(id),
    match_id INTEGER REFERENCES matches(id),
    goals_scored INTEGER NOT NULL
);

CREATE TABLE seasons
(
    id SERIAL PRIMARY KEY,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);
