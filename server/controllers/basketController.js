const { Op } = require("sequelize");
const { Device, Basket, BasketDevice } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {
  async create(req, res, next) {
    try {
      const { deviceId, basketId } = req.body;

      const basketDevice = await BasketDevice.create({
        deviceId,
        basketId,
      });

      return res.json(basketDevice);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const { basketId } = req.query;

      const basketsDevices = await BasketDevice.findAll({
        where: { basketId },
        include: [
          {
            model: Device,
          },
        ],
      });
      return res.json(basketsDevices);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.query;

      const basketId = await BasketDevice.findOne({ where: { id } });

      if (!basketId) {
        return next(ApiError.badRequest("Товар с таким ID не найден!"));
      }

      await BasketDevice.destroy({
        where: { id },
      });

      return res.json("Удалено");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketController();
