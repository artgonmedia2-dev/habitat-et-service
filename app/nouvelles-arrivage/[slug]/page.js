import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

// Fetch a single post based on the slug
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), '_posts/nouvelles_arrivage');
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export async function getPost(slug) {
  const postsDirectory = path.join(process.cwd(), '_posts/nouvelles_arrivage');
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    ...data,
    content,
  };
}

// Page component
export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="prose prose-lg mx-auto relative max-w-3xl">
      
      {post.thumbnail && (
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={800}
          height={450} 
          layout="responsive"
          className='my-4 rounded-md'
        />
      )}
      {post.date && (
      
          <span className='block text-gray-500 text-sm underline text-right mt-2'>
            {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
      )}
      <h1>{post.title}</h1>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
