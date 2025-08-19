import Image from "next/image";
import Link from "next/link";
import AnimatedEntrance from "./AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaNewspaper } from "react-icons/fa6";
import { contentfulService } from "@/utils/contentful";
import { Category, NewsPost } from "@/utils/contentful/types";
import { getRelativeTime } from "@/utils";
import Pagination from "./Pagination";

interface DisplayNews {
    id: string;
    title: string;
    category: string;
    excerpt: string;
    image: string;
    postedDays: string;
    slug: string
}




const NewsContent: React.FC<{ category: string, page: string }> = async ({ category, page }) => {
    const ministryId = process.env.NEXT_PUBLIC_MINISTRY_ID;

    if (!ministryId) {
        return <div>Ministry ID not found</div>
    }
    // Transform NewsPost to DisplayNews format
    const transformNewsData = (newsItems: NewsPost[]): DisplayNews[] => {
        return newsItems.map((item: NewsPost) => ({
            id: item.sys.id,
            title: item.fields.title,
            category: item.fields.category?.fields.category_name || "",
            excerpt: item.fields.content.content[0].content[0].value,
            image: (item.fields.featuredImage?.fields.file.url) || "",
            postedDays: item.sys.createdAt,
            slug: item.fields.slug
        }));
    };

    // Transform Category data to simplified format
    const transformCategoryData = (categories: Category[]) => {
        return categories.map((item: Category) => ({
            name: item.fields.category_name,
            id: item.sys.id,
        }));
    };

    // Fetch news data from Contentful
    const fetchNewsData = async (categoryId: string) => {
        try {
            let newsData: NewsPost[] = [];
            if (!categoryId || categoryId.toLowerCase() === "") {
                newsData = await contentfulService.getBlogsByMinistry(ministryId, parseInt(page));
            } else {
                newsData = await contentfulService.getBlogsByCategoryId(categoryId, ministryId, parseInt(page));
            }

            console.log(newsData[0]);

            const transformedNews = transformNewsData(newsData);
            return transformedNews;
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    const fetchNewsCount = async (categoryId: string) => {
        try {
            if (!categoryId || categoryId.toLowerCase() === "") {
                const newsCount = await contentfulService.getBlogCountByMinistry(ministryId);
                return newsCount;
            } else {
                const newsCount = await contentfulService.getBlogCountByCategoryId(categoryId, ministryId);
                return newsCount;
            }
        } catch (error) {
            console.error('Error fetching news count:', error);
            return 0;
        }
    };

    // Fetch categories data from Contentful
    const fetchCategoriesData = async () => {
        try {
            const categoriesData = await contentfulService.getCategories();
            const transformedCategories = transformCategoryData(categoriesData);
            return transformedCategories;
        } catch (error) {
            console.error('Error fetching categories data:', error);
        }
    };

    // Fetch media data (for debugging/future use)
    // const fetchMediaData = async () => {
    //     try {
    //         const mediaData = await contentfulService.getMediaByMinistryId("1CbXE0xisRTATe9srPctj2");
    //         console.log({mediaData});
    //     } catch (error) {
    //         console.error('Error fetching media data:', error);
    //     }
    // };

    const categories = await fetchCategoriesData();
    const news = await fetchNewsData(category);
    const newsCount = await fetchNewsCount(category);

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.FAST[0]}>
                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        {/* <div className="mb-6">
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
                        </div> */}

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">CATEGORIES</h3>
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
                                {!!categories?.length && categories.map((categoryItem) => (
                                    <li key={categoryItem.id}>
                                        <Link href={`/news?category=${categoryItem.id}`} className={
                                            categoryItem.id.toLowerCase() === category.toLowerCase()
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
                {news && news.length === 0 && <EmptyState />}
                {news && news.length > 0 && <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
                    {news.map((article, index) => (
                        <AnimatedEntrance
                            key={index}
                            {...ANIMATION_PRESETS.CARD_FADE_UP}
                            delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                            className="h-full"
                        >
                            <Link href={`/news/${article.slug}`} className="group block h-full">
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                    <div className="h-48 relative">
                                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-2 w-fit absolute top-2 left-2 z-10">
                                            {article.category}
                                        </span>
                                        <Image
                                            src={article.image.startsWith("//") ? article.image.replace("//", "https://") : article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col flex-1">
                                        <h3 className="capitalize font-bold text-gray-900 group-hover:text-blue-500 mb-2 transition-colors duration-300">
                                            {article.title.toLowerCase()}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                            {article.excerpt.slice(0, 150) + "..."}
                                        </p>
                                        <div
                                            className="flex-1"
                                        />
                                        <span className="text-orange-500 hover:text-orange-600 text-xs font-medium transition-colors duration-300">
                                            Posted {getRelativeTime(article.postedDays)}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedEntrance>
                    ))}
                </div>}
                {news && news.length > 0 && <Pagination
                    pageSize={10}
                    totalCount={newsCount}
                    category={category}
                    showFirstLast={false}
                    siblingCount={2}
                    className="mt-5 w-full"
                    currentPage={parseInt(page)}
                    type="news"
                />}
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No News Available</h3>
                    <p className="text-gray-600 mb-6">
                        There are currently no news articles available for this section. New updates and announcements will appear here as they become available.
                    </p>
                    <Link href="/news" className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-300">
                        View All News
                    </Link>
                </div>
            </AnimatedEntrance>
        </div>
    );
};

export default NewsContent;
