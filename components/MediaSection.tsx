"use client";
import Image from "next/image";
import AnimatedEntrance from "./AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaImages } from "react-icons/fa6";
import Link from "next/link";

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
}

interface MediaSectionProps {
  mediaItems?: MediaItem[];
}

const EmptyState: React.FC = () => {
  return (
    <div className="">
      <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP}>
        <div className="bg-white rounded-lg p-8 text-center border border-slate-200 shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <FaImages className="text-green-600" size={32} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Media Available</h3>
          <p className="text-gray-600 mb-6">
            There are currently no media items available. Please check back later for updates.
          </p>
          <Link href="/" className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors duration-300">
            Return to Homepage
          </Link>
        </div>
      </AnimatedEntrance>
    </div>
  );
};

export default function MediaSection({ mediaItems = [] }: MediaSectionProps) {
  const hasMedia = mediaItems && mediaItems.length > 0;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Media Gallery
          </h2>
        </AnimatedEntrance>
        
        {hasMedia ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <MediaCard 
                key={item.id} 
                item={item} 
                index={index}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}

interface MediaCardProps {
  item: MediaItem;
  index: number;
}

function MediaCard({ item, index }: MediaCardProps) {
  const cardContent = (
    <div className="group cursor-pointer">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <Image
          src={item.src}
          alt={item.alt}
          width={400}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.type === 'video' && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <Image
              src="/assets/gridicons_play.svg"
              alt="Play"
              width={50}
              height={50}
              className="cursor-pointer transition-transform group-hover:scale-110"
            />
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
        {item.title}
      </h3>
    </div>
  );

  return (
    <AnimatedEntrance
      {...ANIMATION_PRESETS.CARD_FADE_UP}
      delay={STAGGER_DELAYS.FAST[index % STAGGER_DELAYS.FAST.length]}
    >
      {cardContent}
    </AnimatedEntrance>
  );
}
