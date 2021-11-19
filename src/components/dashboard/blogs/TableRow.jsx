import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../../../utils/context/Context";
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";
import { deleteBlog, getSelectedBlog } from "../../../utils/services/blogService";
import { showToast } from "../../../core/functions";

const TableRow = ({ blogItem, index }) => {
    const context = useContext(Context);

    const deleteSelectedBlog = (_id) => {
        if (confirm("Do you really want to delete your blog post with id " + _id + " ?")) {
            const payload = new FormData();
            payload.append("id", _id);

            deleteBlog(context.dashboardBlogsLanguage, payload)
                .then((response) => {
                    if (response.data.result === true) {
                        showToast("bottom-right", "Success", "success");
                    } else {
                        showToast("bottom-right", "An error occured", "error");
                    }
                })
                .then(() => {
                    clearForm();
                    listBlogs();
                })
                .catch(() => showToast("bottom-right", "Server error", "error"));
        }
    };

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{blogItem.BLOG_SECTION_ITEMS_AUTHOR}</td>
                <td>{blogItem.BLOG_SECTION_ITEMS_TITLE}</td>
                <td>{blogItem.BLOG_SECTION_ITEMS_DATE}</td>
                <td>
                    <a
                        href={`https://mgl.cc/${context.dashboardBlogsLanguage}/blog/${index}`}
                        target="_blank"
                        rel="nopenner noreferrer"
                    >
                        {`https://mgl.cc/${context.dashboardBlogsLanguage}/blog/${index}`}
                    </a>
                </td>
                <td>
                    <a
                        className="text-primary"
                        style={{
                            cursor: "pointer",
                            fontSize: "1.3em",
                            color: "#000",
                        }}
                        onClick={() => deleteSelectedBlog(blogItem.BLOG_SECTION_ITEMS_ID)}
                    >
                        <RiDeleteBinLine />
                    </a>
                </td>
                <td>
                    <a
                        className="text-primary"
                        style={{
                            cursor: "pointer",
                            fontSize: "1.3em",
                            color: "#000",
                        }}
                        onClick={() => getEditBlog(index)}
                    >
                        <RiEditBoxLine />
                    </a>
                </td>
            </tr>
        </>
    );
};

TableRow.propTypes = {
    blogItem: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default TableRow;
