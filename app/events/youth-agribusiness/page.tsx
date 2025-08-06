import Image from "next/image";
import AnimatedEntrance from "../../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../../utils/constants/animations";

export default function YouthAgribusinessEvent() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
                <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
                    <div className="absolute inset-0">
                        <Image
                            src="/hero_section.png"
                            alt="Agricultural landscape"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 flex items-center h-full">
                        <div className="max-w-8xl px-4 sm:px-6 lg:px-20">
                            <div className="max-w-7xl">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                                    Imo Youth Agribusiness Training Program
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedEntrance>

            {/* Event Image */}
            <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_ZOOM_IN} delay={STAGGER_DELAYS.MEDIUM[0]}>
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                        <div className="w-full h-80 md:h-96 relative rounded-lg overflow-hidden">
                            <Image
                                src="/assets/youth.png"
                                alt="Imo Youth Agribusiness Training Program"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
            </AnimatedEntrance>

            {/* Event Description */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN} delay={STAGGER_DELAYS.MEDIUM[1]}>
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                        <div className="prose max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This 5-day intensive training program is designed to equip young entrepreneurs in Imo State with the practical knowledge and skills needed to thrive in the modern agricultural sector. Participants will receive hands-on training in advanced farming techniques, agribusiness, livestock, and climate-smart agriculture practices. The program will also cover areas such as access to finance, market linkages, digital tools, and strategic partnerships for improving government and private sector funding opportunities.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Facilitated by leading experts, successful agripreneurs, and Ministry officials, this program aims to foster innovation, boost productivity, and create employment through sustainable agriculture. Attendees will also benefit from networking sessions, mentorship opportunities, and direct links to government programs and private sector funding opportunities.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                This training is ideal for young farmers, aspiring agribusiness owners, recent graduates, and youth interested in building careers in agriculture and natural resource management.
                            </p>
                        </div>
                    </div>
                </section>
            </AnimatedEntrance>

            {/* Event Details */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN} delay={STAGGER_DELAYS.MEDIUM[2]}>
                <section className="py-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">EVENT DETAILS</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">DATE:</h3>
                                <p className="text-gray-900">August 15—19, 2024</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">TIME:</h3>
                                <p className="text-gray-900">9:00 am - 5:00 pm</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">PHONE:</h3>
                                <p className="text-gray-900">0803 562 0042</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">ADDRESS:</h3>
                                <p className="text-gray-900">Imo Agricultural Development Centre, Owerri</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">ORGANIZER:</h3>
                                <p className="text-gray-900">Ministry of Agriculture & Natural Resources</p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedEntrance>

            {/* Speakers Section */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN} delay={STAGGER_DELAYS.MEDIUM[3]}>
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                        <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">SPEAKERS</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Speaker 1 */}
                            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                                <div className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
                                        <Image
                                            src="/assets/sp-1.png"
                                            alt="Japhet Gilbert"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Lead Speaker</p>
                                    <h3 className="text-lg font-bold text-gray-900">JAPHET GILBERT</h3>
                                </div>
                            </AnimatedEntrance>

                            {/* Speaker 2 */}
                            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                                <div className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
                                        <Image
                                            src="/assets/sp-2.png"
                                            alt="Japhet Gilbert"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Lead Speaker</p>
                                    <h3 className="text-lg font-bold text-gray-900">JAPHET GILBERT</h3>
                                </div>
                            </AnimatedEntrance>

                            {/* Speaker 3 */}
                            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                                <div className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
                                        <Image
                                            src="/assets/sp-3.png"
                                            alt="Japhet Gilbert"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Lead Speaker</p>
                                    <h3 className="text-lg font-bold text-gray-900">JAPHET GILBERT</h3>
                                </div>
                            </AnimatedEntrance>

                            {/* Speaker 4 */}
                            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
                                <div className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
                                        <Image
                                            src="/assets/sp-4.png"
                                            alt="Japhet Gilbert"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Lead Speaker</p>
                                    <h3 className="text-lg font-bold text-gray-900">JAPHET GILBERT</h3>
                                </div>
                            </AnimatedEntrance>
                        </div>
                    </div>
                </section>
            </AnimatedEntrance>
        </div>
    );
}