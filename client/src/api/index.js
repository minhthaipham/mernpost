import axios from "axios";

const url = "https://subenbulenmernpost.herokuapp.com";
export const getPost = () => axios.get(`${url}/posts`);
export const createPost = (data) => axios.post(`${url}/posts`, data);
export const updatePost = (data) => axios.post(`${url}/posts/update`, data);
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`);
