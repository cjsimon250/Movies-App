const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// * route request getting movies and their genres
// * from favorites db table
router.get("/", (req, res) => {
  // Add query to get all genres
  res.sendStatus(500);
});

module.exports = router;

// * route request getting favorites from favorites db table
router.get("/:id", (req, res) => {
  const queryText = `SELECT "genres".name AS genre, "movies".title FROM "genres"
  JOIN "movies_genres" ON "genres".id = "movies_genres".genre_id
  JOIN "movies" ON "movies".id = "movies_genres".movie_id
  WHERE "movies".id = :id
  `;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});
