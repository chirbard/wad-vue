const jwt = require("jsonwebtoken");

// This will be always called before showing protected routes (like routes in posts.js)
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.JWT_SECRET || "your_jwt_secret",
    (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
};

module.exports = authenticateToken;
