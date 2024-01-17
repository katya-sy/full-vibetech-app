import { $authHost } from ".";

export const fetchBasketDevices = async (basketId) => {
  const { data } = await $authHost.get("api/basket", {
    params: {
      basketId,
    },
  });
  return data;
};

export const createBasketDevice = async (deviceId, basketId) => {
  const formData = new FormData();
  formData.append("deviceId", deviceId);
  formData.append("basketId", basketId);

  const { data } = await $authHost.post("api/basket", formData);

  return data;
};

export const deleteBasketDevice = async (basketDeviceId) => {
  const { data } = await $authHost.delete("api/basket", {
    params: {
      basketDeviceId,
    },
  });

  return "Удалено";
};
