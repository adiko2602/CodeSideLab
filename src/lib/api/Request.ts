import axios from "axios";
import { Response } from "./Response";

function Get<T>(url: string) {
  return axios.get<Response<T>>(url);
}

function Post<T, V>(url: string, body: V) {
  return axios.post<Response<T>>(url, body);
}

function Patch<T, V>(url: string, body: V) {
  return axios.patch<Response<T>>(url, body);
}

function Remove<T>(url: string) {
  return axios.delete<Response<T>>(url);
}

const Requests = {
  Get,
  Post,
  Patch,
  Remove,
};

export default Requests;
