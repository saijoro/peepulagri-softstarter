import { $fetch } from "../fetch";
export const loginAPI = async (payload: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await $fetch.post("/users/sign-in", payload);
      return response;
    } catch (err) {
      throw err;
    }
  };
  