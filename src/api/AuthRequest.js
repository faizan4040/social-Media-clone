import axios from "axios"

//Proxy server
const API = axios.create({baseURL: "http://localhost:6000"})

//complet Api function for login
export const login =(FormData)=> API.post ('/auth/login', FormData)
// past localhost:6000/auth/register
export const signUp =(FormData)=> API.post ('/auth/register', FormData)

