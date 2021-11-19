import axios from "axios";

export const getBlogs = (_language) => {
    return axios.get(process.env.NEXT_PUBLIC_API_URL + "fnetBlog/" + _language);
};

export const getSelectedBlog = (_language, _id) => {
    return axios.get(
        process.env.NEXT_PUBLIC_API_URL + "fnetBlog/" + _language + "/" + _id
    );
};

export const addBlog = (_language, _data) => {
    return axios.post(
        process.env.NEXT_PUBLIC_API_URL + "fnetBlog/add/" + _language,
        _data
    );
};

export const deleteBlog = (_language, _data) => {
    return axios.post(
        process.env.NEXT_PUBLIC_API_URL + "fnetBlog/delete/" + _language,
        _data
    );
};

export const updateBlog = (_language, _data) => {
    return axios.post(
        process.env.NEXT_PUBLIC_API_URL + "fnetBlog/update/" + _language,
        _data
    );
};
