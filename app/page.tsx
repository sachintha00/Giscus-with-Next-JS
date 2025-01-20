import PostCard from '@/app/components/PostCard'
import { posts } from '@/app/data/posts'

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}