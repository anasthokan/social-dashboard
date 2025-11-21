import api from "./api";

// send message
export const sendMessage = (data) => api.post("/messages", data);

// get one to one messages
export const getOneToOneMessages = (user1, user2) =>
  api.get(`/messages/one-to-one?user1=${user1}&user2=${user2}`);

// get group messages
export const getGroupMessages = (groupName) =>
  api.get(`/messages/group/${groupName}`);
