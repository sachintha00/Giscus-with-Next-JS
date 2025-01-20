import Link from 'next/link'
import { Post } from '@/app/types'

interface PostCardProps {
    post: Post
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-2">
                <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                    {post.title}
                </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="text-gray-700">{post.excerpt}</p>
        </div>
    )
}