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
    return (
      <div className="min-h-[50vh] flex items-center justify-center bg-slate-50 text-slate-500 font-jakarta">
        Article introuvable
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Back Link */}
        <div className="mb-6">
          <a 
            href="/nouvelles-arrivage" 
            className="inline-flex items-center gap-2 text-xs font-bold font-jakarta text-slate-500 hover:text-gold-ink uppercase tracking-wider transition-colors"
          >
            ← RETOUR AUX ARRIVAGES
          </a>
        </div>

        <article className="bg-white p-6 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          {/* Header metadata */}
          <div className="mb-8 border-b border-slate-100 pb-6">
            <span className="section-badge !mb-3">ARRIVAGE OFFICIEL</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-slate-900 leading-tight mb-4">
              {post.title}
            </h1>
            
            {post.date && (
              <div className="flex items-center gap-2 text-xs font-bold font-jakarta text-slate-400 uppercase tracking-wider">
                <span>📅 Publié le {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {post.thumbnail && (
            <div className="relative w-full h-[320px] sm:h-[450px] rounded-2xl overflow-hidden mb-8 bg-slate-100 shadow-md">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content Body */}
          <div className="prose prose-slate prose-lg max-w-none font-sans text-slate-700 leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
