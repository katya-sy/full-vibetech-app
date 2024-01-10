const uuid = require("uuid");
const path = require("path");
const { Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, typeId, desc } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        typeId,
        img: fileName,
        desc,
      });

      return res.json(device);
    } catch (error) {
      console.log(req.files);
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const { typeId } = req.query;
    let devices;
    if (!typeId) {
      devices = await Device.findAll();
    }
    if (typeId) {
      devices = await Device.findAll({ where: { typeId } });
    }
    return res.json(devices);
  }

  async getOne(req, res) {}
}

module.exports = new DeviceController();
