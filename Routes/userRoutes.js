const express = require("express");
const userController = require("../Controller/UserController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id_user", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id_user", userController.updateUser);
router.delete("/:id_user", userController.deleteUser);

module.exports = router;
