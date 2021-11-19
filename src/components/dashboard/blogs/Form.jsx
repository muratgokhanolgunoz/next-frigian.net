/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import Context from "../../../utils/context/Context";
import { Col } from "react-bootstrap";
import { showToast } from "../../../core/functions";

let formError = false;

const Form = () => {
    const context = useContext(Context);

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
                showToast("bottom-right", t("template.notification.warnings.FILE_SIZE"), "error");
            }
            if (photo !== "" && photo.size > 5242880) {
                formError = true;
                showToast("bottom-right", t("template.notification.warnings.FILE_SIZE"), "error");
            }
            if (!formError) {
                addBlog(context.dashboardBlogsLanguage, payload)
                    .then((response) => {
                        response.data.result === true
                            ? showToast("bottom-right", "Success", "success")
                            : showToast("bottom-right", "Failed", "error");
                    })
                    .then(() => {
                        clearForm();
                        //listBlogs();
                    })
                    .catch(() => showToast("bottom-right", "Server error", "error"));
            }
        } else {
            if (title === "" || summary === "" || article === "" || author === "") {
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
                updateBlog(context.dashboardBlogsLanguage, payload)
                    .then((response) => {
                        response.data.result === true
                            ? showToast("bottom-right", "Success", "success")
                            : showToast("bottom-right", "Failed", "error");
                    })
                    .then(() => {
                        clearForm();
                        //listBlogs();
                    })
                    .catch(() => showToast("bottom-right", "Server error", "error"));
            }
        }
    };

    const getEditBlog = (_id) => {
        getSelectedBlog(context.dashboardBlogsLanguage, _id)
            .then((response) => {
                setBlogId(response.data.result.BLOG_SECTION_ITEMS_ID);
                setTitle(response.data.result.BLOG_SECTION_ITEMS_TITLE);
                setSummary(response.data.result.BLOG_SECTION_ITEMS_SUMMARY);
                setArticle(response.data.result.BLOG_SECTION_ITEMS_ARTICLE);
                setAuthor(response.data.result.BLOG_SECTION_ITEMS_AUTHOR);
                setLastThumbnail(response.data.result.BLOG_SECTION_ITEMS_THUMBNAIL);
                setLastPhoto(response.data.result.BLOG_SECTION_ITEMS_PHOTO);
            })
            .catch(() => {
                console.warn("API Error: Unable to load blog section");
                showToast("bottom-right", "Server Error", "error");
            });
    };

    return (
        <>
            <Col lg={12}>
                <button onClick={() => clearForm()} style={{ float: "right" }}>
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
                    onChange={(e) => setThumbnail(e.target.files[0])}
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
                    <img src={lastThumbnail} alt="" style={{ maxWidth: "250px" }} />
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
                    <img src={lastPhoto} alt="" style={{ maxWidth: "600px" }} />
                </Col>
            )}
            <br />
            <Col xs={12}>
                <label>
                    <b>
                        Summary
                        <small> [Max Length 350 Characters] : </small>
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
                            [ Supported Tags : br - b - u - em - mark - h1 - h2 - h3 - h4 - h5 - h6
                            - pre - small - big ] :{" "}
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
                <button onClick={() => addOrUpdateBlog(blogId !== "" ? 1 : 0)}>
                    {blogId !== "" ? "Edit" : "Save"}
                </button>
            </Col>
        </>
    );
};
export default Form;
