import { $fetch } from "../fetch";
export const getAllPaginatedDeviceData = async ({
  pageIndex,
  pageSize,
  search_string,
}: GetAllPaginatedUsersPropTypes) => {
  try {
    const queryParams = {
      page: pageIndex,
      page_size: pageSize,
      search_string,
    };
    return await $fetch.get("/starter/all", queryParams);
  } catch (err) {
    throw err;
  }
};
export const getSingleDeviceAPI = async (id: string | undefined) => {
  const queryParams = {
    //   metadata: true,
  };
  try {
    return await $fetch.get(`/starter/${id}/motors`, queryParams);
  } catch (err) {
    throw err;
  }
};
export const getSingleMotorAPI = async (
  device_id: string | undefined,
  motor_id: string | undefined
) => {
  const queryParams = {
    //   metadata: true,
  };
  try {
    return await $fetch.get(
      `/starter/${device_id}/motors/${motor_id}`,
      queryParams
    );
  } catch (err) {
    throw err;
  }
};
export const getVoltageGraphAPI = async ({
  pondId,
  device_ipv6,
  motor_ref_id,
  queryParams,
}: {
  pondId: any;
  device_ipv6: any;
  motor_ref_id: any;
  queryParams: any;
}) => {
  console.log(
    pondId,
    device_ipv6,
    motor_ref_id,
    queryParams,
    "ckjdlkjfkdsjfkjdsk"
  );
  try {
    return await $fetch.get(
      `/ponds/${pondId}/devices/${device_ipv6}/motors/${motor_ref_id}/power-voltage-consumption`,
      queryParams
    );
  } catch (err) {
    throw err;
  }
};
