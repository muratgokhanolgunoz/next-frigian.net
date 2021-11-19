import React from "react";
import { Container, Row } from "react-bootstrap";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
    const sortArray = (_array) => {
        return _array.sort((i, j) => {
            return i.BLOG_SECTION_ITEMS_ID - j.BLOG_SECTION_ITEMS_ID;
        });
    };
    return (
        <div id="blog">
            <div className={`section-padding`}>
                <Container>
                    <Row>
                        {
                            sortArray(blogs).map((item, index) => (
                                <BlogItem
                                    key={item.BLOG_SECTION_ITEMS_ID}
                                    index={blogs.length - (index + 1)}
                                    blog={item}
                                />
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};
export default BlogList;
