import Link from 'next/link';
import { FC } from 'react';
import { buildServerSideProps } from '@/ssr/buildServerSideProps';
import {BlogPost} from "@/shared/types/blog-post";
import { fetch } from '../../shared/utils/fetch';

type TBlogProps = {
    post: BlogPost;
};

type TBlogQuery = {
    id: string;
};

const Blog: FC<TBlogProps> = ({ post = {} }) => {
    return (
        <div>
            <Link href={'/'}>Home</Link>
            <h1>Blog {post.domain}</h1>
        </div>
    );
};

export const getServerSideProps = buildServerSideProps<TBlogProps, TBlogQuery>(
    async (ctx) => {
        const id = ctx.query.id;

        const post = await fetch(`/tracks/${id}`);

        return { post };
    },
);

export default Blog;
