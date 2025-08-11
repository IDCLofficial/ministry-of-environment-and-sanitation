import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS } from "../../utils/constants/animations";
import NewsContent from "@/components/NewsContent";

interface PageProps {
    searchParams: Promise<{ [key: string]: string }>
}

export default async function News({searchParams}: PageProps) {
    const { category } = await searchParams;

    let categoryString = category;
    if (typeof category !== 'string') {
        categoryString = "";
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.NEWS} />

            {/* Main Content Section */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP}>
                <section className="py-16 bg-gray-50">
                    <div className="px-4 sm:px-6 lg:px-20">

                        <NewsContent category={categoryString}/>
                    </div>
                </section>
            </AnimatedEntrance>
        </div>
    );
}