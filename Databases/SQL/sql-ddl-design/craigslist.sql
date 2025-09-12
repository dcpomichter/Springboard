-- The region of the craigslist post (San Francisco, Atlanta, Seattle, etc)
-- Users and preferred region
-- Posts: contains title, text, the user who has posted, the location of the posting, the region of the posting
-- Categories that each post belongs to

CREATE TABLE regions
(
  id SERIAL PRIMARY KEY,
  regon_name TEXT UNIQUE NOT NULL
);

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone_number TEXT
  preferred_region INTEGER REFERENCES regions(id)
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  text TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id),
  location TEXT NOT NULL
  region_id INTEGER REFERENCES regions(id)
);
