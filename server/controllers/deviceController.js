const uuid = require("uuid");
const path = require("path");
const { Op } = require("sequelize");
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, typeId, desc, info } = req.body;
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

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          DeviceInfo.create({
            title: i.title,
            desc: i.desc,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (error) {
      console.log(req.files);
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { typeId, limit, page, search, sort, order } = req.query;
    page = page || 1;
    limit = limit || 12;
    let offset = page * limit - limit;
    search = search || "";
    let devices;

    if (!typeId && !search) {
      devices = await Device.findAndCountAll({
        limit,
        offset,
        order: [[sort, order]],
      });
    }

    if (!typeId && search) {
      devices = await Device.findAndCountAll({
        limit,
        offset,
        order: [[sort, order]],
        where: { name: { [Op.iRegexp]: search } },
      });
    }

    if (typeId && !search) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        order: [[sort, order]],
        limit,
        offset,
      });
    }

    if (typeId && search) {
      devices = await Device.findAndCountAll({
        where: { typeId, name: { [Op.iRegexp]: search } },
        order: [[sort, order]],
        limit,
        offset,
      });
    }

    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
