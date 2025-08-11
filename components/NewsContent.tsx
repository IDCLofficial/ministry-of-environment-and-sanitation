"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedEntrance from "./AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaNewspaper } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { contentfulService } from "@/utils/contentful";
import { Category, DisplayNews, NewsPost } from "@/utils/contentful/types";
import { getRelativeTime } from "@/utils";

const NewsContent: React.FC<{category: string}> = ({category}) => {
    const [news, setNews] = useState<DisplayNews[]>([]);
    const [categories, setCategories] = useState<{name: string}[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Transform NewsPost to DisplayNews format
    const transformNewsData = (newsItems: NewsPost[]): DisplayNews[] => {
        return newsItems.map((item: NewsPost) => ({
            id: item.sys.id,
            title: item.fields.title,
            category: item.fields.ministry?.fields.ministryName || "",
            excerpt: item.fields.content.content[0].content[0].value,
            image: (item.fields.featuredImage?.fields.file.url) || "",
            postedDays: item.sys.createdAt,
        }));
    };

    // Transform Category data to simplified format
    const transformCategoryData = (categories: Category[]) => {
        return categories.map((item: Category) => ({
            name: item.fields.category_name,
        }));
    };

    // Fetch news data from Contentful
    const fetchNewsData = async () => {
        try {
            const newsData = await contentfulService.getBlogsByMinistry("1CbXE0xisRTATe9srPctj2");
            const transformedNews = transformNewsData(newsData);
            setNews(transformedNews);
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    // Fetch categories data from Contentful
    const fetchCategoriesData = async () => {
        try {
            const categoriesData = await contentfulService.getCategories();
            const transformedCategories = transformCategoryData(categoriesData);
            setCategories(transformedCategories);
        } catch (error) {
            console.error('Error fetching categories data:', error);
        }
    };

    // Fetch media data (for debugging/future use)
    const fetchMediaData = async () => {
        try {
            const mediaData = await contentfulService.getMediaByMinistryId("1CbXE0xisRTATe9srPctj2");
            console.log({mediaData});
        } catch (error) {
            console.error('Error fetching media data:', error);
        }
    };

    // Main data fetching function
    const fetchAllData = async () => {
        setIsLoading(true);
        try {
            await Promise.all([
                fetchNewsData(),
                fetchCategoriesData(),
                fetchMediaData()
            ]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    if (isLoading) {
        return <LoadingState />;
    }

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
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">CATEGORIES {category}</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href={`/news`} className={
                                        (category.toLowerCase() === "all" || category.toLowerCase() === "")
                                            ? "block px-3 py-2 bg-green-500 text-white rounded text-sm font-medium hover:bg-green-200 transition-colors duration-300"
                                            : "block px-3 py-2 bg-green-100 text-green-800 rounded text-sm font-medium hover:bg-green-200 transition-colors duration-300"
                                    }>
                                        All News
                                    </Link>
                                </li>
                                {!!categories.length && categories.map((categoryItem, index) => (
                                    <li key={index}>
                                        <Link href={`/news?category=${categoryItem.name}`} className={
                                                categoryItem.name.toLowerCase() === category.toLowerCase() 
                                                ? "block px-3 py-2 bg-green-500 text-white rounded text-sm font-medium hover:bg-green-200 transition-colors duration-300"
                                                : "block px-3 py-2 bg-green-100 text-green-800 rounded text-sm font-medium hover:bg-green-200 transition-colors duration-300"
                                            }>
                                            {categoryItem.name}
                                        </Link>
                                    </li>
                                ))}
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
                                            src={article.image.startsWith("//") ? article.image.replace("//", "https://") : article.image}
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
                                            Posted {getRelativeTime(article.postedDays)}
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

const LoadingState: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Loading */}
            <div className="lg:w-1/4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="animate-pulse">
                        <div className="h-10 bg-gray-200 rounded mb-6"></div>
                        <div className="space-y-3">
                            <div className="h-8 bg-gray-200 rounded"></div>
                            <div className="h-8 bg-gray-200 rounded"></div>
                            <div className="h-8 bg-gray-200 rounded"></div>
                            <div className="h-8 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Loading */}
            <div className="lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <div className="animate-pulse">
                                <div className="h-48 bg-gray-200"></div>
                                <div className="p-6">
                                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                                    <div className="h-4 bg-gray-200 rounded w-20 mb-3"></div>
                                    <div className="space-y-2 mb-4">
                                        <div className="h-4 bg-gray-200 rounded"></div>
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    </div>
                                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                                </div>
                            </div>
                        </div>
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
