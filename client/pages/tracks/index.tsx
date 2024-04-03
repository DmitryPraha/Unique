import Link from 'next/link';
import { FC } from 'react';
import { useFeatures } from '@/hooks/useFeatures'
import { buildServerSideProps } from '@/ssr/buildServerSideProps';
import {BlogPost} from '@/shared/types/blog-post';
import { fetch } from '../../shared/utils/fetch';

type THomeProps = {
    blogPosts: BlogPost[];
};

const Home: FC<THomeProps> = ({ blogPosts }) => {


    return (
        <div>
            <h1>Home</h1>
            {blogPosts.map(({ domain, id }) => (
                <div key={id}>
                    {domain}
                </div>
            ))}
        </div>
    );
};

export const getServerSideProps = buildServerSideProps<THomeProps>(async () => {
    const blogPosts = await fetch('/tracks/');

    return { blogPosts };
});

export default Home;
