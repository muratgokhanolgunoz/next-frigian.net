/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import BlogDetails from "../../src/components/frontend/pages/blog/BlogDetail";
import { getSelectedBlog } from "../../_services/BlogService";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Blog = ({ blogData }) => {
    const router = useRouter();
    useEffect(() => {
        if (!blogData) {
            router.push("/404");
        }
    }, []);

    if (blogData) {
        return (
            <>
                <BlogDetails blog={blogData} />
            </>
        );
    }
};

export const getServerSideProps = async ({ params, locale }) => {
    const { blogId } = params;
    const responseBlogData = getSelectedBlog(locale, blogId);

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            blogData: (await responseBlogData).data.result,
        },
    };
};

export default Blog;
