const express = require("express");
const router = express.Router();

// const userRoutes = require("./userRoutes");
const inventoryRoutes = require("./inventoryRoutes");

// router.use("/users", usersRoutes);
router.use("/inventory", inventoryRoutes);


module.exports = router;