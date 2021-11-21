import React from "react";
import { Container, Row } from "react-bootstrap";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
    const sortBlogsById = () => {
        let tempArray = [];
        for (let index = blogs.length; index > 0; index--) {
            tempArray.push(blogs[index - 1]);
        }
        return tempArray;
    };

    return (
        <div id="blog">
            <div className="section-padding">
                <Container>
                    <Row>
                        {sortBlogsById().map((item, index) => (
                            <BlogItem
                                key={item.BLOG_SECTION_ITEMS_ID}
                                index={blogs.length - (index + 1)}
                                blog={item}
                            />
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};
export default BlogList;
