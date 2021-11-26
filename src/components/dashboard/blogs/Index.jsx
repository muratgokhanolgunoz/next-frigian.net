/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, ButtonGroup, Table } from "react-bootstrap";
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";
import AuthContext from "../../../../_store/AuthContext";
import {
    addBlog,
    getBlogs,
    getSelectedBlog,
    deleteBlog,
    updateBlog,
} from "../../../../_services/BlogService";
import { showToast } from "../../../../_core/functions";

let formError = false;

const Blog = () => {
    const authContext = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        listBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authContext.dashboardBlogsLanguage]);

    const listBlogs = () => {
        getBlogs(authContext.dashboardBlogsLanguage)
            .then((response) => setBlogs(response.data.result))
            .catch(() => console.warn("Error : API ERROR"));
    };

    const [blogId, setBlogId] = useState("");
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [lastThumbnail, setLastThumbnail] = useState("");
    const [photo, setPhoto] = useState("");
    const [lastPhoto, setLastPhoto] = useState("");
    const [summary, setSummary] = useState("");
    const [article, setArticle] = useState("");
    const [author, setAuthor] = useState("");

    const clearForm = () => {
        setBlogId("");
        setTitle("");
        setThumbnail("");
        setPhoto("");
        setSummary("");
        setArticle("");
        setAuthor("");
        setLastThumbnail("");
        setLastPhoto("");
    };

    const addOrUpdateBlog = (_status = 0) => {
        // _status == 0 => Add, 1 => Edit

        const payload = new FormData();
        payload.append("title", title);
        payload.append("thumbnail", thumbnail);
        payload.append("photo", photo);
        payload.append("summary", summary);
        payload.append("article", article);
        payload.append("author", author);

        if (_status === 0) {
            if (
                title === "" ||
                thumbnail === "" ||
                thumbnail.size > 5242880 ||
                photo === "" ||
                photo.size > 5242880 ||
                summary === "" ||
                article === "" ||
                author === ""
            ) {
                formError = true;
                showToast("bottom-right", "Please fill in all fields", "error");
            }
            if (thumbnail !== "" && thumbnail.size > 5242880) {
                formError = true;
                showToast(
                    "bottom-right",
                    t("template.notification.warnings.FILE_SIZE"),
                    "error"
                );
            }
            if (photo !== "" && photo.size > 5242880) {
                formError = true;
                showToast(
                    "bottom-right",
                    t("template.notification.warnings.FILE_SIZE"),
                    "error"
                );
            }
            if (!formError) {
                console.log(payload);
                addBlog(authContext.dashboardBlogsLanguage, payload)
                    .then((response) => {
                        response.data.result === true
                            ? showToast("bottom-right", "Success", "success")
                            : showToast("bottom-right", "Failed", "error");
                    })
                    .then(() => {
                        clearForm();
                        listBlogs();
                    })
                    .catch(() =>
                        showToast("bottom-right", "Server error", "error")
                    );
            }
        } else {
            if (
                title === "" ||
                summary === "" ||
                article === "" ||
                author === ""
            ) {
                formError = true;
                showToast("bottom-right", "Please fill in all fields", "error");
            }
            if (thumbnail !== "" || photo !== "") {
                if (thumbnail !== "" && thumbnail.size > 5242880) {
                    formError = true;
                    showToast(
                        "bottom-right",
                        t("template.notification.warnings.FILE_SIZE"),
                        "error"
                    );
                }

                if (photo !== "" && photo.size > 5242880) {
                    formError = true;
                    showToast(
                        "bottom-right",
                        t("template.notification.warnings.FILE_SIZE"),
                        "error"
                    );
                }
            }
            if (!formError) {
                payload.append("id", blogId);
                updateBlog(authContext.dashboardBlogsLanguage, payload)
                    .then((response) => {
                        response.data.result === true
                            ? showToast("bottom-right", "Success", "success")
                            : showToast("bottom-right", "Failed", "error");
                    })
                    .then(() => {
                        clearForm();
                        listBlogs();
                    })
                    .catch(() =>
                        showToast("bottom-right", "Server error", "error")
                    );
            }
        }
    };

    const deleteSelectedBlog = (_id) => {
        if (
            confirm(
                "Do you really want to delete your blog post with id " +
                    _id +
                    " ?"
            )
        ) {
            const payload = new FormData();
            payload.append("id", _id);

            deleteBlog(authContext.dashboardBlogsLanguage, payload)
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
                .catch(() =>
                    showToast("bottom-right", "Server error", "error")
                );
        }
    };

    const getEditBlog = (_id) => {
        getSelectedBlog(authContext.dashboardBlogsLanguage, _id)
            .then((response) => {
                setBlogId(response.data.result.BLOG_SECTION_ITEMS_ID);
                setTitle(response.data.result.BLOG_SECTION_ITEMS_TITLE);
                setSummary(response.data.result.BLOG_SECTION_ITEMS_SUMMARY);
                setArticle(response.data.result.BLOG_SECTION_ITEMS_ARTICLE);
                setAuthor(response.data.result.BLOG_SECTION_ITEMS_AUTHOR);
                setLastThumbnail(
                    response.data.result.BLOG_SECTION_ITEMS_THUMBNAIL
                );
                setLastPhoto(response.data.result.BLOG_SECTION_ITEMS_PHOTO);
            })
            .catch(() => {
                console.warn("API Error: Unable to load blog section");
                showToast("bottom-right", "Server Error", "error");
            });
    };

    return (
        <div id="blogs" style={{ padding: "30px" }}>
            <Container>
                <Row>
                    <Col>
                        <h2>Blogs | Frigian</h2>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={6}>
                        <ButtonGroup size="sm">
                            {authContext.dashboardBlogsLanguage === "tr" ? (
                                <>
                                    <button
                                        className="bg-dark text-light"
                                        onClick={() =>
                                            authContext.funcSetDashboardBlogsLanguage(
                                                "tr"
                                            )
                                        }
                                    >
                                        TR
                                    </button>
                                    <button
                                        className="bg-primary text-light"
                                        onClick={() =>
                                            authContext.funcSetDashboardBlogsLanguage(
                                                "en"
                                            )
                                        }
                                    >
                                        EN
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="bg-primary text-light"
                                        onClick={() =>
                                            authContext.funcSetDashboardBlogsLanguage(
                                                "tr"
                                            )
                                        }
                                    >
                                        TR
                                    </button>
                                    <button
                                        className="bg-dark text-light"
                                        onClick={() =>
                                            authContext.funcSetDashboardBlogsLanguage(
                                                "en"
                                            )
                                        }
                                    >
                                        EN
                                    </button>
                                </>
                            )}
                        </ButtonGroup>
                    </Col>
                    <Col xs={6} style={{ textAlign: "right" }}>
                        <h5>
                            Selected Language :{" "}
                            <b>
                                {authContext.dashboardBlogsLanguage
                                    .toString()
                                    .toUpperCase()}
                            </b>
                        </h5>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} sm={12}>
                        <Col lg={12}>
                            <button
                                onClick={() => clearForm()}
                                style={{ float: "right" }}
                            >
                                Clear Form
                            </button>
                        </Col>
                        <br />
                        <br />
                        <Col xs={12}>
                            <label>
                                <b>Title : </b>
                            </label>
                            <input
                                id="input-title"
                                type="text"
                                name="title"
                                value={title}
                                className="form-control"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Col>
                        <br />
                        <Col xs={12}>
                            <label>
                                <b>Thumbnail : </b>
                            </label>
                            <input
                                id="input-upload-thumbnail"
                                type="file"
                                name="thumbnail"
                                accept=".jpg,.jpeg,.png"
                                onChange={(e) =>
                                    setThumbnail(e.target.files[0])
                                }
                                className="form-control"
                            />
                            <label>
                                File Type : <b>png - jpg - jpeg</b>
                            </label>
                            &emsp;
                            <label>
                                Maximum Size : <b>5MB</b>
                            </label>
                        </Col>
                        {lastThumbnail !== "" && (
                            <Col>
                                <img
                                    src={lastThumbnail}
                                    alt=""
                                    style={{ maxWidth: "250px" }}
                                />
                            </Col>
                        )}
                        <br />
                        <Col xs={12}>
                            <label>
                                <b>Photo : </b>
                            </label>
                            <input
                                id="input-upload-photo"
                                type="file"
                                name="photo"
                                accept=".jpg,.jpeg,.png"
                                onChange={(e) => setPhoto(e.target.files[0])}
                                className="form-control"
                            />
                            <label>
                                File Type : <b>png - jpg - jpeg</b>
                            </label>
                            &emsp;
                            <label>
                                Maximum Size : <b>5MB</b>
                            </label>
                        </Col>
                        {lastPhoto !== "" && (
                            <Col>
                                <img
                                    src={lastPhoto}
                                    alt=""
                                    style={{ maxWidth: "600px" }}
                                />
                            </Col>
                        )}
                        <br />
                        <Col xs={12}>
                            <label>
                                <b>
                                    Summary
                                    <small>
                                        {" "}
                                        [Max Length 350 Characters] :{" "}
                                    </small>
                                </b>
                            </label>
                            <textarea
                                id="textarea-summary"
                                name="summary"
                                value={summary}
                                className="form-control"
                                rows="7"
                                maxLength="350"
                                onChange={(e) => setSummary(e.target.value)}
                            ></textarea>
                        </Col>
                        <br />
                        <Col xs={12}>
                            <label>
                                <b>
                                    Article
                                    <small>
                                        {" "}
                                        [ Supported Tags : br - b - u - em -
                                        mark - h1 - h2 - h3 - h4 - h5 - h6 - pre
                                        - small - big ] :{" "}
                                    </small>
                                </b>
                            </label>

                            <textarea
                                id="textarea-article"
                                name="article"
                                value={article}
                                className="form-control"
                                rows="15"
                                onChange={(e) => setArticle(e.target.value)}
                            ></textarea>
                        </Col>
                        <br />
                        <Col xs={12}>
                            <label>
                                <b>Author : </b>
                            </label>
                            <input
                                id="input-author"
                                type="text"
                                name="author"
                                value={author}
                                className="form-control"
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Col>
                        <br />
                        <Col xs={12}>
                            <button
                                onClick={() =>
                                    addOrUpdateBlog(blogId !== "" ? 1 : 0)
                                }
                            >
                                {blogId !== "" ? "Edit" : "Save"}
                            </button>
                        </Col>
                    </Col>
                    <Col lg={8} sm={12}>
                        <Table striped={true} responsive={true}>
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
                                    <>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>
                                                {
                                                    blogItem.BLOG_SECTION_ITEMS_AUTHOR
                                                }
                                            </td>
                                            <td>
                                                {
                                                    blogItem.BLOG_SECTION_ITEMS_TITLE
                                                }
                                            </td>
                                            <td>
                                                {
                                                    blogItem.BLOG_SECTION_ITEMS_DATE
                                                }
                                            </td>
                                            <td>
                                                <a
                                                    href={`${process.env.NEXT_PUBLIC_URL}/${authContext.dashboardBlogsLanguage}/blog/${index}`}
                                                    target="_blank"
                                                    rel="nopenner noreferrer"
                                                >
                                                    {`${process.env.NEXT_PUBLIC_URL}/${authContext.dashboardBlogsLanguage}/blog/${index}`}
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
                                                    onClick={() =>
                                                        deleteSelectedBlog(
                                                            blogItem.BLOG_SECTION_ITEMS_ID
                                                        )
                                                    }
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
                                                    onClick={() =>
                                                        getEditBlog(index)
                                                    }
                                                >
                                                    <RiEditBoxLine />
                                                </a>
                                            </td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Blog;
