import axios from "axios";

let token = localStorage.getItem("token")

export default axios.create({
  baseURL: "https://http://192.168.1.14/",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Token " + token
  }
});