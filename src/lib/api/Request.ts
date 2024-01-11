import axios, { AxiosResponse } from "axios";
import { Response } from "./Response";

async function Get<ResponseReturnType>(
  url: string
): Promise<AxiosResponse<Response<ResponseReturnType>>> {
  return axios.get<Response<ResponseReturnType>>(url);
}

function Post<BodyType, ResponseReturnType>(
  url: string,
  body: BodyType
): Promise<AxiosResponse<Response<ResponseReturnType>>> {
  return axios.post<Response<ResponseReturnType>>(url, body);
}

async function Patch<BodyType, ResponseReturnType>(
  url: string,
  body: BodyType
): Promise<AxiosResponse<Response<ResponseReturnType>>> {
  return axios.patch<Response<ResponseReturnType>>(url, body);
}

async function Remove<ResponseReturnType>(
  url: string
): Promise<AxiosResponse<Response<ResponseReturnType>>> {
  return axios.delete<Response<ResponseReturnType>>(url);
}

const Requests = {
  Get,
  Post,
  Patch,
  Remove,
};

export default Requests;
