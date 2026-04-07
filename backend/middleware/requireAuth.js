const jwt = require("jsonwebtoken");

/**
 * Verifies the user is authenticated via JWT.
 * Accepts token from:
 *  - Cookie: token
 *  - Header: Authorization: Bearer <token>
 */
module.exports.requireAuth = (req, res, next) => {
  try {
    const cookieToken = req.cookies?.token;
    const authHeader = req.headers.authorization;
    const bearerToken = authHeader?.startsWith("Bearer ")
      ? authHeader.slice("Bearer ".length)
      : undefined;

    const token = cookieToken || bearerToken;
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    if (!decoded?.id) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    req.user = { id: decoded.id };
    return next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
