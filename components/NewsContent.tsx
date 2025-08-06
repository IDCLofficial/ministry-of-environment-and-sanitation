import Image from "next/image";
import Link from "next/link";
import AnimatedEntrance from "./AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaNewspaper } from "react-icons/fa6";
import MOCK_NEWS from "@/utils/constants/mock-news";

interface NewsContentProps {
    news?: typeof MOCK_NEWS;
}

const NewsContent: React.FC<NewsContentProps> = ({ news = [] }) => {
    if (news.length === 0) {
        return <EmptyState />;
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.FAST[0]}>
                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="flex-1 border-0 focus:ring-0 text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">CATEGORIES</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/news/category/development" className="block px-3 py-2 bg-green-100 text-green-800 rounded text-sm font-medium hover:bg-green-200 transition-colors duration-300">
                                        Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news/category/marketing" className="block px-3 py-2 text-gray-600 hover:text-green-600 text-sm transition-colors duration-300">
                                        Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news/category/technology" className="block px-3 py-2 text-gray-600 hover:text-green-600 text-sm transition-colors duration-300">
                                        Technology
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news/category/startup" className="block px-3 py-2 text-gray-600 hover:text-green-600 text-sm transition-colors duration-300">
                                        Start-up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimatedEntrance>
            </div>

            <div className="lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {news.map((article, index) => (
                        <AnimatedEntrance
                            key={index}
                            {...ANIMATION_PRESETS.CARD_FADE_UP}
                            delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                        >
                            <Link href={`/news/${article.id}`} className="group block">
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                                    <div className="h-48 relative">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-500 mb-3 transition-colors duration-300">
                                            {article.title}
                                        </h3>
                                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-3">
                                            {article.category}
                                        </span>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                            {article.excerpt}
                                        </p>
                                        <span className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors duration-300">
                                            Posted {article.postedDays} day{article.postedDays !== 1 ? 's' : ''} ago
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedEntrance>
                    ))}
                </div>
            </div>
        </div>
    );
};

const EmptyState: React.FC = () => {
    return (
        <div className="">
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP}>
                <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                    <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                            <FaNewspaper className="text-green-600" size={32} />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No News Articles Found</h3>
                    <p className="text-gray-600 mb-6">
                        There are currently no news articles available. Please check back later for updates.
                    </p>
                    <Link href="/" className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-300">
                        Return to Homepage
                    </Link>
                </div>
            </AnimatedEntrance>
        </div>
    );
};

export default NewsContent;
