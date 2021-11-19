import React, { useState, useEffect, useContext } from "react";
import { Table as BootstrapTable } from "react-bootstrap";
import TableRow from "./TableRow";
import { getBlogs, getSelectedBlog, deleteBlog } from "../../../utils/services/blogService";
import Context from "../../../utils/context/Context";

const Table = () => {
    const [blogs, setBlogs] = useState([]);
    const context = useContext(Context);

    useEffect(() => {
        listBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.dashboardBlogsLanguage]);

    const listBlogs = () => {
        getBlogs(context.dashboardBlogsLanguage)
            .then((response) => setBlogs(response.data.result))
            .catch(() => console.warn("Error : API ERROR"));
    };

    return (
        <>
            <BootstrapTable striped={true} responsive={true}>
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Share</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blogItem, index) => (
                        <TableRow key={index} blogItem={blogItem} index={index} />
                    ))}
                </tbody>
            </BootstrapTable>
        </>
    );
};
export default Table;
