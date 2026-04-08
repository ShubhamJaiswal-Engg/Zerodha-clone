const { Signup ,Login, UserData, Me, Logout } = require("../controllers/AuthController");
const { Holdings, Positions, Orders,NewOrder } = require("../controllers/AuthController");
const router = require("express").Router();
const { requireAuth } = require("../middleware/requireAuth");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/me", requireAuth, Me);

router.get("/allHoldings", requireAuth, Holdings);
router.get("/allPositions", requireAuth, Positions);
router.get("/allOrders", requireAuth, Orders);
router.post("/newOrder", requireAuth, NewOrder);
router.get("/api/user/:id", requireAuth, UserData);

module.exports = router;

