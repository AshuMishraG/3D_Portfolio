import { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Loading.jsx";
import { workExperiences } from "../constants/index.js";

const WorkExperience = () => {
   const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
   const [animationName, setAnimationName] = useState("idle");
   const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

   const currentExperience = workExperiences[selectedExperienceIndex];
   const currentProjects = currentExperience?.projects ?? [];

   const handleExperienceFocus = (experience = currentExperience) => {
      const targetAnimation = experience?.animation?.toLowerCase() ?? "idle";
      setAnimationName(targetAnimation);
   };

   const handleExperienceBlur = () => {
      setAnimationName("idle");
   };

   const handleExperienceSelect = (index) => {
      if (index === selectedExperienceIndex) return;

      const targetAnimation =
         workExperiences[index]?.animation?.toLowerCase() ?? "idle";

      setAnimationName(targetAnimation);
      setSelectedExperienceIndex(index);
      setSelectedProjectIndex(0);
   };

   useEffect(() => {
      const initialAnimation =
         workExperiences[0]?.animation?.toLowerCase() ?? "idle";
      setAnimationName(initialAnimation);
   }, []);

   useEffect(() => {
      if (selectedProjectIndex >= currentProjects.length) {
         setSelectedProjectIndex(0);
      }
   }, [currentProjects.length, selectedProjectIndex]);

   const gradientStyles = useMemo(() => {
      const gradients = [
         "bg-[radial-gradient(circle_at_top,_rgba(226,232,255,0.18),_transparent_65%)]",
         "bg-[radial-gradient(circle_at_right,_rgba(255,243,228,0.18),_transparent_65%)]",
         "bg-[radial-gradient(circle_at_left,_rgba(209,250,229,0.18),_transparent_60%)]",
      ];

      return gradients[selectedExperienceIndex % gradients.length];
   }, [selectedExperienceIndex]);

   if (!currentExperience) {
      return null;
   }

   return (
      <section className="c-space my-20" id="work">
         <div className="w-full text-white-600">
            <p className="text-center text-4xl font-bold shining-gradient">
               My Work Experience
            </p>

            <div className="flex flex-col gap-8 mt-12">
               <div
                  className="relative border border-black-300/70 bg-black-200/60 rounded-3xl overflow-hidden p-5 sm:p-8 shadow-2xl shadow-black/30"
                  onPointerLeave={handleExperienceBlur}
               >
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(60,60,80,0.4),_rgba(0,0,0,0))]" />
                  <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                     {workExperiences.map((experience, index) => {
                        const isActive = index === selectedExperienceIndex;
                        return (
                           <button
                              key={experience.id}
                              type="button"
                              onClick={() => handleExperienceSelect(index)}
                              onPointerEnter={() =>
                                 handleExperienceFocus(experience)
                              }
                              onPointerLeave={handleExperienceBlur}
                              className={`rounded-2xl p-5 text-left transition-all duration-300 h-full flex flex-col justify-between border shadow-lg ${
                                 isActive
                                    ? "bg-white/12 border-white/50 shadow-xl shadow-white/10"
                                    : "bg-black-300/60 border-black-400/80 hover:border-white/30 hover:bg-white/[0.1]"
                              }`}
                           >
                              <div className="flex items-center gap-4">
                                 <div className="p-3 bg-black-300/90 border border-white/15 rounded-xl shadow-md">
                                    <img
                                       className="w-10 h-10 object-contain"
                                       src={experience.icon}
                                       alt={experience.name}
                                    />
                                 </div>
                                 <div>
                                    <p className="text-base font-semibold text-white drop-shadow-sm">
                                       {experience.name}
                                    </p>
                                    <p className="text-white-700 text-xs mt-1 font-medium">
                                       {experience.pos}
                                    </p>
                                    <p className="text-white-600 text-xs font-medium">
                                       {experience.duration}
                                    </p>
                                 </div>
                              </div>

                              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white-700 font-medium">
                                 <span>{isActive ? "Selected" : "View"}</span>
                                 <span
                                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full border transition-all ${
                                       isActive
                                          ? "border-white/80 bg-white/25 shadow-sm"
                                          : "border-white/30 bg-black-200/50"
                                    }`}
                                 >
                                    <img
                                       src="/assets/right-arrow.webp"
                                       alt="view experience"
                                       className={`w-3.5 h-3.5 transition-transform ${
                                          isActive ? "rotate-90" : "rotate-45"
                                       }`}
                                    />
                                 </span>
                              </div>
                           </button>
                        );
                     })}
                  </div>
               </div>

               <div
                  className="grid xl:grid-cols-[1.25fr,0.9fr] gap-8 items-stretch"
                  onPointerLeave={handleExperienceBlur}
               >
                  <div
                     className={`relative border border-black-300/70 bg-black-200/70 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ${gradientStyles}`}
                     onPointerEnter={() =>
                        handleExperienceFocus(currentExperience)
                     }
                  >
                     <div className="absolute inset-0 bg-[linear-gradient(150deg,_rgba(50,50,70,0.7),_rgba(0,0,0,0))]" />
                     <div className="relative z-10 flex flex-col gap-6 p-8 sm:p-12">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                           <div className="flex flex-col gap-2 max-w-xl">
                              <p className="text-xs uppercase tracking-[0.35em] text-white-700 font-semibold">
                                 {currentExperience.duration}
                              </p>
                              <h3 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                 {currentExperience.name}
                              </h3>
                              <p className="text-white-800 text-lg font-medium">
                                 {currentExperience.pos}
                              </p>
                           </div>
                           <a
                              className="flex items-center gap-2 text-sm text-white-700 hover:text-white transition-colors bg-black-300/70 border border-white/30 px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-black-300/80"
                              href={currentExperience.link}
                              target="_blank"
                              rel="noreferrer"
                           >
                              <span>Company Site</span>
                              <img
                                 src="/assets/arrow-up.webp"
                                 alt="arrow"
                                 className="w-3 h-3"
                              />
                           </a>
                        </div>

                        {currentExperience.summary ? (
                           <p className="text-white-700 leading-relaxed max-w-3xl text-base">
                              {currentExperience.summary}
                           </p>
                        ) : null}

                        {currentProjects.length ? (
                           <div className="flex flex-col gap-6">
                              {currentProjects.map((project, index) => (
                                 <div
                                    key={`${project.name}-${index}`}
                                    className="grid sm:grid-cols-[1.2fr,0.8fr] grid-cols-1 gap-6 bg-black-300/40 border border-white/15 rounded-2xl p-6 shadow-xl shadow-black/30"
                                 >
                                    <div>
                                       <h4 className="text-2xl font-bold text-white drop-shadow-lg">
                                          {project.name}
                                       </h4>
                                       {project.description ? (
                                          <p className="text-white-700 mt-3 text-base leading-relaxed">
                                             {project.description}
                                          </p>
                                       ) : null}

                                       {project.impact?.length ? (
                                          <ul className="list-disc pl-5 mt-4 text-white-700 space-y-2.5 text-sm leading-relaxed">
                                             {project.impact.map(
                                                (point, pointIndex) => (
                                                   <li key={pointIndex}>
                                                      {point}
                                                   </li>
                                                )
                                             )}
                                          </ul>
                                       ) : null}
                                    </div>

                                    <div className="flex flex-col justify-between gap-5 bg-black-200/50 border border-white/15 rounded-2xl p-5 shadow-inner">
                                       {project.links?.length ? (
                                          <div className="space-y-2">
                                             <p className="text-xs uppercase tracking-[0.35em] text-white-600 font-semibold">
                                                Live Artifacts
                                             </p>
                                             {project.links.map(
                                                (link, linkIndex) => (
                                                   <a
                                                      key={linkIndex}
                                                      className="flex items-center gap-2 text-sm text-white-700 hover:text-white transition-colors font-medium"
                                                      href={link.url}
                                                      target="_blank"
                                                      rel="noreferrer"
                                                   >
                                                      <span>{link.label}</span>
                                                      <img
                                                         src="/assets/arrow-up.webp"
                                                         alt="arrow"
                                                         className="w-3 h-3"
                                                      />
                                                   </a>
                                                )
                                             )}
                                          </div>
                                       ) : null}

                                       {project.technologies?.length ? (
                                          <div className="space-y-2">
                                             <p className="text-xs uppercase tracking-[0.35em] text-white-600 font-semibold">
                                                Tech Stack
                                             </p>
                                             <div className="flex flex-wrap gap-2">
                                                {project.technologies.map(
                                                   (tech, techIndex) => (
                                                      <span
                                                         key={techIndex}
                                                         className="text-xs uppercase tracking-wide text-white-700 bg-black-200/80 border border-white/20 px-3 py-1.5 rounded-full font-medium shadow-sm"
                                                      >
                                                         {tech}
                                                      </span>
                                                   )
                                                )}
                                             </div>
                                          </div>
                                       ) : null}
                                    </div>
                                 </div>
                              ))}
                           </div>
                        ) : null}
                     </div>
                  </div>

                  <div
                     className="border border-black-300 bg-black-200/80 rounded-3xl relative overflow-hidden shadow-2xl shadow-black/40"
                     onPointerEnter={() =>
                        handleExperienceFocus(currentExperience)
                     }
                  >
                     <Canvas camera={{ position: [0, 1.6, 12], fov: 40 }}>
                        <ambientLight intensity={Math.PI} />
                        <spotLight
                           position={[3, 9.5, 5.2]}
                           angle={0.22}
                           penumbra={1}
                           intensity={1.1}
                        />
                        <directionalLight
                           position={[0, 7, 9.5]}
                           intensity={0.65}
                        />
                        <Suspense fallback={<CanvasLoader />}>
                           <group position={[0, -0.75, 0]}>
                              <Developer
                                 position-y={-1.7}
                                 position-z={-1.15}
                                 scale={3.1}
                                 animationName={animationName}
                                 rotation={[0.16, 0.02, 0]}
                              />
                           </group>
                        </Suspense>
                        <OrbitControls
                           enableZoom={false}
                           maxPolarAngle={Math.PI / 2.2}
                           minPolarAngle={Math.PI / 3.2}
                           enablePan={false}
                        />
                     </Canvas>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WorkExperience;
