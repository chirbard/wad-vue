const express = require("express");
const { pool } = require("../database");
const authenticateToken = require("../middleware/auth");
const router = express.Router();

// Get all posts
router.get("/", authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(`
            SELECT posts.id, posts.body, posts.date, users.email as author 
            FROM posts 
            JOIN users ON posts.user_id = users.id 
            ORDER BY posts.date DESC
        `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get a single post
router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `
            SELECT posts.id, posts.body, posts.date, users.email as author 
            FROM posts 
            JOIN users ON posts.user_id = users.id 
            WHERE posts.id = $1
        `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Add a post
router.post("/", authenticateToken, async (req, res) => {
  try {
    const { body } = req.body;
    const userId = req.user.id;

    const result = await pool.query(
      "INSERT INTO posts (body, user_id) VALUES ($1, $2) RETURNING *",
      [body, userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update a post
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req.body;

    const result = await pool.query(
      "UPDATE posts SET body = $1 WHERE id = $2 RETURNING *",
      [body, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a post
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete all posts
router.delete("/", authenticateToken, async (req, res) => {
  try {
    await pool.query("DELETE FROM posts");
    res.json({ message: "All posts deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
