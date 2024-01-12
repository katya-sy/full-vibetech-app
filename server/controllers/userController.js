const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJWT = (id, name, email) => {
  return jwt.sign({ id, name, email }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { name, email, password } = req.body;
    const candidateEmail = await User.findOne({ where: { email } });
    if (candidateEmail) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует!")
      );
    }

    const candidateName = await User.findOne({ where: { name } });
    if (candidateName) {
      return next(
        ApiError.badRequest("Пользователь с таким именем уже существует!")
      );
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ name, email, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJWT(user.id, user.name, user.email);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });
    if (!user) {
      return next(ApiError.internal("Пользователь с таким именем не найден!"));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Неверный пароль!"));
    }
    const token = generateJWT(user.id, user.email);

    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJWT(req.user.id, req.user.name, req.user.email);
    return res.json({ token });
  }
}

module.exports = new UserController();
