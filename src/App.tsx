import React, { useState } from 'react';
import { 
  Camera, 
  Video, 
  Users, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Info, 
  Target, 
  CheckCircle, 
  Cpu, 
  Layers, 
  Mic, 
  Monitor, 
  ChevronRight,
  Menu,
  X,
  Award,
  BarChart3,
  Globe,
  Mountain,
  History,
  LayoutDashboard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Data ---

const PROJECT_TITLE = "समृद्ध तीनपाटन: विकास, सुशासन र रूपान्तरणको यात्रा";
const PROJECT_SUBTITLE = "Prosperous Tinpatan: A Journey of Development, Governance, and Transformation";
const PARTNER = "Logical Engineering Concern Pvt. Ltd.";

const SECTIONS = [
  { id: 'overview', title: 'Overview', icon: LayoutDashboard },
  { id: 'highlights', title: 'Key Highlights', icon: Award },
  { id: 'objectives', title: 'Objectives', icon: Target },
  { id: 'phases', title: 'Project Phases', icon: Layers },
  { id: 'team', title: 'Technical Team', icon: Users },
  { id: 'financials', title: 'Financials', icon: DollarSign },
];

const HIGHLIGHTS = [
  {
    title: "Data-Driven Storytelling",
    nepali: "तथ्याङ्कमा आधारित कथा वाचन",
    desc: "Using infographics to present project costs, beneficiaries, and technical details.",
    icon: BarChart3
  },
  {
    title: "Advanced Technology",
    nepali: "अत्याधुनिक प्रविधिको प्रयोग",
    desc: "4K Quality filming with Aerial Drones for high-quality visual documentation.",
    icon: Cpu
  },
  {
    title: "Comparative Analysis",
    nepali: "'पहिलो र अहिले' को तुलना",
    desc: "Visualizing the transformation by comparing the state from 5 years ago to now.",
    icon: History
  },
  {
    title: "Inclusive Voices",
    nepali: "समावेशी आवाज",
    desc: "Featuring feedback from women, farmers, and local communities, not just officials.",
    icon: Mic
  }
];

const OBJECTIVES = [
  { title: "Infrastructure", nepali: "भौतिक पूर्वाधार", desc: "Documentation of roads, bridges, schools, and health posts." },
  { title: "Culture & Tourism", nepali: "सांस्कृतिक र पर्यटन", desc: "Promoting Magar, Tamang cultures and historical sites." },
  { title: "Good Governance", nepali: "सुशासन र सेवा", desc: "Showcasing digital services and administrative transparency." },
  { title: "Public Participation", nepali: "जनसहभागिता", desc: "Honoring the contribution of local user committees." },
  { title: "Economic Potential", nepali: "आर्थिक सम्भावना", desc: "Exploring agricultural pockets and market linkages." },
  { title: "Institutional Memory", nepali: "संस्थागत स्मृति", desc: "Creating a digital archive for future reference." }
];

const PHASES = [
  {
    name: "Pre-Production",
    nepali: "पूर्व-उत्पादन",
    tasks: ["Research & Data Collection", "Script Writing & Storyboarding", "Location Scouting", "Scheduling"]
  },
  {
    name: "Production",
    nepali: "उत्पादन",
    tasks: ["Cinematic 4K Filming", "Drone Operations", "Interviews & Audio Recording", "B-Roll Gathering"]
  },
  {
    name: "Post-Production",
    nepali: "उत्तर-उत्पादन",
    tasks: ["Video Editing & Color Grading", "Sound Mixing & Voiceover", "Motion Graphics & Animation", "Review & Final Cut"]
  }
];

const TEAM = [
  { role: "Script Writing Team", count: 3, desc: "1 Senior Writer, 2 Research Assistants" },
  { role: "Director", count: 1, desc: "Team Leader" },
  { role: "Sr. Cinematographer", count: 1, desc: "Main Camera Person" },
  { role: "Videographers", count: 2, desc: "Assistant & B-Roll" },
  { role: "Photographers", count: 2, desc: "Photo Documentation" },
  { role: "Drone Pilots", count: 2, desc: "Aerial Cinematography" },
  { role: "Surveyors", count: 2, desc: "Data & Bytes Collection" },
  { role: "Production Manager", count: 1, desc: "Logistics Management" },
  { role: "Editor", count: 1, desc: "Post-Production" },
  { role: "Voice Over Artist", count: 1, desc: "Narration" },
  { role: "Helpers", count: 2, desc: "Equipment Support" }
];

const BUDGET_ITEMS = [
  { category: "Pre-Production", amount: 70000 },
  { category: "Production (10 Days)", amount: 645000 },
  { category: "Post-Production", amount: 155000 },
  { category: "Deliverables & Misc", amount: 1682 },
];

const TOTAL_BUDGET = 985000;

// --- Components ---

const SectionHeader = ({ title, nepali, icon: Icon }: { title: string, nepali?: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200">
      <Icon size={24} />
    </div>
    <div>
      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h2>
      {nepali && <p className="text-sm font-medium text-blue-600">{nepali}</p>}
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-800">
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-md text-slate-600"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-8">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              T
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Tinpatan Doc</span>
          </div>

          <nav className="space-y-2">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveTab(section.id);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${activeTab === section.id 
                    ? 'bg-blue-50 text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                <section.icon size={18} />
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="p-4 bg-slate-900 rounded-2xl text-white">
            <p className="text-xs text-slate-400 mb-1">Implementing Partner</p>
            <p className="text-sm font-semibold leading-tight">{PARTNER}</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 lg:p-12">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="space-y-12"
              >
                <header className="space-y-4">
                  <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                    Project Proposal
                  </motion.div>
                  <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                    {PROJECT_TITLE}
                  </motion.h1>
                  <motion.p variants={itemVariants} className="text-xl text-slate-500 font-medium">
                    {PROJECT_SUBTITLE}
                  </motion.p>
                </header>

                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
                      <Calendar size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">Duration</h3>
                    <p className="text-slate-500">45 Days Timeline</p>
                  </div>
                  <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                      <DollarSign size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">Budget</h3>
                    <p className="text-slate-500">NPR 9.85 Lakhs</p>
                  </div>
                  <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
                      <MapPin size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-500">Tinpatan, Sindhuli</p>
                  </div>
                </motion.div>

                <motion.section variants={itemVariants} className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-blue-600 font-bold">
                    <Info size={20} />
                    <span>Project Introduction</span>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    This proposal is prepared for the audio-visual documentation of the overall development activities, infrastructure achievements, and unique socio-cultural identity of Tinpatan Rural Municipality. 
                    The project aims to capture the essence of progress using 4K quality technology, reflecting transparency, accountability, and proximity to citizens.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600"><CheckCircle size={18} /></div>
                      <p className="text-slate-600 font-medium">Physical Infrastructure Showcase</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600"><CheckCircle size={18} /></div>
                      <p className="text-slate-600 font-medium">Cultural Heritage Promotion</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600"><CheckCircle size={18} /></div>
                      <p className="text-slate-600 font-medium">Good Governance Practices</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600"><CheckCircle size={18} /></div>
                      <p className="text-slate-600 font-medium">Future Roadmap Visualization</p>
                    </div>
                  </div>
                </motion.section>
              </motion.div>
            )}

            {activeTab === 'highlights' && (
              <motion.div
                key="highlights"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="space-y-8"
              >
                <SectionHeader title="Key Highlights" nepali="आयोजनाका मुख्य विशेषताहरू" icon={Award} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {HIGHLIGHTS.map((h, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={itemVariants}
                      className="group p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <h.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{h.title}</h3>
                      <p className="text-sm font-bold text-blue-600 mb-4">{h.nepali}</p>
                      <p className="text-slate-500 leading-relaxed">{h.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'objectives' && (
              <motion.div
                key="objectives"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="space-y-8"
              >
                <SectionHeader title="Project Objectives" nepali="आयोजनाका उद्देश्यहरू" icon={Target} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {OBJECTIVES.map((obj, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={itemVariants}
                      className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm border-l-4 border-l-blue-600"
                    >
                      <h3 className="font-bold text-slate-900 mb-1">{obj.title}</h3>
                      <p className="text-xs font-bold text-blue-600 mb-3">{obj.nepali}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{obj.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'phases' && (
              <motion.div
                key="phases"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="space-y-12"
              >
                <SectionHeader title="Project Phases" nepali="आयोजनाका चरणहरू" icon={Layers} />
                <div className="relative space-y-12 before:absolute before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200">
                  {PHASES.map((phase, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="relative pl-20">
                      <div className="absolute left-0 top-0 w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center z-10 shadow-sm">
                        <span className="text-xl font-black text-blue-600">{idx + 1}</span>
                      </div>
                      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{phase.name}</h3>
                        <p className="text-sm font-bold text-blue-600 mb-6">{phase.nepali}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {phase.tasks.map((task, tIdx) => (
                            <div key={tIdx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-600">
                              <div className="w-2 h-2 bg-blue-600 rounded-full" />
                              {task}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'team' && (
              <motion.div
                key="team"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="space-y-8"
              >
                <SectionHeader title="Technical Team" nepali="प्रस्तावित प्राविधिक टोली" icon={Users} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {TEAM.map((member, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={itemVariants}
                      className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4"
                    >
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">
                        {member.count}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{member.role}</h4>
                        <p className="text-xs text-slate-500">{member.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-6 bg-blue-600 rounded-3xl text-white">
                  <p className="text-sm font-medium opacity-90 mb-2">Total Workforce</p>
                  <p className="text-3xl font-black">18 Professionals</p>
                  <p className="text-xs mt-4 opacity-75 italic">
                    * Multi-skilled manpower strategy: Some roles may be handled by the same expert to optimize budget.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'financials' && (
              <motion.div
                key="financials"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="space-y-8"
              >
                <SectionHeader title="Financial Proposal" nepali="विस्तृत लागत अनुमान" icon={DollarSign} />
                
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                  <div className="p-8 lg:p-10">
                    <div className="space-y-6">
                      {BUDGET_ITEMS.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
                          <div>
                            <p className="font-bold text-slate-900">{item.category}</p>
                            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Budget Allocation</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-black text-slate-900">Rs. {item.amount.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-900 p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Grand Total (Incl. VAT)</h3>
                      <p className="text-4xl lg:text-5xl font-black">Rs. {TOTAL_BUDGET.toLocaleString()}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle size={16} className="text-green-400" />
                        <span>50% Advance Payment</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle size={16} className="text-green-400" />
                        <span>50% Final Payment</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Award size={20} className="text-blue-600" />
                      Key Deliverables
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                      <li className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-blue-600" />
                        Master Documentary (15-20 Min)
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-blue-600" />
                        Social Media Teasers & Promos
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-blue-600" />
                        Clean Feed (Raw Footage)
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-blue-600" />
                        High-Res Photo Bank (100+ Photos)
                      </li>
                    </ul>
                  </div>
                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
                    <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <Monitor size={20} className="text-blue-600" />
                      Technology Profile
                    </h4>
                    <p className="text-sm text-blue-800 leading-relaxed">
                      Sony Alpha 4K Cinema Cameras, DJI Mavic 3 Drones, Zoom H6 Audio Recorders, and High-End Editing Suites with Adobe Creative Cloud.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
