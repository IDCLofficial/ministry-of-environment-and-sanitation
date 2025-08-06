import Image from "next/image";
import StatisticsSection from "../components/StatisticsSection";
import HeroSection from "../components/HeroSection";
import AnimatedEntrance from "../components/AnimatedEntrance";
import { HOME_STATISTICS } from "../utils/constants/statistics";
import { HERO_CONFIGS } from "../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaLeaf, FaRecycle, FaCloudSun, FaBroom } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8F9]">
      {/* Hero Section */}
      <HeroSection {...HERO_CONFIGS.HOME}>
        <Link href="/about">
          <button className="bg-white/90 hover:bg-white text-black cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium active:scale-95 transition-colors">
            Read more
          </button>
        </Link>
      </HeroSection>

      {/* Statistics Section */}
      <StatisticsSection statistics={HOME_STATISTICS} />

      {/* Ministry Overview Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
              <Image
                src="/assets/no-image.png"
                alt="Environmental landscape with clean surroundings"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
              />
            </AnimatedEntrance>
            <div className="grid gap-4 sm:gap-6 md:gap-8 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} delay={200}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Overview of the Ministry of Environment and Sanitation
                </h2>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  The Imo State Ministry of Environment and Sanitation is committed to building a clean, green, safe, and climate-resilient state through effective policies, sustainable practices, public engagement, and enforcement of environmental standards for the health, safety, and prosperity of present and future generations.
                </p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600}>
                <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer w-fit text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                  Learn more
                </button>
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Commissioner Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-20 xl:px-32 w-full">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Welcome from the Commissioner
                </h2>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Hon. Barr. Major Ejikeme Chuks Major Emenike brings extensive legal and public service experience
                  to his role as Commissioner for Environment and Sanitation. Appointed by Governor Hope Uzodimma on April 30, 2024,
                  he leads the state&apos;s environmental agenda with a commitment to policy rigor, stakeholder engagement, and effective implementation.
                </p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={400}>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Under his leadership, the ministry has launched several groundbreaking initiatives including
                  engagement with the Nigerian Nuclear Regulatory Authority, partnerships with Space for Change and the Ford Foundation
                  for climate knowledge development, and community environmental initiatives such as recycling education and tree-planting campaigns.
                  He is recognized for his inclusive leadership style and dedication to transforming Imo State into a cleaner, greener, and climate-resilient society.
                </p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600}>
                <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                  Read Full Bio
                </button>
              </AnimatedEntrance>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP}>
                <Image
                  src="/assets/no-image.png"
                  alt="Hon. Barr. Major Ejikeme Chuks Major Emenike - Commissioner for Environment and Sanitation"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Priorities Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Ministry Priorities
            </h2>
          </AnimatedEntrance>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaLeaf size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">Environmental Protection</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">Promoting eco-friendly practices and natural resource preservation</p>
                <button className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</button>
              </div>
            </AnimatedEntrance>
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaRecycle size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">Waste Management</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Effective solid and liquid waste collection and recycling systems
                </p>
                <button className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</button>
              </div>
            </AnimatedEntrance>
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaCloudSun size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">Climate Action</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Climate change adaptation and flood control initiatives
                </p>
                <button className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</button>
              </div>
            </AnimatedEntrance>
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaBroom size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">Urban Sanitation</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Cleanliness campaigns and public sanitation enforcement
                </p>
                <button className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</button>
              </div>
            </AnimatedEntrance>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      {/* <LatestNews /> */}

      {/* Environmental Partners Section */}
      <section className="py-8 sm:py-12 md:py-16 relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/assets/pattern.svg"
            alt="Environmental Pattern"
            width={1440}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 sm:px-6 lg:px-20 relative z-10">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Environmental Partners
            </h2>
          </AnimatedEntrance>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <AnimatedEntrance key={item} {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.FAST[index] || STAGGER_DELAYS.FAST[5]}>
                <div className="text-center hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Image 
                      src="/assets/no-image.png"
                      alt={`Environmental Partner ${item}`}
                      width={100}
                      height={60}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </AnimatedEntrance>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
