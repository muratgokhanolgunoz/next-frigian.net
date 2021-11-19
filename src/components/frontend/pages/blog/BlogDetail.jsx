import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Container, Row, Col, Image } from "react-bootstrap";
import style from "../../../../../styles/BlogDetail.module.scss";
import { useRouter } from "next/router";
import elementsJSON from "../../../../../public/elements/elements.json";
import { useTranslation } from "next-i18next";

let arrayFindElements = [];
let tempObject = {},
    tagOpenIndex = undefined,
    tagCloseIndex = undefined;

const BlogDetails = ({ blog }) => {
    const router = useRouter();
    const { blogId } = router.query;
    const { t } = useTranslation("common");

    useEffect(() => {
        if (blog) {
            parseTextToHMTL();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const parseTextToHMTL = () => {
        arrayFindElements = [];
        elementsJSON.map((e) =>
            findElements(blog.BLOG_SECTION_ITEMS_ARTICLE, e)
        );
        showArticle(
            blog.BLOG_SECTION_ITEMS_ARTICLE,
            sortArray(arrayFindElements)
        );
    };

    const tagIndexOf = (_article, _tag, _index) => {
        return _article.indexOf(_tag, _index);
    };

    const findElements = (_article, _tag, _index = 0) => {
        tagOpenIndex = tagIndexOf(_article, _tag.tagOpen, _index);
        _index = tagOpenIndex;

        if (_tag.tagClose !== null && _index > -1) {
            _index += _tag.tagOpen.length;
            tagCloseIndex = tagIndexOf(_article, _tag.tagClose, _index);
            _index = tagCloseIndex;
        }

        if (_index > -1) {
            tempObject = {
                tag: _tag,
                open: tagOpenIndex,
                close: tagCloseIndex,
            };
            arrayFindElements.push(tempObject);
            tempObject = {};
        }

        if (_article.length >= _index && _index > -1) {
            if (_tag.tagClose !== null) {
                _index += _tag.tagClose.length;
                findElements(_article, _tag, _index);
            } else {
                _index += _tag.tagOpen.length;
                findElements(_article, _tag, _index);
            }
        }
    };

    const sortArray = (_array) => {
        return _array.sort((i, j) => {
            return i.open - j.open;
        });
    };

    const getArticleText = (_article, _start, _end) => {
        let result = "";
        for (let i = _start; i < _end; i++) {
            result += _article[i];
        }
        return result;
    };

    const showArticle = (_article, _elements) => {
        let index = 0;
        let createSpan;
        let createElement;

        let createParagraph = document.createElement("p");

        if (_elements.length > 0) {
            for (let i = 0; i < _elements.length; i++) {
                createSpan = document.createElement("span");
                createSpan.innerHTML = getArticleText(
                    _article,
                    index,
                    _elements[i].open
                );
                createParagraph.append(createSpan);

                if (_elements[i].tag.tagClose !== null) {
                    index =
                        _elements[i].close + _elements[i].tag.tagClose.length;
                } else {
                    index = _elements[i].open + _elements[i].tag.tagOpen.length;
                }

                createSpan = document.createElement("span");
                createElement = document.createElement(
                    _elements[i].tag.tagOpen.substr(
                        1,
                        _elements[i].tag.tagOpen.length - 2
                    )
                );

                if (_elements[i].tag.isContent === true) {
                    createElement.innerHTML = getArticleText(
                        _article,
                        _elements[i].open + _elements[i].tag.tagOpen.length,
                        _elements[i].close
                    );
                }

                createSpan.append(createElement);
                createParagraph.append(createSpan);
            }

            createSpan = document.createElement("span");
            createSpan.innerHTML = getArticleText(
                _article,
                index,
                _article.length
            );
            createParagraph.append(createSpan);
        } else {
            createParagraph.innerHTML = _article;
        }

        document.getElementById("article").append(createParagraph);
    };

    return (
        <div id="blog-details" className={style.blogDetail}>
            <Head>
                <link
                    rel="icon"
                    href={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`}
                    type="image/x-icon"
                />
                <title>{`${blog.BLOG_SECTION_ITEMS_TITLE} - ${t(
                    "template.HTML_PAGE_TITLE"
                )}`}</title>
                <meta property="robots" content="index, follow"></meta>
                <meta
                    name="description"
                    content={blog.BLOG_SECTION_ITEMS_SUMMARY}
                />
                <meta
                    property="og:title"
                    content={`${blog.BLOG_SECTION_ITEMS_TITLE} - ${t(
                        "template.HTML_PAGE_TITLE"
                    )}`}
                />
                <meta name="author" content={blog.BLOG_SECTION_ITEMS_AUTHOR} />
                <meta
                    property="og:url"
                    content={`${process.env.NEXT_PUBLIC_URL}/blog/${router.locale}/${blogId}`}
                />
                <meta property="og:type" content="article" />
                <meta name="keywords" content="" />
                <meta
                    property="og:description"
                    content={blog.BLOG_SECTION_ITEMS_SUMMARY}
                />
                <meta
                    property="og:image"
                    content={blog.BLOG_SECTION_ITEMS_PHOTO}
                />
                <link
                    rel="apple-touch-icon"
                    href={`${process.env.NEXT_PUBLIC_URL}/assets/img/apple-touch-icon.png`}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="utf-8" />
                <meta name="google" content="notranslate" />
            </Head>
            <Container>
                <Row>
                    <Col
                        className={style.modalBlogPreviewBody}
                        lg={{ span: 8, offset: 2 }}
                        md={12}
                    >
                        <Row>
                            <Image
                                className={style.modalBlogPreviewBodyImage}
                                src={blog.BLOG_SECTION_ITEMS_PHOTO}
                                alt={blog.BLOG_SECTION_ITEMS_TITLE}
                                fluid
                            />
                            <Image
                                className={style.modalBlogPreviewBodyThumbnail}
                                src={blog.BLOG_SECTION_ITEMS_THUMBNAIL}
                                alt={`${blog.BLOG_SECTION_ITEMS_TITLE} - ${blog.BLOG_SECTION_ITEMS_AUTHOR}`}
                                fluid
                            />
                        </Row>
                        <Row>
                            <Col md={12}>
                                <span className={style.author}>
                                    <small>
                                        {blog.BLOG_SECTION_ITEMS_DATE !==
                                        undefined
                                            ? blog.BLOG_SECTION_ITEMS_DATE.substr(
                                                  0,
                                                  10
                                              )
                                            : null}{" "}
                                        | {blog.BLOG_SECTION_ITEMS_AUTHOR}
                                    </small>
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <h1>{blog.BLOG_SECTION_ITEMS_TITLE}</h1>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <p id="article"></p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

BlogDetails.proptypes = {
    blog: PropTypes.object.isRequired,
};

export default BlogDetails;
