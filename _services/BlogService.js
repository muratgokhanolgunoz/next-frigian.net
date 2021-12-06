import axios from "axios";

export const getBlogs = async (language, itemsPerPage = null, page = null) => {
    if (itemsPerPage === null && page === null) {
        return await axios.get(
            process.env.NEXT_PUBLIC_API_URL + "fnetBlog" + "/" + language
        );
    } else {
        return await axios.get(
            process.env.NEXT_PUBLIC_API_URL +
                "fnetBlog" +
                "/" +
                language +
                "/" +
                itemsPerPage +
                "/" +
                page
        );
    }
};

export const getSelectedBlog = (_language, _id) => {
    return axios.get(
        process.env.NEXT_PUBLIC_API_URL +
            "fnetBlog/select/" +
            _language +
            "/" +
            _id
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
