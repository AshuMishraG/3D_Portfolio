import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Loading.jsx";
import { workExperiences } from "../constants/index.js";

const WorkExperience = () => {
   const [animationName, setAnimationName] = useState("idle");

   return (
      <section className="c-space my-20" id="work">
         <div className="w-full text-white-600">
            <p className="head-text text-center shining-gradient">
               My Work Experience
            </p>

            <div className="work-container">
               <div className="work-canvas">
                  <Canvas>
                     <ambientLight intensity={7} />
                     <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                     />
                     <directionalLight position={[10, 10, 10]} intensity={1} />
                     <OrbitControls
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                     />

                     <Suspense fallback={<CanvasLoader />}>
                        <Developer
                           position-y={-2.5}
                           position-z={-1.5}
                           scale={3}
                           animationName={animationName}
                           rotation={[0.4, 0, 0]}
                        />
                     </Suspense>
                  </Canvas>
               </div>

               <div className="work-content">
                  <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                     {workExperiences.map((item, index) => (
                        <div
                           key={index}
                           onClick={() =>
                              setAnimationName(item.animation.toLowerCase())
                           }
                           onPointerOver={() =>
                              setAnimationName(item.animation.toLowerCase())
                           }
                           onPointerOut={() => setAnimationName("idle")}
                           className="work-content_container group"
                        >
                           <div className="flex flex-col h-full justify-start items-center py-2">
                              <div className="work-content_logo">
                                 <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    <img
                                       className="w-full h-full"
                                       src={item.icon}
                                       alt={item.name}
                                    />
                                 </a>
                              </div>

                              <div className="work-content_bar" />
                           </div>

                           <div className="sm:p-5 px-2.5 py-5">
                              <p className="font-bold text-white-800">
                                 {item.name}
                              </p>
                              <p className="text-sm mb-5">
                                 {item.pos} -- <span>{item.duration}</span>
                              </p>
                              <ul className="list-disc pl-5 group-hover:text-white transition-all ease-in-out duration-500">
                                 {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WorkExperience;
