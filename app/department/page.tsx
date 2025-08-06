import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS } from "../../utils/constants/animations";
import TabContentSystem from "../components/TabContentSystem";

export default function Department() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
                <section className="relative bg-cover bg-center py-20 md:py-32" style={{ backgroundImage: 'url("/hero_section.png")' }}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                        <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Ministry of Environment<br />
                                and Sanitation Departments
                            </h1>
                        </AnimatedEntrance>
                    </div>
                </section>
            </AnimatedEntrance>

            {/* Main Content Section with Tab System */}
            <TabContentSystem 
                sidebarTitle="Ministry Departments"
                tabs={[
                    {
                        id: "env-health",
                        label: "Environmental Health Services",
                        content: {
                            title: "Department of Environmental Health Services",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Environmental Health Services",
                            description: "The Department of Environmental Health Services handles public health sanitation, inspection, and hygiene enforcement across Imo State. Our team of qualified environmental health officers conducts regular inspections of residential, commercial, and public premises to ensure compliance with health standards. We enforce proper sanitation practices, monitor water quality, and implement preventive measures against disease outbreaks related to poor environmental conditions."
                        }
                    },
                    {
                        id: "waste-mgmt",
                        label: "Waste Management",
                        content: {
                            title: "Department of Waste Management",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Waste Management",
                            description: "The Department of Waste Management oversees waste collection, disposal systems, recycling, and landfill management throughout Imo State. We coordinate the Statewide Waste Management and Bin Distribution Initiative to ensure proper waste disposal in urban and semi-urban areas. Our department works closely with the Imo State Waste Management Agency (ISWMA) to implement sustainable waste management practices and reduce environmental pollution from improper waste disposal."
                        }
                    },
                    {
                        id: "climate-change",
                        label: "Climate Change and Flood Control",
                        content: {
                            title: "Department of Climate Change and Flood Control",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Climate Change and Flood Control",
                            description: "The Department of Climate Change and Flood Control develops strategies to mitigate climate change impacts and manages erosion/flood control projects across vulnerable communities in Imo State. We implement the Flood and Erosion Control Projects through ACReSAL/NEWMAP initiatives, focusing on infrastructure development and land reclamation in erosion-prone areas. Our department also coordinates climate adaptation measures and works with international partners to implement sustainable climate solutions."
                        }
                    },
                    {
                        id: "forestry",
                        label: "Forestry and Wildlife",
                        content: {
                            title: "Department of Forestry and Wildlife",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Forestry and Wildlife",
                            description: "The Department of Forestry and Wildlife manages forest reserves, tree planting campaigns, and biodiversity conservation efforts throughout Imo State. We lead the Tree Planting and Afforestation Campaign to combat deforestation and promote environmental sustainability. Our department works closely with the Imo State Forestry Commission to protect indigenous plant and animal species, maintain ecological balance, and ensure sustainable utilization of forest resources."
                        }
                    },
                    {
                        id: "pollution",
                        label: "Pollution Control",
                        content: {
                            title: "Department of Pollution Control and Environmental Safety",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Pollution Control",
                            description: "The Department of Pollution Control and Environmental Safety regulates industrial emissions, monitors air/water pollution, and ensures compliance with environmental laws across Imo State. We conduct regular environmental impact assessments, issue compliance certificates, and enforce regulations on noise, air, and water pollution. Our department collaborates with NESREA and other federal agencies to maintain environmental standards and protect public health from pollution-related hazards."
                        }
                    },
                    {
                        id: "planning",
                        label: "Planning and Research",
                        content: {
                            title: "Department of Planning, Research, and Statistics",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Planning and Research",
                            description: "The Department of Planning, Research, and Statistics conducts research, evaluates environmental programs, and maintains data for policy planning. We gather and analyze environmental data to inform decision-making processes and policy development. Our department produces regular reports on environmental indicators, project outcomes, and emerging trends to guide the Ministry's strategic direction and resource allocation."
                        }
                    },
                    {
                        id: "sanitation",
                        label: "Sanitation and Education",
                        content: {
                            title: "Department of Sanitation and Environmental Education",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Sanitation and Education",
                            description: "The Department of Sanitation and Environmental Education promotes environmental awareness, coordinates clean-up campaigns, and engages communities in behavioral change. We develop and implement educational programs for schools, communities, and public institutions on environmental best practices. Our department organizes regular sanitation exercises, public awareness campaigns, and community engagement initiatives to foster a culture of environmental responsibility among Imo State residents."
                        }
                    }
                ]}
            />
        </div>
    );
}
