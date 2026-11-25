import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaPhone } from "react-icons/fa6";

const postsDirectory = path.join(process.cwd(), '_posts/nouvelles_arrivage');

// Only markdown posts (the folder also holds a .gitkeep so the CMS folder exists)
function listPostFiles() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.md'));
}

async function getPosts() {
  const filenames = listPostFiles();

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
    };
  });

  // Newest arrivals first
  return posts.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

// Page component
export default async function NouvellesArrivagePage() {
  const posts = await getPosts();

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="relative h-[280px] sm:h-[340px] bg-slate-950 flex items-center justify-center overflow-hidden mb-12">
        <Image
          src="/product/banner.jpg"
          alt="Nouvelles Arrivage Banner"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="section-badge !mb-3">ACTUALITÉS & ARRIVAGES</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-jakarta text-white tracking-tight">
            NOUVEAUX <span className="headline-accent-on-dark">ARRIVAGES</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Restez informés des derniers lots de bois importés et des nouveautés disponibles dans nos dépôts.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {posts.length === 0 && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-md p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold font-jakarta text-slate-900 mb-3">
              Aucun arrivage publié pour l'instant
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Nos dépôts sont réapprovisionnés régulièrement. Pour connaître le stock disponible
              ou réserver un lot, contactez directement notre équipe commerciale.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-accent text-sm">
                Demander un devis
              </Link>
              <a
                href="tel:0536358535"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 text-slate-900 font-semibold text-sm hover:border-gold-ink hover:text-gold-ink transition-colors"
              >
                <FaPhone className="w-3.5 h-3.5" />
                05 36 35 85 35
              </a>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.slug} 
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <Link href={`/nouvelles-arrivage/${post.slug}`} className="relative block w-full h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
                  {post.date && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold font-jakarta text-slate-900 tracking-wider">
                      {new Date(post.date).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
                    </span>
                  )}
                </Link>

                <div className="p-6">
                  <Link href={`/nouvelles-arrivage/${post.slug}`}>
                    <h3 className="text-xl font-bold font-jakarta text-slate-900 group-hover:text-gold-ink transition-colors duration-300 mb-3">
                      {post.title}
                    </h3>
                  </Link>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link 
                  href={`/nouvelles-arrivage/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-sm font-bold font-jakarta text-gold-ink hover:text-gold-deep transition-colors group/btn pt-3 border-t border-slate-100 w-full"
                >
                  <span>LIRE L'ARTICLE</span>
                  <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
