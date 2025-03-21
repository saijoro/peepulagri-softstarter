import { $fetch } from "../fetch";
export const getAllUsersAPI = async (queryParams: any) => {
  try {
    const response = await $fetch.get("/users", queryParams);
    return response;
  } catch (err) {
    throw err;
  }
};

export const getUserBasedPondsAPI = async (queryParams: any, usersId: any) => {
  try {
    const response = await $fetch.get(`/users/${usersId}/ponds`, queryParams);
    return response;
  } catch (err) {
    throw err;
  }
};
export const getSinglePondMotorsAPI = async (motorId: Number, startedId: Number) => {
  try {
    const response = await $fetch.get(
      `/starter/${startedId}/motors/${motorId}`
    );
    return response;
  } catch (err) {
    throw err;
  }
};

export const getSingleUserStarterBoxAPI = async (
  queryParams: any,
  id: string
) => {
  try {
    const response = await $fetch.get(`/users/${id}/starters`, queryParams);
    return response;
  } catch (err) {
    throw err;
  }
};

export const getSingleMotorConnectedDeviceAPI = async (
  queryParams: any,
  id: string,
  motor_id: string
) => {
  try {
    const response = await $fetch.get(
      `/starter/${id}/motors/${motor_id}`,
      queryParams
    );
    return response;
  } catch (err) {
    throw err;
  }
};
export const getSingleStraterMotorAPI = async (
  queryParams: any,
  id: string
) => {
  try {
    const response = await $fetch.get(`/starter/${id}/motors`, queryParams);
    return response;
  } catch (err) {
    throw err;
  }
};
