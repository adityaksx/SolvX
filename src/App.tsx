import React, { useState, useEffect } from 'react';
import { 
  Activity, BarChart2, Layers, Map, Navigation, 
  Thermometer, Droplet, Target, Globe, 
  ArrowRight, Terminal, ChevronRight,
  ArrowUpRight, ArrowDownRight, Check
} from 'lucide-react';

// --- Shared UI Components ---
const SectionHeader: React.FC<{ tag: string; title: string; description?: string }> = ({ tag, title, description }) => (
  <div className="mb-12 md:mb-16 max-w-3xl">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_#06b6d4]"></div>
      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{tag}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4 drop-shadow-md">{title}</h2>
    {description && <p className="text-gray-300 text-lg leading-relaxed drop-shadow-sm">{description}</p>}
  </div>
);

// --- 1. Navbar ---
const Navbar: React.FC = () => (
  <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl shadow-sm">
    <div className="max-w-[90rem] mx-auto px-6 h-14 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-cyan-500 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            <div className="w-2 h-2 bg-black"></div>
          </div>
          <span className="text-white font-mono font-bold tracking-widest text-lg drop-shadow-md">SOLV<span className="text-cyan-500">X</span></span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-gray-300 drop-shadow-md">
          <a href="#audience" className="hover:text-cyan-400 transition-colors">AUDIENCE</a>
          <a href="#variables" className="hover:text-cyan-400 transition-colors">TELEMETRY</a>
          <a href="#validation" className="hover:text-cyan-400 transition-colors">VALIDATION</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-cyan-300 drop-shadow-md">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]"></div>
          SYSTEM ONLINE
        </div>
        <button className="px-4 py-1.5 bg-white text-black font-mono text-xs font-bold hover:bg-cyan-500 hover:text-white transition-colors flex items-center gap-2 shadow-lg">
          LAUNCH VIEWER <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </nav>
);

