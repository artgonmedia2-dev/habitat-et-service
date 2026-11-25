import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Luxury Page Header Banner */}
      <div className="relative h-[260px] sm:h-[320px] bg-slate-950 flex items-center justify-center overflow-hidden">
        <Image
          src="/home/hero1.webp"
          alt="Société Banner"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="section-badge !mb-3">NOTRE HISTOIRE & SANG-FAIRE</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-jakarta text-white tracking-tight">
            LA <span className="headline-accent-on-dark">SOCIÉTÉ</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Plus de 17 ans au service de la qualité et de l'innovation dans le domaine du bois au Maroc.
          </p>
        </div>
      </div>

      {/* Cinematic Video Showcase */}
      <section className="py-16 lg:py-24 container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200/80 shadow-2xl bg-slate-900 group">
            <video 
              className="w-full h-auto aspect-video object-cover" 
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="./societe/bois_video.mp4" type="video/mp4"/>
              Votre navigateur ne supporte pas la vidéo.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white pointer-events-none">
              <span className="text-xs font-bold font-jakarta uppercase tracking-wider bg-gold/90 text-slate-900 px-3 py-1 rounded-full">
                PRÉSENTATION VIDÉO
              </span>
              <span className="text-xs text-slate-300">HABITAT & SERVICE SARL</span>
            </div>
          </div>
        </div>
      </section>

      {/* À propos de nous */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-badge">QUI SOMMES-NOUS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-slate-900">
              À PROPOS DE <span className="headline-accent">HABITAT ET SERVICE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Logo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-10 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-md text-center group hover:-translate-y-1 transition-all">
                <Image 
                  src="/home/habitatservice-logo.jpg" 
                  alt="Habitat Service Logo" 
                  width={280} 
                  height={180} 
                  className="mx-auto object-contain" 
                />
                <div className="mt-6 pt-6 border-t border-slate-200 text-xs font-bold font-jakarta text-slate-500 uppercase tracking-widest">
                  Fondée en 2008 • Selouane Nador
                </div>
              </div>
            </div>

            {/* Content Text */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-700 text-lg leading-relaxed font-normal">
                La société <strong className="text-slate-900 font-semibold font-jakarta">Habitat et Service</strong> est une société à responsabilité limitée, créée en 2008. Son objet principal est la commercialisation, l'importation, l'exportation et la vente en gros et en détail de bois et de ses nombreux dérivés.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed font-normal">
                Opérant sur l'ensemble du marché national marocain, l'entreprise se démarque fermement par sa rigueur de sélection, la haute qualité de ses produits importés et son orientation résolument centrée sur le client.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-gold-light/40 border border-gold/20">
                  <div className="text-2xl font-bold font-jakarta text-gold-ink">100%</div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">Satisfaction Client & Suivi</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
                  <div className="text-2xl font-bold font-jakarta text-slate-900">National</div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">Couverture du Territoire</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mot Du Directeur */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl relative overflow-hidden">
            <FaQuoteLeft className="absolute top-8 right-8 text-6xl lg:text-8xl text-gold/10 pointer-events-none" />

            <div className="text-center sm:text-left mb-10">
              <span className="section-badge">MOT DE LA DIRECTION</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-jakarta text-slate-900">
                LE MOT DU <span className="headline-accent">DIRECTEUR</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Director Card */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="relative w-56 h-72 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-100 mb-4 group">
                  <Image 
                    src="/home/direc.jpg" 
                    alt="Directeur Jaouad Fatmi" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold font-jakarta text-slate-900">JAOUAD FATMI</h3>
                  <p className="text-xs font-bold font-jakarta text-gold-ink uppercase tracking-wider mt-1">
                    Directeur
                  </p>
                </div>
              </div>

              {/* Speech Content */}
              <div className="lg:col-span-8 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg text-justify">
                <p>
                  Habitat & Service, qui a plus de 17 ans aujourd'hui, ambitionne de se positionner comme un accompagnateur de l'humain dans un environnement de développement professionnel et personnel en perpétuelle évolution.
                </p>
                <p>
                  Nous avons tous en nous les clés de la réussite ou de l'échec liés à l'entrepreneuriat... Il suffit de choisir les bonnes clés et d'user de la seule liberté que nous ayons : faire un choix.
                </p>
                <p>
                  Habitat & Service fait aujourd'hui le choix d'être proactif sur la toile et s'en remet à vos clics. C'est le choix du partage, le choix de se mettre à votre écoute, d'accueillir vos critiques, d'être en audit constant envers ses clients et ses fournisseurs, le choix d'alimenter les tendances de notre métier et de se remettre constamment en question tout en gardant une ligne de conduite exemplaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;