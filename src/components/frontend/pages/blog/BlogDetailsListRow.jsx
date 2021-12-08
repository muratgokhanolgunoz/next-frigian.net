/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import style from "../../../../../styles/BlogDetailsListRow.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const BlogDetailsListRow = ({ blog }) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { locale } = router;

    return (
        <>
            <Link href={`/blog/${blog.BLOG_SECTION_ITEMS_ID}`} passHref>
                <a target="_blank" style={{ textDecoration: "none", color: "#000" }}>
                    <Row className={style.blogDetailsListRow}>
                        <Col xs={4}>
                            <img
                                src={blog.BLOG_SECTION_ITEMS_PHOTO}
                                alt={`${blog.BLOG_SECTION_ITEMS_TITLE} - ${t(
                                    "template.HTML_PAGE_TITLE"
                                )}`}
                            />
                        </Col>
                        <Col xs={8}>
                            <div className={style.title}>{blog.BLOG_SECTION_ITEMS_TITLE}</div>
                        </Col>
                    </Row>
                </a>
            </Link>
        </>
    );
};

export default BlogDetailsListRow;