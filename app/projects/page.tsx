import StatisticsSection from "../../components/StatisticsSection";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { PROJECTS_STATISTICS } from "../../utils/constants/statistics";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import { FaRecycle, FaWater, FaTree, FaBookOpenReader, FaBullhorn, FaClipboardCheck, FaTrash, FaSchool, FaUsers } from "react-icons/fa6";
import Image from "next/image";

// Environmental project icons mapping
const PROJECT_ICONS = {
    1: FaRecycle, // Waste Management
    2: FaWater,   // Flood and Erosion Control
    3: FaTree,    // Tree Planting
    4: FaClipboardCheck, // Environmental Sanitation
    5: FaBookOpenReader,    // Climate Change Knowledge
    6: FaBullhorn,      // Public Awareness
    7: FaClipboardCheck, // Compliance Monitoring
    8: FaTrash,      // Hazardous Waste
    9: FaSchool,        // Green School
    10: FaUsers,        // Community Clean-up
};

// Environmental projects
const ENVIRONMENTAL_PROJECTS = [
    {
        number: 1,
        title: "Statewide Waste Management and Bin Distribution Initiative",
        description: "Distribution of waste bins and establishment of collection schedules across urban and semi-urban areas.",
        location: "Statewide",
        category: "Waste Management",
        status: "In Progress",
        partners: "ENTRACO, Local Governments"
    },
    {
        number: 2,
        title: "Flood and Erosion Control Projects (ACReSAL/NEWMAP)",
        description: "Infrastructure development and land reclamation in erosion-prone communities.",
        location: "Various LGAs",
        category: "Infrastructure",
        status: "In Progress",
        partners: "World Bank, Federal Ministry of Environment"
    },
    {
        number: 3,
        title: "Tree Planting and Afforestation Campaign",
        description: "Massive tree planting exercises to combat deforestation and restore green cover.",
        location: "Statewide",
        category: "Conservation",
        status: "Ongoing",
        partners: "NGOs, Community Groups"
    },
    {
        number: 4,
        title: "Monthly Environmental Sanitation Enforcement",
        description: "Monitoring and enforcement of the state's sanitation laws in collaboration with ENTRACO and LGAs.",
        location: "Urban Centers",
        category: "Sanitation",
        status: "Active",
        partners: "ENTRACO, LGAs"
    },
    {
        number: 5,
        title: "Climate Change Knowledge Paper",
        description: "Policy and advocacy document promoting climate justice and inclusive climate adaptation strategies.",
        location: "State Capital",
        category: "Policy & Research",
        status: "Completed",
        partners: "Ford Foundation, NGOs"
    },
    {
        number: 6,
        title: "Public Environmental Awareness Campaigns",
        description: "Community outreach and sensitization on waste disposal, pollution, and hygiene practices.",
        location: "Statewide",
        category: "Public Outreach",
        status: "Ongoing",
        partners: "Media Houses, Community Groups"
    },
    {
        number: 7,
        title: "Environmental Compliance Monitoring and Inspection",
        description: "Routine inspections of industries, public facilities, and markets to ensure environmental compliance.",
        location: "Industrial Areas",
        category: "Regulation",
        status: "Active",
        partners: "NESREA, State Environmental Protection Agency"
    },
    {
        number: 8,
        title: "Scrap Metal and Hazardous Waste Control Program",
        description: "Awareness and regulation around the handling of scrap metals and radioactive materials.",
        location: "Urban Centers",
        category: "Waste Management",
        status: "In Progress",
        partners: "NNRA, Federal Ministry of Environment"
    },
    {
        number: 9,
        title: "Green School Project",
        description: "Integration of environmental education and mini-gardens in primary and secondary schools.",
        location: "Selected Schools",
        category: "Education",
        status: "Active",
        partners: "Ministry of Education, Schools"
    },
    {
        number: 10,
        title: "Community Clean-up and Volunteer Mobilization Drives",
        description: "Partnering with community-based groups to conduct clean-up exercises across the 27 LGAs.",
        location: "All LGAs",
        category: "Community Engagement",
        status: "Ongoing",
        partners: "Community Groups, Youth Organizations"
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.PROJECTS} />

            {/* Statistics Section */}
            <StatisticsSection statistics={PROJECTS_STATISTICS} className="bg-white" />
            
            {/* Projects Description */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Environmental Projects</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Environment and Sanitation is committed to implementing impactful environmental projects 
                            across Imo State. Our initiatives focus on waste management, conservation, climate action, and community engagement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ENVIRONMENTAL_PROJECTS.map((project, index) => {
                            const IconComponent = PROJECT_ICONS[project.number as keyof typeof PROJECT_ICONS];
                            return (
                                <AnimatedEntrance 
                                    key={project.number} 
                                    {...ANIMATION_PRESETS.CARD_FADE_UP} 
                                    delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                                >
                                    <div className="bg-white border border-gray-200 h-full rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                                        <div className="h-48 bg-green-50 flex items-center justify-center overflow-hidden">
                                            <Image
                                                src={'/assets/no-image.png'}
                                                alt={project.title}
                                                width={400}
                                                height={200}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                {project.title}
                                            </h3>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Category</span>
                                                    <span className="text-gray-900 text-right">{project.category}</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Status</span>
                                                    <span className={`font-medium text-right ${
                                                        project.status === "Active" ? "text-blue-600" :
                                                        project.status === "In Progress" ? "text-yellow-600" :
                                                        project.status === "Completed" ? "text-green-600" :
                                                        project.status === "Ongoing" ? "text-orange-600" : ""
                                                    }`}>{project.status}</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Partners</span>
                                                    <span className="text-gray-900 text-right">{project.partners}</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center mt-4 text-green-600 text-sm">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                {project.location}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedEntrance>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}
