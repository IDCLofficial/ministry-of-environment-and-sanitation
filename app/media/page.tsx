import HeroSection from "../../components/HeroSection";
import MediaSection from "../../components/MediaSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";

export default function Media() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.MEDIA}>
                {/* Search Bar */}
                <div className="max-w-2xl">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            disabled
                            className="flex-1 px-6 py-4 rounded-l-full text-gray-700 bg-gray-100 cursor-not-allowed opacity-60"
                        />
                        <button 
                            disabled
                            className="bg-gray-400 text-white px-8 py-4 rounded-r-full font-semibold cursor-not-allowed opacity-60"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </HeroSection>

            {/* Media Gallery Section */}
            <MediaSection mediaItems={[]} />
        </div>
    );
}
