import axios from "axios";
import {data} from "autoprefixer";


const API = axios.create(
    {baseURL :"http://localhost:9090/api"},
);

export const register = async (data:{username:string;password:string})=>{
    return API.post("/auth/register",data);
}

export const login = async (data:{username:string;password:string})=>{
    return API.post("/auth/login",data);
}
export const getProfile = async (token: string) => {
    return API.get("/user/profile", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};