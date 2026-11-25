'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';

// The presentation video weighs ~82 MB: it is only requested once the visitor
// asks for it, instead of autoplaying (and downloading) on every page view.
export default function VideoShowcase({ src, poster, sizeLabel }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200/80 shadow-2xl bg-slate-900 aspect-video">
      {playing ? (
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src={src} type="video/mp4" />
          Votre navigateur ne lit pas cette vidéo.
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full text-left focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold"
          aria-label="Lire la vidéo de présentation"
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/10" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-20 h-20 rounded-full bg-gold text-slate-900 shadow-gold-glow transition-transform duration-300 group-hover:scale-110">
              <FaPlay className="text-2xl ml-1" />
            </span>
          </span>
          <span className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-2 text-white">
            <span className="text-sm font-bold font-jakarta">Lire la vidéo de présentation</span>
            {sizeLabel && <span className="text-xs text-slate-300">{sizeLabel}</span>}
          </span>
        </button>
      )}
    </div>
  );
}
