import axios from "axios";

export const instance = () => axios.create({baseURL: "https://apiv2.shiprocket.in/v1/external"})