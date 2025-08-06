import HeroSection from "../../components/HeroSection";
import EventsSection from "../../components/EventsSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";

export default function Events() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.EVENTS} />

            {/* Upcoming Events Section */}
            <EventsSection />
        </div>
    );
}
