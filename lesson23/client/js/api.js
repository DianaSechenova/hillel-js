module.exports = class API {
  constructor() {}

  async getResponse() {
    return fetch("http://localhost:5000/todos", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  }

  async postResponse(text) {
    return fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: text,
        checked: false,
      }),
    });
  }
};
// export const getResponse = async () => {
//   return fetch("http://localhost:5000/todos", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });
// };

// export const postResponse = async () => {
//   return fetch("http://localhost:5000/todos", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       text: "test",
//       checked: false,
//     }),
//   });
// };

// export const deleteResponse = async (id) => {
//   return fetch(`http://localhost:5000/todos/${id}`, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   });
// };

// export const putResponse = async (value, id) => {
//   return fetch(`http://localhost:5000/todos/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       checked: false,
//       text: value,
//     }),
//   });
// };
