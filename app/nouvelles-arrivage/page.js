import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";

// Fetch all posts from the markdown files
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), '_posts/nouvelles_arrivage');
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export async function getPosts() {
  const postsDirectory = path.join(process.cwd(), '_posts/nouvelles_arrivage');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
    };
  });

  return posts;
}

// Page component
export default async function NouvellesArrivagePage() {
  const posts = await getPosts();

  return (
    <div className="relative bg-white">
      <div className="relative h-[300px] mb-8">
        <Image
          src="/product/banner.jpg" // Replace with your banner image URL
          alt="Nouvelles Arrivage Banner"
          fill
          style={{
            objectFit: 'cover',
          }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-white">Nouveaux Arrivages</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <Link href={`/nouvelles-arrivage/${post.slug}`}>
                <div className="relative w-full h-60">
                  <Image
                    className="rounded-t-lg object-cover"
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link href={`/nouvelles-arrivage/${post.slug}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h5>
                </Link>
                
                <Link href={`/nouvelles-arrivage/${post.slug}`} className="inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-hover hover:text-white">
                  En savoir plus
                  <FaArrowRight className="w-4 h-4 ml-2 text-accent" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
