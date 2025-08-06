import AnimatedEntrance from "@/components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "@/utils/constants/animations";
import Image from "next/image";

export default function LatestNews() {
    return (
        <section className="py-8 sm:py-12 md:py-16">
            <div className="px-4 sm:px-6 lg:px-20">
                <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                        Latest News
                    </h2>
                </AnimatedEntrance>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {[1, 2, 3, 4].map((item, index) => (
                        <AnimatedEntrance key={item} {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[index]}>
                            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xl shadow-black/2 hover:shadow-black/5 hover:-translate-y-1 cursor-pointer group active:scale-[0.98] transition-all duration-300">
                                <div className="min-w-full h-36 sm:h-40 md:h-48">
                                    <Image
                                        src="/assets/humanitarian-news.png"
                                        alt="Humanitarian affairs news image"
                                        width={300}
                                        height={200}
                                        className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-3 sm:p-4">
                                    <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-900 mb-1 sm:mb-2 group-hover:text-green-500 leading-tight transition-colors duration-300">
                                        Imo Govt Launches Statewide Social Relief Program for Vulnerable Households
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-3 sm:line-clamp-4 leading-relaxed">
                                        Hon. Chief Kenneth Okafor today flagged off a relief distribution exercise targeting over 10,000 vulnerable households across all LGAs as part of the Imo CARES initiative.
                                    </p>
                                    <button className="text-green-500 text-xs font-medium hover:text-green-600 transition-colors duration-300">Posted 1 day ago</button>
                                </div>
                            </article>
                        </AnimatedEntrance>
                    ))}
                </div>
            </div>
        </section>
    )
}