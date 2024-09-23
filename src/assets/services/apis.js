import axios from "axios";

export const login = async (email, password) => {
  console.log("servcicesss", email, password);
  try {
    const response = await axios.post("http://localhost:3000/api/login", {
      email,
      password,
    });
    console.log(response.data);
    console.log(response.status);
    return response;
  } catch (error) {
    console.error(error);
    return error.response.data;
  }
};
