const connect = require("./db");


const runDatabaseQueries = async () => {

  const db = await connect();
  const movies = db.collection('movies');
  const users = db.collection('users');
  const comments = db.collection('comments')


  // Run this query, should get top 5 best rated movies on IMDB
  const topMovies = await movies.find({ "imdb.rating": { $gt: 8.0 } })
    .project({ title: 1, year: 1, "imdb.rating": 1 })
    .sort({ "imdb.rating": -1 })
    .limit(5)
    .toArray();

  console.log('Top Rated Movies:', topMovies);

  process.exit(0);

// 1. ** Insert a New Document into the Users Collection **: Practice adding a new user document to the users collection.Include fields name and email.

  const insertUser = await users.insertOne({ name: "Dylan Pomichter", email: "fakeemal@realemail.com" })

// ### Read

// 1. Find all movies directed by Christopher Nolan.

  const readAllNolan = movies.find({ directors: "Christopher Nolan", type: "movie" })

// 2. Find movies that include the genre "Action" and sort(descending) them by year.

  const readAction = movies.find({ genres: "Action", type: "movie" })
  .sort({ year: -1 })

// 3. Find movies with an IMDb rating greater than 8 and return only the title and IMDB information.

  const readRating = movies.find({ "imdb.rating": { $gt: 8 }, type: "movie" }, { title: 1, imdb: 1 })

// 4. Find movies that starred both "Tom Hanks" and "Tim Allen".

  const readHankOrAllen = movies.find({ cast: { $all: ["Tom Hanks", "Tim Allen"] }, type: "movie" })

// 5. Find movies that starred both and only "Tom Hanks" and "Tim Allen".

  const readHankAndAllen = movies.find({ cast: ["Tom Hanks", "Tim Allen"], type: "movie" })

// 6. Find comedy movies that are directed by Steven Spielberg.

  const readComedy = movies.find({ genres: "Comedy", directors: "Steven Spielberg", type: "movie" })

// ### Update

// 1. Add a new field "available_on" with the value "Sflix" to "The Matrix".

  const updateAvailable = movies.updateOne({ title: "The Matrix" }, { $set: { available_on: "Sflix" } })

// 2. Increment the metacritic of "The Matrix" by 1.

const updateInc = movies.updateOne({ title: "The Matrix" }, { $inc: { metacritic: 1 } })

// 3. Add a new genre "Gen Z" to all movies released in the year 1997.

const updateGen = movies.updateMany({ year: 1997, type: "movie" }, { $push: { genres: "Gen Z" } })

// 4. Increase IMDb rating by 1 for all movies with a rating less than 5.

const updateRating = movies.updateMany({ "imdb.rating": { $lt: 5 }, type: "movie" }, { $inc: { "imdb.rating": 1 } })

// ### Delete

// 1. Delete a comment with a specific ID.

  const deleteComment = comments.deleteOne({ _id: ObjectId('5a9427648b0beebeb69579e7') })

// 2. Delete all comments made for "The Matrix".

  const deleteAll = comments.deleteMany({ movie_id: ObjectId('573a139bf29313caabcf3d23') })

// 3. Delete all movies that do not have any genres.

  const deleteGenre = movies.deleteMany({ genres: [], type: "movie" })

// ### Aggregate

// 1. Aggregate movies to count how many were released each year and display from the earliest year to the latest.

  const aggregateCount = movies.aggregate(
    [
      { $match: { type: "movie" } },
      { $group: { _id: "$year", count: { $sum: 1 } } }])
  .sort({ _id: 1 })

// 2. Calculate the average IMDb rating for movies grouped by director and display from highest to lowest.

  const aggregateRating = movies.aggregate(
    [
      { $match: { type: "movie" } },
      { $group: { _id: "$directors", averageRating: { $avg: "$imdb.rating" } } }])
  .sort({ averageRating: -1 })
};


runDatabaseQueries();
