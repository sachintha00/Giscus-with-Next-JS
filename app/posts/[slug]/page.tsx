import { notFound } from 'next/navigation';
import { posts } from '@/app/data/posts';
import Giscus from '@/app/components/Giscus';

export default async function Post(props: {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { slug } = await props.params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <article className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-600 mb-8">{post.date}</p>
                <div className="prose max-w-none">
                    {post.content}
                </div>
            </article>

            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Comments</h2>
                <Giscus />
            </div>
        </div>
    );
}