import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3050",
});

// urlden gelen parametre nesnesi bu şekilde
const urlParams = {
  color: "blue,light-gray",
  gender: "men",
  size: "40,41",
  price: "371",
};

// api'a gönderilcek parametre stringi bu şekilde
const url =
  "?color_like=blue&color_like=light-gray&size_like=40&size_like=41&gender=men&price_lte=371";

export const getShoes = (params: string) =>
  api.get(`/shoes${params}`).then((res) => res.data);

//bir ayakkabı al
export const getShoe = (id: string) =>
  api.get(`/shoes/${id}`).then((res) => res.data);
