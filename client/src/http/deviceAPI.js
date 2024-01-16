import { $authHost, $host } from ".";
import { SORT } from "../utils/consts";

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const fetchDevices = async (
  typeId,
  page,
  limit = 4,
  search,
  sort = SORT.NAME,
  order = "ASC"
) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      search,
      sort,
      order,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};
