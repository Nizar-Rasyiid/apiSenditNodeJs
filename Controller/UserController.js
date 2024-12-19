const User = require("../Model/user");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id_user);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.createUser = async (req, res) => {
  try {
    const { id_user, nama, alamat, no_hp, email, username } = req.body;
    const newUser = await User.create({ id_user, nama, alamat, no_hp, email, username });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id_user);
    if (user) {
      const { nama, alamat, no_hp, email, username } = req.body;
      await user.update({ nama, alamat, no_hp, email, username });
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id_user);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
