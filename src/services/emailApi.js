import api from "./api";

export const sendEmail = (data) => {
  return api.post("/email/send", data);
};
