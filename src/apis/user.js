import { axiosInstance } from "./index";

const userAPI = {
  signup: (id, account, phone, name, password, passwordCheck) =>
    axiosInstance.post("/signup", { id, account, phone, name, password, passwordCheck }),

  signout: () => axiosInstance.delete("/signout"),

  getMyInformation: () => axiosInstance.get("/users"),

  editMyInformation: (phone, currentPassword, newPassword, newPasswordCheck) =>
    axiosInstance.put("/users", {
      phone,
      currentPassword,
      newPassword,
      newPasswordCheck,
    }),

  login: (id, password) => axiosInstance.post("/login", { id, password }),

  logout: () => axiosInstance.post("/logout"),

  editPassword: (id, name, password, passwordCheck) =>
    axiosInstance.put("/password", { id, name, password, passwordCheck }),
};

export default userAPI;
