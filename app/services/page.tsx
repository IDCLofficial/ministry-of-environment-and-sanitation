import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import Link from "next/link";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import { GiCloudRing, GiFlood, GiGasMask, GiHut, GiLeafSwirl, GiTrashCan } from "react-icons/gi";

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.SERVICES} />

            {/* Main Services Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Environmental Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover our comprehensive range of environmental services designed to protect, 
                            preserve, and enhance the natural environment of Imo State for present and future generations.
                        </p>
                    </AnimatedEntrance>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Service 1 - Environmental Protection and Sustainability */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <GiLeafSwirl className="w-8 h-8 text-green-600"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Environmental Protection and Sustainability
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Promote eco-friendly practices, enforce environmental laws, and ensure the preservation 
                                    of forests, wetlands, and other natural resources across the state.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Environmental law enforcement
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Forest and wetland preservation
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Eco-friendly practice promotion
                                    </li>
                                </ul>
                                <Link 
                                    href="/services/environmental-protection" 
                                    className="inline-block text-green-600 hover:text-green-700 font-medium"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 2 - Efficient Waste Management */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <GiTrashCan className="w-8 h-8 text-green-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Efficient Waste Management
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Develop and maintain effective solid and liquid waste collection, recycling, 
                                and disposal systems to promote public health and environmental hygiene.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Waste collection systems
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Recycling programs
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Disposal system management
                                </li>
                            </ul>
                            <Link 
                                href="/services/waste-management" 
                                className="inline-block text-green-600 hover:text-green-700 font-medium"
                            >
                                Learn More →
                            </Link>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 3 - Flood and Erosion Control */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <GiFlood className="w-8 h-8 text-green-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Flood and Erosion Control
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Implement strategic erosion and flood mitigation projects, especially in vulnerable 
                                communities, through drainage construction, land reclamation, and vegetation cover restoration.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Drainage construction
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Land reclamation projects
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Vegetation cover restoration
                                </li>
                            </ul>
                            <Link 
                                href="/services/flood-erosion-control" 
                                className="inline-block text-green-600 hover:text-green-700 font-medium"
                            >
                                Learn More →
                            </Link>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 4 - Climate Change Response */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <GiCloudRing className="w-8 h-8 text-green-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Climate Change Response
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Mainstream climate change adaptation and mitigation into state policies by promoting 
                                clean energy, tree planting, and environmental education.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Clean energy promotion
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Tree planting initiatives
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Environmental education
                                </li>
                            </ul>
                            <Link 
                                href="/services/climate-change" 
                                className="inline-block text-green-600 hover:text-green-700 font-medium"
                            >
                                Learn More →
                            </Link>
                        </div>

                        {/* Service 5 - Urban and Rural Sanitation */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <GiHut className="w-8 h-8 text-green-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Urban and Rural Sanitation
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Drive cleanliness campaigns across all 27 LGAs, enforce public sanitation laws, 
                                and promote personal and community hygiene through environmental health officers.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Cleanliness campaigns
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Sanitation law enforcement
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Community hygiene promotion
                                </li>
                            </ul>
                            <Link 
                                href="/services/sanitation" 
                                className="inline-block text-green-600 hover:text-green-700 font-medium"
                            >
                                Learn More →
                            </Link>
                        </div>

                        {/* Service 6 - Pollution Control */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <GiGasMask className="w-8 h-8 text-green-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Pollution Control
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Monitor and reduce air, water, and land pollution by regulating industrial emissions, 
                                controlling dumping activities, and enforcing environmental impact assessments.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Industrial emission regulation
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Dumping activity control
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Environmental impact assessments
                                </li>
                            </ul>
                            <Link 
                                href="/services/pollution-control" 
                                className="inline-block text-green-600 hover:text-green-700 font-medium"
                            >
                                Learn More →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Process Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            How to Access Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Follow these simple steps to access our environmental services and support programs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                1
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Visit Our Office
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Come to our office at the State Secretariat or contact us via phone/email
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                2
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Consultation
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Meet with our experts to discuss your needs and identify suitable services
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                3
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Application
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Complete the necessary forms and provide required documentation
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                4
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Service Delivery
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Receive the approved services and ongoing support from our team
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 sm:py-16 md:py-20 bg-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-green-100 mb-8 sm:mb-12 max-w-3xl mx-auto">
                        Contact us today to learn more about our services and how we can support 
                        your environmental protection and sustainability efforts in Imo State.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact" 
                            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                        >
                            Contact Us Today
                        </Link>
                        <Link 
                            href="/about" 
                            className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
