import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Row } from "react-bootstrap";
import BlogItem from "./BlogItem";
import { Pagination } from "react-bootstrap";
import { showToast } from "../../../../../_core/functions";
import { getBlogs } from "../../../../../_services/BlogService";

const BlogList = (_) => {
    // Javascript Array Reverse
    // const sortBlogsById = () => {
    //     let tempArray = [];
    //     for (let index = blogs.length; index > 0; index--) {
    //         tempArray.push(blogs[index - 1]);
    //     }
    //     return tempArray;
    // };

    const router = useRouter();
    const { locale } = router;
    const arrayPaginationTemp = [];

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [arrayPagination, setArrayPagination] = useState([]);

    useEffect(() => {
        for (let index = 1; index <= totalPage; index++) {
            arrayPaginationTemp.push(index);
        }
        setArrayPagination(arrayPaginationTemp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalPage]);

    useEffect(() => {
        try {
            getBlogs(locale, 3, currentPage).then((response) => {
                setBlogs(response.data.result);
                setTotalPage(response.data.totalPage);
            });
        } catch (error) {
            console.warn(error);
            showToast("bottom-right", error, "error");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale, currentPage]);

    const handlePaginationClick = (_i) => {
        setCurrentPage(_i);
    };

    return (
        <div id="blog">
            <div className="section-padding">
                <Container>
                    <Row>
                        {blogs.map((item) => (
                            <BlogItem
                                key={item.BLOG_SECTION_ITEMS_ID}
                                blog={item}
                            />
                        ))}
                    </Row>
                    <br />
                    <br />
                    {totalPage > 1 && (
                        <Row>
                            <Pagination
                                size="sm"
                                className="justify-content-center"
                            >
                                <Pagination.First
                                    disabled={currentPage - 1 < 1 && true}
                                    onClick={() => handlePaginationClick(1)}
                                />
                                <Pagination.Prev
                                    disabled={currentPage - 1 < 1 && true}
                                    onClick={() =>
                                        handlePaginationClick(currentPage - 1)
                                    }
                                />
                                {arrayPagination.map((i) => (
                                    <Pagination.Item
                                        key={i}
                                        active={currentPage === i && true}
                                        onClick={() => handlePaginationClick(i)}
                                    >
                                        {i}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next
                                    disabled={
                                        currentPage + 1 > totalPage && true
                                    }
                                    onClick={() =>
                                        handlePaginationClick(currentPage + 1)
                                    }
                                />
                                <Pagination.Last
                                    disabled={
                                        currentPage + 1 > totalPage && true
                                    }
                                    onClick={() =>
                                        handlePaginationClick(totalPage)
                                    }
                                />
                            </Pagination>
                        </Row>
                    )}
                </Container>
            </div>
        </div>
    );
};
export default BlogList;
