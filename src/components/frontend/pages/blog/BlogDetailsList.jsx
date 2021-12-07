import React, { useState, useEffect } from "react";
import style from "../../../../../styles/BlogDetailsList.module.scss";
import { showToast } from "../../../../../_core/functions";
import { getBlogs } from "../../../../../_services/BlogService";
import { useRouter } from "next/router";
import BlogDetailsListRow from "./BlogDetailsListRow";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";

const BlogDetailsList = (_) => {
    const router = useRouter();
    const { t } = useTranslation("common");
    const { locale, query } = router;
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        try {
            getBlogs(locale).then(({ data }) => {
                setBlogs(data.result.filter((x) => parseInt(x.BLOG_SECTION_ITEMS_ID) !== parseInt(query.blogId)));
            });
        } catch (error) {
            console.warn(error);
            showToast("bottom-right", error, "error");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query.blogId]);

    return (
        <>
            <Container>
                <Row>
                    <div className={style.blogDetailsListRowHeader}>
                        {t("blog.body.BLOG_SECTION_DETAILS_OTHER_BLOGS_HEADER")}
                    </div>
                    <div className={style.blogDetailsList}>
                        {blogs.map((blog) => (
                            <BlogDetailsListRow
                                key={blog.BLOG_SECTION_ITEMS_ID}
                                blog={blog}
                            />
                        ))}
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default BlogDetailsList;
