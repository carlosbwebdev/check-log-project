const jwt = require('jsonwebtoken');
const User = require('../schemas/userSchema');

exports.createUser = async (req, res) => {
  try {
    await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({
      status: 'success',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `Duplicate username: ${req.body.username}`,
    });
  }
};

exports.findUser = async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    // console.log(user);
    const token = jwt.sign(
      {
        username: user.username,
        id: user.id,
      },
      process.env.JWT_SECRET
    );

    res.json({
      status: 'success',
      id: user.id,
      username: user.username,
      user: true,
      admin: user.admin,
      token,
    });
  } else {
    res.json({
      status: 'fail - user not found',
      user: false,
    });
  }
};

exports.findUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user && user.id.length === 24) {
    res.send(user);
  } else {
    res.status(500).send({ message: 'Invalid id' });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();

  if (users) {
    res.send(users);
  } else {
    res.status(500).send({ message: 'No users found' });
  }
};
