import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.ABOUT} />

            {/* Ministry Overview Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
                            <Image
                                src="/photos/ENV - MINISTRY OF ENVIRONMENT AND SANITATION.jpeg"
                                alt="Environmental landscape showing clean environment and sanitation efforts"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300 object-contain object-top"
                            />
                        </AnimatedEntrance>
                        <div className="order-1 lg:order-2">
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={200}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    The Ministry of Environment and Sanitation is the government agency responsible for protecting, 
                                    managing, and enhancing the environment of Imo State. We develop and implement effective policies, 
                                    promote sustainable practices, engage the public, and enforce environmental standards for the health, 
                                    safety, and prosperity of present and future generations.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    Our ministry works diligently to address environmental challenges, manage waste effectively, 
                                    control pollution, and drive sustainable development across all 27 local government areas of Imo State. 
                                    Through strategic partnerships, innovative programs, and evidence-based policies, we are transforming 
                                    Imo State into a clean, green, and environmentally sustainable region.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={600}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    We believe that environmental sustainability is not just about conservation, but about creating a 
                                    shared culture that drives inclusive development, improves quality of life, and ensures a 
                                    climate-resilient future for our state and nation.
                                </p>
                            </AnimatedEntrance>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Our Vision */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Our Vision
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    To build a clean, green, safe, and climate-resilient Imo State where environmental 
                                    sustainability is a shared culture and a driving force for inclusive development.
                                </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Our Mission */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Our Mission
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                                    To protect, manage, and enhance the environment of Imo State through effective policies, 
                                    sustainable practices, public engagement, and enforcement of environmental standards for the 
                                    health, safety, and prosperity of present and future generations.
                                </p>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Protect and enhance environmental quality</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Promote sustainable waste management practices</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Combat climate change and control flooding</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Foster environmental education and public engagement</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedEntrance>
                    </div>
                </div>
            </section>


            {/* Commissioner Profile Section */}
            <section id="commissioner" className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Hon. Barr. Major Ejikeme Chuks Major Emenike
                            </h2>
                            <p className="text-lg sm:text-xl text-green-600 font-semibold mb-4 sm:mb-6">
                                Honorable Commissioner for Environment and Sanitation
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                Sworn in on April 30, 2024, by Governor Hope Uzodimma, Hon. Barr. Major Ejikeme Chuks Major Emenike
                                is a legal professional with extensive public service experience. He leads the state&apos;s environmental
                                agenda with a commitment to policy rigor, stakeholder engagement, and effective implementation.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                Under his leadership, the ministry has partnered with key organizations including the Nigerian Nuclear
                                Regulatory Authority, Space for Change, and the Ford Foundation to drive environmental initiatives.
                                His tenure has seen significant progress in waste management, climate action, and community engagement
                                programs across Imo State.
                            </p>
                            <button className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-colors">
                                Read Full Bio
                            </button>
                        </div>
                        <div className="order-1 lg:order-2 aspect-[3/4]">
                            <Image
                                src="/photos/Hon. Barr. Major Ejikeme Chuks Major Emenike - MINISTRY OF ENVIRONMENT AND SANITATION PIC.jpg"
                                alt="Hon. Barr. Major Ejikeme Chuks Major Emenike - Honorable Commissioner for Environment and Sanitation"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-lg w-full h-full object-top object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Responsibilities Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Core Responsibilities
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Environmental Health */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Environmental Health Services
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Monitoring and improving environmental health conditions through inspections, assessments, 
                                and enforcement of health standards across communities.
                            </p>
                        </div>

                        {/* Waste Management */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Waste Management
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Developing and implementing comprehensive waste collection, disposal, recycling, and 
                                treatment systems for sustainable waste management.
                            </p>
                        </div>

                        {/* Climate Change and Flood Control */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 8a2 2 0 100 4 2 2 0 000-4zM7 14a4 4 0 00-4 4v1a1 1 0 001 1h8a1 1 0 001-1v-1a4 4 0 00-4-4H7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Climate Change and Flood Control
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Implementing climate adaptation strategies and flood control measures to build 
                                community resilience against environmental disasters.
                            </p>
                        </div>

                        {/* Forestry and Wildlife */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Forestry and Wildlife
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Conserving and managing forest resources and wildlife habitats to maintain 
                                biodiversity and ecosystem services.
                            </p>
                        </div>

                        {/* Pollution Control */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Pollution Control and Environmental Safety
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Monitoring and regulating air, water, and soil pollution through enforcement of 
                                environmental standards and safety protocols.
                            </p>
                        </div>

                        {/* Sanitation and Environmental Education */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Sanitation and Environmental Education
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Promoting public awareness, education, and community engagement in environmental 
                                protection and sanitation practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Goals Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategic Goals</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry is committed to these key strategic objectives to ensure sustainable environmental management across Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Promote sustainable environmental management across all sectors of the state.",
                            "Ensure effective waste management systems in urban and rural communities.",
                            "Combat erosion, flooding, and other ecological threats through infrastructure and natural solutions.",
                            "Mainstream climate change adaptation and mitigation into state development planning.",
                            "Enhance environmental awareness, education, and community participation.",
                            "Strengthen institutional capacity for environmental monitoring and policy enforcement.",
                            "Expand afforestation and biodiversity conservation initiatives.",
                            "Improve environmental health and sanitation standards in public spaces.",
                            "Build strategic partnerships with local, national, and international stakeholders.",
                            "Drive innovation in environmental technology, data, and service delivery."
                        ].map((goal, index) => (
                            <AnimatedEntrance
                                key={index}
                                {...ANIMATION_PRESETS.CARD_FADE_UP}
                                delay={0.1 * index}
                            >
                                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-semibold">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700">{goal}</p>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Leadership Team</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet the dedicated leaders steering the Ministry of Environment and Sanitation towards a cleaner, greener Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* Commissioner */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/Hon. Barr. Major Ejikeme Chuks Major Emenike - MINISTRY OF ENVIRONMENT AND SANITATION PIC.jpg"
                                    alt="Hon. Barr. Major Ejikeme Chuks Major Emenike - Commissioner for Environment and Sanitation"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Hon. Barr. Major Ejikeme Chuks Major Emenike</h3>
                                <p className="text-green-700 font-medium mt-1">Commissioner for Environment and Sanitation</p>
                                <p className="text-sm text-gray-500 mt-2">Sworn in: April 30, 2024</p>
                            </div>
                        </div>

                        {/* Permanent Secretary */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/Chukwuma O. Iheanacho Permanentl Secretary Ministry of Environment and Sanitation.jpeg"
                                    alt="Pst. Chukwuma Iheanacho - Permanent Secretary"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Pst. Chukwuma Iheanacho</h3>
                                <p className="text-green-700 font-medium mt-1">Permanent Secretary</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Structure Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-900 grid-bg text-white">
                <div className="max-w-7xl mx-auto px-4 space-y-10 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                Our Structure
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                                The Ministry of Environment and Sanitation is structured to ensure efficient
                                service delivery across all environmental and sanitation sectors in Imo State.
                                Our organizational structure comprises various departments working
                                collaboratively to achieve our mandate for a cleaner, greener state.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/photos/GROUP - MINISTRY OF ENVIRONMENT AND SANITATION.jpg"
                                alt="Ministry of Environment and Sanitation Building"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 sm:gap-6">
                        {/* Level 1 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">1</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Honourable Commissioner</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Overall head and chief policy-maker of the Ministry</p>
                        </div>

                        {/* Level 2 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">2</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Permanent Secretary</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Chief administrative officer responsible for coordinating departmental activities and policy execution</p>
                        </div>

                        {/* Level 3 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">3</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Directors of Departments</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Oversee core technical and operational departments including Environmental Health, Waste Management, Climate Change and more</p>
                        </div>

                        {/* Level 4 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">4</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Deputy Directors / Assistant Directors</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Support department heads in policy implementation and project supervision</p>
                        </div>

                        {/* Level 5 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">5</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Heads of Units / Zonal Coordinators</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Oversee specific units or zones within the state for efficient service delivery</p>
                        </div>

                        {/* Level 6 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">6</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Environmental Health Officers</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Frontline staff responsible for community outreach, inspections, enforcement, and reporting</p>
                        </div>

                        {/* Level 7 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">7</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Administrative & Support Staff</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Provide operational, clerical, technical, and field support services across the Ministry</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