// --- 2. Hero ---
const Hero: React.FC = () => (
  <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 px-6 border-b border-white/10 bg-transparent overflow-hidden">
    <div className="max-w-[90rem] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      <div className="pr-8">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-6 border border-white/30 bg-white/[0.08] backdrop-blur-md text-[10px] font-mono text-cyan-400 uppercase tracking-widest shadow-lg rounded-sm">
          <Terminal size={12} />
          System Active // v1.0
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-6 leading-[1.05] uppercase drop-shadow-2xl">
          See the Ocean <br />
          <span className="text-cyan-400 text-opacity-90">Beyond the Surface.</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed max-w-xl drop-shadow-lg">
          A browser-based platform that brings ocean model predictions and real-world observations together across location, depth and time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3.5 bg-cyan-600/90 backdrop-blur-sm text-white font-mono text-sm hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2 font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] border border-cyan-400/50 rounded-sm">
            LAUNCH EXPLORER <ChevronRight size={16} />
          </button>
        </div>
      </div>
      
      <div className="relative aspect-square md:aspect-video lg:aspect-square max-h-[550px] w-full border border-white/20 bg-white/[0.03] backdrop-blur-xl overflow-hidden flex flex-col group rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="h-8 border-b border-white/20 bg-white/[0.08] flex items-center px-4 justify-between z-30">
          <div className="text-[10px] font-mono text-gray-300 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_5px_#4ade80]"></div>
            CANVAS_PLACEHOLDER
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-sm border border-white/40"></div>
            <div className="w-2 h-2 rounded-sm border border-white/40"></div>
          </div>
        </div>
        <div className="flex-1 relative w-full h-full overflow-hidden bg-gradient-to-b from-transparent to-cyan-950/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-40 origin-bottom transform perspective-[800px] rotateX-[60deg] scale-[2]">
            <div className="w-full h-full bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/50 via-transparent to-transparent z-10"></div>
          <svg className="absolute inset-0 w-full h-full z-10 opacity-70" preserveAspectRatio="none">
            <path d="M -100,100 C 150,200 350,50 600,150 C 850,250 1000,100 1200,150" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4"/>
            <path d="M 0,250 C 250,150 450,350 700,200 C 950,50 1100,300 1200,250" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <path d="M -50,400 C 200,450 400,300 650,450 C 900,600 1100,350 1200,400" fill="none" stroke="#06b6d4" strokeWidth="1" />
          </svg>
          <div className="absolute top-[25%] left-[30%] z-20 flex flex-col items-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_#fff]"></div>
            <div className="w-px h-32 bg-gradient-to-b from-white/80 to-transparent"></div>
            <span className="absolute left-4 top-0 text-[9px] font-mono text-white bg-white/[0.1] backdrop-blur-md px-1.5 py-0.5 border border-white/30 whitespace-nowrap rounded-sm">ARGO_774</span>
          </div>
          <div className="absolute top-[55%] left-[65%] z-20 flex flex-col items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#06b6d4]"></div>
            <div className="w-px h-20 bg-gradient-to-b from-cyan-400/80 to-transparent"></div>
            <span className="absolute right-4 top-0 text-[9px] font-mono text-cyan-400 bg-white/[0.1] backdrop-blur-md px-1.5 py-0.5 border border-cyan-500/40 whitespace-nowrap rounded-sm">GLIDER_TRK</span>
          </div>
          <div className="absolute bottom-5 left-5 z-30">
            <div className="flex items-center gap-3 mb-2 opacity-90">
              <div className="text-[9px] font-mono text-cyan-400 flex items-center gap-1"><Thermometer size={10}/> TEMP</div>
              <div className="text-[9px] font-mono text-blue-400 flex items-center gap-1"><Navigation size={10}/> CURRENTS</div>
            </div>
            <div className="text-[10px] font-mono text-gray-200 border-l-2 border-cyan-500/80 pl-2.5 bg-white/[0.08] backdrop-blur-md py-1.5 pr-3 shadow-lg rounded-r-sm">
              DEPTH: 0m to -2000m <br/>
              TIME: +48H FORECAST
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- 3. Target Audience ---
const TargetAudience: React.FC = () => {
  const users = [
    { 
      role: "Operational Oceanographers", 
      icon: <Activity size={20} className="text-cyan-400" />,
      need: "Require continuous monitoring of boundary currents and frontogenesis. SolvX provides instant spatial overlay of physical telemetry onto operational forecast grids." 
    },
    { 
      role: "Ocean Forecasters", 
      icon: <Target size={20} className="text-cyan-400" />,
      need: "Demand rapid validation of predictive models (e.g., HYCOM, NEMO). SolvX enables zero-latency visual delta assessments against Argo and glider ground truth." 
    },
    { 
      role: "Marine Researchers", 
      icon: <Layers size={20} className="text-cyan-400" />,
      need: "Process massive historical NetCDF datasets. SolvX bypasses local compute constraints, offering browser-native volumetric exploration without MATLAB or Python environments." 
    },
    { 
      role: "Decision Support Teams", 
      icon: <Globe size={20} className="text-cyan-400" />,
      need: "Need immediate situational awareness during anomalous events. SolvX translates raw multidimensional arrays into actionable visual intelligence for disaster response." 
    }
  ];

  return (
    <section id="audience" className="py-24 px-6 border-b border-white/10 bg-transparent">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeader 
          tag="End Users" 
          title="WHO HAS THIS PROBLEM?" 
          description="Engineered for professionals who require immediate volumetric data synthesis without localized compute bottlenecks."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((u, i) => (
            <div key={i} className="p-6 border border-white/20 bg-white/[0.05] backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:bg-white/[0.1] hover:border-white/30 transition-all group flex flex-col rounded-sm">
              <div className="w-10 h-10 border border-white/20 bg-white/[0.1] backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner rounded-sm">
                {u.icon}
              </div>
              <h3 className="text-sm font-bold font-mono text-white mb-3 uppercase tracking-wide drop-shadow-md">{u.role}</h3>
              <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">{u.need}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. Variables ---
const Variables: React.FC = () => {
  const vars = [
    { icon: <Thermometer size={18}/>, id: 'TEMP', name: 'Temperature', unit: '°C' },
    { icon: <Droplet size={18}/>, id: 'SALT', name: 'Salinity', unit: 'PSU' },
    { icon: <Navigation size={18}/>, id: 'CURR', name: 'Ocean Currents', unit: 'm/s (U, V)' },
    { icon: <Activity size={18}/>, id: 'CHL', name: 'Chlorophyll', unit: 'mg/m³' },
    { icon: <Map size={18}/>, id: 'LAT/LON', name: 'Coordinates', unit: 'Degrees' },
    { icon: <Layers size={18}/>, id: 'DEPTH', name: 'Bathymetry', unit: 'Meters' }
  ];
  return (
    <section id="variables" className="py-24 px-6 border-b border-white/10 bg-transparent">
      <div className="max-w-[90rem] mx-auto grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <SectionHeader 
            tag="Telemetry Data" 
            title="Supported Ocean Variables" 
            description="The platform ingests, normalizes, and maps critical physical and biogeochemical parameters across a unified Z-axis."
          />
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max">
          {vars.map((v) => (
            <div key={v.id} className="p-5 border border-white/20 bg-white/[0.05] backdrop-blur-xl hover:bg-white/[0.1] hover:border-cyan-500/50 transition-all flex flex-col group shadow-lg rounded-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all">{v.icon}</div>
                <span className="text-[10px] font-mono text-gray-400 group-hover:text-cyan-300">{v.id}</span>
              </div>
              <h4 className="text-gray-100 text-sm font-medium mb-1 drop-shadow-sm">{v.name}</h4>
              <span className="text-[11px] font-mono text-cyan-100/60">{v.unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. Validation Dashboard ---
const Validation: React.FC = () => {
  const depthData = [
    { depth: '100m', model: '15.42', obs: '15.45', diff: '+0.03', trend: 'warm' },
    { depth: '200m', model: '12.80', obs: '12.65', diff: '-0.15', trend: 'cool' },
    { depth: '300m', model: '10.15', obs: '10.35', diff: '+0.20', trend: 'warm' },
    { depth: '500m', model: '7.40', obs: '7.42', diff: '+0.02', trend: 'warm' }
  ];

  return (
    <section id="validation" className="py-24 px-6 border-b border-white/10 bg-transparent">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeader 
          tag="Ground Truth" 
          title="Model vs Observation Synthesis" 
          description="Instantly quantify discrepancies by projecting physical telemetry tracks directly against numerical model isosurfaces."
        />
        <div className="border border-white/20 bg-white/[0.05] backdrop-blur-2xl flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 bg-white/[0.05]">
            <div className="flex items-center gap-3 text-[10px] font-mono text-gray-200 uppercase tracking-widest">
              <Activity size={12} className="text-cyan-400" />
              <span>Delta Calculation Engine</span>
            </div>
            <div className="text-[10px] font-mono text-cyan-300 bg-white/[0.1] px-2 py-0.5 border border-cyan-500/40 rounded-sm">
              [ ILLUSTRATIVE_DATA_ONLY ]
            </div>
          </div>
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
            <div className="p-6 lg:p-8 flex flex-col justify-between bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/[0.08] to-transparent">
              <div>
                <h3 className="text-sm font-mono text-white mb-2 flex items-center gap-2 drop-shadow-md">
                  <Target size={14} className="text-cyan-400"/> PARAMETERS
                </h3>
                <ul className="text-xs font-mono text-gray-200 space-y-2 mb-8 border-l border-white/30 pl-3 drop-shadow-sm">
                  <li>VAR: Temperature (°C)</li>
                  <li>REF: Argo Float ID_774</li>
                  <li>MOD: HYCOM Global 1/12°</li>
                  <li>LOC: 45.00° N, -130.00° W</li>
                </ul>
              </div>
              <div className="p-4 border border-rose-400/40 bg-white/[0.08] backdrop-blur-md relative overflow-hidden shadow-inner rounded-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5"><BarChart2 size={16} className="text-rose-400" /></div>
                  <div>
                    <div className="text-[10px] font-mono text-rose-300 mb-1 tracking-wider uppercase drop-shadow-md">Automated Insight</div>
                    <div className="text-sm text-white font-medium mb-1 drop-shadow-md">Subsurface Warm Bias Detected</div>
                    <p className="text-xs text-gray-200 leading-relaxed drop-shadow-sm">
                      Model under-predicts cooling rate between 200m and 300m thermocline layer. Max deviation of <span className="text-rose-300 font-mono font-bold">+0.20°C</span> observed at 300m.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 p-6 lg:p-8">
              <div className="w-full">
                <div className="grid grid-cols-4 gap-4 pb-4 border-b border-white/20 text-[10px] font-mono text-cyan-200 uppercase tracking-widest text-right drop-shadow-md">
                  <div className="text-left">Depth Z</div>
                  <div>Model (Pred)</div>
                  <div>Argo (Obs)</div>
                  <div>Δ Difference</div>
                </div>
                <div className="divide-y divide-white/10">
                  {depthData.map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-4 py-4 text-sm font-mono items-center hover:bg-white/[0.1] transition-colors text-right rounded-sm px-2 -mx-2">
                      <div className="text-left text-gray-100 flex items-center gap-2 font-medium">
                        <Layers size={14} className="text-cyan-400"/> {row.depth}
                      </div>
                      <div className="text-gray-200">{row.model}</div>
                      <div className="text-white font-bold">{row.obs}</div>
                      <div className={`font-bold flex items-center justify-end gap-1 ${row.trend === 'warm' ? 'text-rose-400' : 'text-cyan-300'}`}>
                        {row.diff}
                        {row.trend === 'warm' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/20 flex justify-between items-center text-[10px] font-mono text-gray-300">
                  <span>* Absolute delta values mapped to volumetric rendering space.</span>
                  <button className="text-cyan-300 hover:text-white transition-colors uppercase tracking-widest font-bold">
                    Export CSV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 5.5 Intelligence Workflow ---
const IntelligenceWorkflow: React.FC = () => {
  const steps = ['DATA', 'VISUALIZE', 'COMPARE', 'DETECT', 'UNDERSTAND', 'DECIDE'];

  return (
    <section id="intelligence" className="py-24 px-6 border-b border-white/10 bg-transparent">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeader 
          tag="Operational Pipeline" 
          title="FROM VISUALIZATION TO INTELLIGENCE" 
          description="SolvX combines numerical ocean model outputs with real-world Argo and Glider observations, allowing for strict depth- and time-aware comparisons."
        />
        
        {/* Workflow Pipeline Visual */}
        <div className="p-6 border border-white/20 bg-white/[0.05] backdrop-blur-xl shadow-lg rounded-sm overflow-x-auto">
          <div className="flex items-center justify-between min-w-max gap-4 px-4">
            {steps.map((step, i) => (
              <React.Fragment key={step}>
                <div className={`px-4 py-2 font-mono text-xs md:text-sm tracking-widest uppercase rounded-sm border ${i === steps.length - 1 ? 'border-cyan-400 bg-cyan-900/40 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'border-white/20 bg-white/[0.05] text-gray-300'}`}>
                  {step}
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight size={16} className="text-cyan-500/50 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 5.7 Requirement Coverage ---
const RequirementCoverage: React.FC = () => {
  const requirements = [
    "Browser-based 3D visualization",
    "Numerical ocean model data",
    "Argo observations",
    "Glider observations",
    "Temperature",
    "Salinity",
    "Ocean currents",
    "Chlorophyll",
    "Depth exploration",
    "Time exploration",
    "Model vs Observation comparison",
    "Scientific data ingestion",
    "Interactive analysis"
  ];

  return (
    <section id="requirements" className="py-24 px-6 border-b border-white/10 bg-transparent">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeader 
          tag="Hackathon Criteria" 
          title="SIH ID-26067" 
          description="A direct mapping of platform capabilities against the official Smart India Hackathon problem statement requirements."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {requirements.map((req, i) => (
            <div key={i} className="flex items-center gap-3 p-4 border border-white/20 bg-white/[0.05] backdrop-blur-md rounded-sm hover:bg-white/[0.1] hover:border-cyan-500/40 transition-all group shadow-sm">
              <div className="w-6 h-6 rounded-full bg-black/30 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-950/50 group-hover:border-cyan-500/50 transition-colors">
                <Check size={12} className="text-cyan-400" />
              </div>
              <span className="text-sm font-mono text-gray-200 drop-shadow-sm">{req}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5.8 Deployment & MVP Scope ---
const MVPScope: React.FC = () => {
  const mvpFeatures = [
    { icon: <Thermometer size={16} />, text: "Temperature" },
    { icon: <Droplet size={16} />, text: "Salinity" },
    { icon: <Navigation size={16} />, text: "Ocean Currents" },
    { icon: <Target size={16} />, text: "Argo/Glider Observations" },
    { icon: <Layers size={16} />, text: "Depth & Time Exploration" },
    { icon: <Activity size={16} />, text: "Model vs Obs Comparison" }
  ];

  const architecturePoints = [
    { title: "Standard Scientific Formats", desc: "Native ingestion of NetCDF and CSV datasets to ensure compatibility with global ocean observing systems." },
    { title: "Modular Architecture", desc: "Decoupled React/WebGL frontend and backend data processing for independent scaling and maintenance." },
    { title: "Browser-Based Deployment", desc: "Zero-install environment accessible from standard hardware, securely deployed to edge networks." },
    { title: "Incremental Dataset Expansion", desc: "MVP focuses on core physical and biogeochemical parameters, with architecture designed to accept real-time pipelines in future iterations." }
  ];

  return (
    <section id="roadmap" className="py-24 px-6 border-b border-white/10 bg-transparent">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeader 
          tag="Roadmap" 
          title="BUILT FOR THE HACKATHON. DESIGNED FOR DEPLOYMENT." 
          description="Clear boundaries on what SolvX delivers today as a realistic MVP, and how the architectural foundations scale for tomorrow's operational deployments."
        />
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column: MVP Scope */}
          <div className="p-8 border border-white/20 bg-white/[0.05] backdrop-blur-xl rounded-sm shadow-lg flex flex-col">
            <h3 className="text-sm font-mono text-cyan-400 mb-6 flex items-center gap-2 drop-shadow-md">
              <Terminal size={14} /> MVP SCOPE (v1.0)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 flex-1">
              {mvpFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-colors rounded-sm">
                  <div className="text-cyan-400 flex-shrink-0">{f.icon}</div>
                  <span className="text-sm font-medium text-gray-200">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architecture Details */}
          <div className="p-8 border border-white/20 bg-white/[0.05] backdrop-blur-xl rounded-sm shadow-lg">
            <h3 className="text-sm font-mono text-gray-300 mb-6 flex items-center gap-2 drop-shadow-md">
              <Globe size={14} /> ARCHITECTURE & EXPANSION
            </h3>
            <div className="space-y-6">
              {architecturePoints.map((pt, i) => (
                <div key={i} className="pl-4 border-l-2 border-cyan-500/30 hover:border-cyan-400/80 transition-colors group">
                  <h4 className="text-sm font-bold text-white mb-1 drop-shadow-md group-hover:text-cyan-300 transition-colors">{pt.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed drop-shadow-sm">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 6. Applications & Tech Stack ---
const TechImpact: React.FC = () => (
  <section className="py-24 px-6 border-b border-white/10 bg-transparent">
    <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <Globe className="text-cyan-400 drop-shadow-[0_0_5px_#22d3ee]" size={20} />
          <h2 className="text-xl font-medium text-white drop-shadow-md">Scientific Impact</h2>
        </div>
        <div className="space-y-4">
          {[
            { title: "Climate Modeling", desc: "Validate boundary conditions for long-term ocean-atmosphere coupled models." },
            { title: "Marine Navigation", desc: "Provide real-time surface current maps validated by glider tracks for routing." },
            { title: "Ecological Monitoring", desc: "Track hypoxia and chlorophyll blooms via integrated BGC data and modeling." },
            { title: "Disaster Management", desc: "Anticipate coastal hazards by rapidly comparing real-time telemetry against predictive spatial models." },
            { title: "Search & Rescue", desc: "Improve drift trajectory predictions by refining surface current models with live observational data." },
            { title: "Fisheries", desc: "Identify optimal pelagic zones and protect habitats by analyzing depth-aware temperature and chlorophyll layers." },
            { title: "Climate Monitoring", desc: "Track long-term oceanic shifts by grounding decadal model forecasts directly in historical in-situ data." },
            { title: "Scientific Research", desc: "Accelerate discovery through a unified environment for visual comparison of complex multi-dimensional arrays." }
          ].map((item, i) => (
            <div key={i} className="pl-5 border-l-2 border-cyan-400/50 bg-white/[0.05] backdrop-blur-md p-4 rounded-r-sm shadow-sm hover:bg-white/[0.08] transition-colors">
              <h4 className="text-white text-sm font-medium mb-1.5 drop-shadow-sm">{item.title}</h4>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="text-cyan-400 drop-shadow-[0_0_5px_#22d3ee]" size={20} />
          <h2 className="text-xl font-medium text-white drop-shadow-md">System Architecture</h2>
        </div>
        <div className="p-6 border border-white/20 bg-white/[0.05] backdrop-blur-xl shadow-xl space-y-4 font-mono text-xs rounded-sm">
          <div className="flex justify-between items-center py-2 border-b border-white/20">
            <span className="text-gray-300">Frontend_UI</span> 
            <span className="text-gray-100 font-bold">React + TS + Tailwind</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/20">
            <span className="text-gray-300">Renderer</span> 
            <span className="text-cyan-300 font-bold drop-shadow-sm">Three.js / WebGL</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/20">
            <span className="text-gray-300">Data_Processing</span> 
            <span className="text-gray-100 font-bold">Python + Xarray + Zarr</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-300">Pipeline_Orchestration</span> 
            <span className="text-gray-100 font-bold">GitHub Actions / Vercel</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- 7. Final CTA & Footer ---
const Footer: React.FC = () => (
  <>
    <section className="py-32 px-6 bg-transparent text-center border-b border-white/10 flex flex-col items-center">
      <div className="w-12 h-12 border border-white/30 bg-white/[0.1] backdrop-blur-xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-sm">
        <div className="w-4 h-4 bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 drop-shadow-lg">
        Analyze the Ocean. <br /> In your browser.
      </h2>
      <p className="text-gray-200 max-w-lg mx-auto mb-10 text-lg drop-shadow-md">
        Stop writing static visualization scripts. Interact with the data.
      </p>
      <button className="px-8 py-4 bg-white/90 backdrop-blur-md text-black font-mono text-sm font-bold hover:bg-cyan-500 hover:text-white transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] rounded-sm">
        INITIALIZE PLATFORM <ChevronRight size={16} />
      </button>
    </section>
    <footer className="py-8 px-6 bg-transparent flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-gray-300 font-mono text-[10px] uppercase tracking-widest drop-shadow-md">
        © {new Date().getFullYear()} SolvX System — Hackathon Build
      </div>
      <div className="flex gap-6 text-gray-200 text-[10px] font-mono uppercase tracking-widest drop-shadow-md">
        <a href="#" className="hover:text-cyan-300 transition-colors">Repository</a>
        <a href="#" className="hover:text-cyan-300 transition-colors">Data Sources</a>
        <a href="#" className="hover:text-cyan-300 transition-colors">Team</a>
      </div>
    </footer>
  </>
);

// --- Main App Composer ---
const App: React.FC = () => {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollDepth(Math.min(Math.max(progress, 0), 1));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-gray-100 font-sans selection:bg-cyan-900/50 selection:text-cyan-50 relative">
      <div 
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat transition-opacity duration-300"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2560&auto=format&fit=crop')" }}
      ></div>
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none transition-all duration-100"
        style={{
          background: `linear-gradient(to bottom, rgba(1, 17, 29, ${0.4 + (scrollDepth * 0.4)}), rgba(0, 0, 0, ${0.7 + (scrollDepth * 0.25)}))`
        }}
      ></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TargetAudience />
        <Variables />
        <Validation />
        <IntelligenceWorkflow />
        <RequirementCoverage />
        <MVPScope />
        <TechImpact />
        <Footer />
      </div>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none mix-blend-screen hidden xl:flex">
        <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest rotate-90 mb-8 drop-shadow-md">Surface</div>
        <div className="w-px h-32 bg-white/30 relative shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          <div 
            className="absolute top-0 left-0 w-full bg-cyan-300 transition-all duration-100 shadow-[0_0_10px_#22d3ee]"
            style={{ height: `${scrollDepth * 100}%` }}
          ></div>
        </div>
        <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest -rotate-90 mt-8 drop-shadow-md">Abyss</div>
      </div>
    </div>
  );
};

export default App;
