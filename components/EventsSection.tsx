"use client";
import Image from "next/image";
import Link from "next/link";
import AnimatedEntrance from "./AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaCalendarAlt } from "react-icons/fa";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  detailsUrl: string;
}
    
interface EventsSectionProps {
  events?: Event[];
}

const EmptyState: React.FC = () => {
  return (
    <div className="">
      <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP}>
        <div className="bg-white rounded-lg p-8 text-center border border-slate-200 shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <FaCalendarAlt className="text-green-600" size={32} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Upcoming Events</h3>
          <p className="text-gray-600 mb-6">
            There are currently no upcoming events scheduled. Please check back later for updates.
          </p>
          <Link href="/" className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors duration-300">
            Return to Homepage
          </Link>
        </div>
      </AnimatedEntrance>
    </div>
  );
};

export default function EventsSection({ events = [] }: EventsSectionProps) {
  const hasEvents = events && events.length > 0;



  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
            Upcoming Events
          </h2>
        </AnimatedEntrance>
        
        {hasEvents ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard 
                key={event.id} 
                event={event} 
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

interface EventCardProps {
  event: Event;
  index: number;
}

function EventCard({ event, index }: EventCardProps) {
  const cardContent = (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48">
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {event.description}
        </p>
        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            {event.date}
          </div>
          <div className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            {event.location}
          </div>
        </div>
        <Link href={event.detailsUrl}>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium transition-colors cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );

  // Use AnimatedEntrance for first 6 cards
  if (index < 6) {
    return (
      <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[index]}>
        {cardContent}
      </AnimatedEntrance>
    );
  }

  return cardContent;
}
