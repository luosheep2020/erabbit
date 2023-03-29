import request from "../utils/request.js";
import {get} from "axios";


export const findAllCategory = () => {
  return request('/home/category/head',get)
}


