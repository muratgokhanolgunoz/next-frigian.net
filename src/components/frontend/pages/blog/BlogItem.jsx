/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { Image, Col } from "react-bootstrap";
import style from "../../../../../styles/BlogItem.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const BlogItem = ({ blog, index }) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { locale } = router;

    return (
        <>
            <Col className={style.blogBox} xl={4} md={6}>
                <Link href={`/${locale}/blog/${index}`}>
                    <a target="_blank">
                        <div className={style.blogBoxItem}>
                            <Image
                                className={style.blogBoxImage}
                                src={blog.BLOG_SECTION_ITEMS_THUMBNAIL}
                                fluid
                            />
                            <span className={style.blogBoxItemAuthor}>
                                <span>
                                    {blog.BLOG_SECTION_ITEMS_DATE.substr(0, 10)}{" "}
                                    |{" "}
                                </span>
                                <span>
                                    <small>
                                        {locale === "tr" ? (
                                            <span>
                                                <b>
                                                    {
                                                        blog.BLOG_SECTION_ITEMS_AUTHOR
                                                    }{" "}
                                                </b>
                                                {t(
                                                    "blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX"
                                                )}
                                            </span>
                                        ) : (
                                            <span>
                                                {t(
                                                    "blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX"
                                                )}{" "}
                                                <b>
                                                    {
                                                        blog.BLOG_SECTION_ITEMS_AUTHOR
                                                    }
                                                </b>
                                            </span>
                                        )}
                                    </small>
                                </span>
                            </span>
                            <h6>{blog.BLOG_SECTION_ITEMS_TITLE}</h6>
                            <p>{blog.BLOG_SECTION_ITEMS_SUMMARY}</p>
                        </div>
                    </a>
                </Link>
            </Col>
        </>
    );
};

BlogItem.propTypes = {
    blog: PropTypes.object.isRequired,
};

export default BlogItem;
