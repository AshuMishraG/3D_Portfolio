import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
   const [hasCopied, setHasCopied] = useState(false);

   const handleCopy = () => {
      navigator.clipboard.writeText(" aashutoshm77@gmail.com ");
      setHasCopied(true);

      setTimeout(() => {
         setHasCopied(false);
      }, 2000);
   };

   return (
      <section className="c-space my-20" id="about">
         <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
               <div className="grid-container">
                  <img
                     src="assets/grid1.webp"
                     alt="grid-1"
                     className="w-full sm:h-[276px] h-fit object-contain"
                  />

                  <div>
                     <p className="grid-headtext text-center shining-gradient">
                        Hi, I&apos;m Ashutosh Mishra
                     </p>
                     <p className="grid-subtext">
                        With Industry Experience, I have honed my skills in
                        full-stack development, AI products, and 3D models for
                        Metaverse.
                     </p>
                     <div className="mt-10">
                        <a href="#home" className="w-full">
                           <Button
                              name="Back to Home"
                              isBeam
                              containerClass="w-full"
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
               <div className="grid-container">
                  <img
                     src="assets/grid2.webp"
                     alt="grid-2"
                     className="w-full sm:h-[276px] h-fit object-contain"
                  />

                  <div>
                     <p className="grid-headtext text-center shining-gradient">
                        Tech Stack
                     </p>
                     <p className="grid-subtext">
                        I specialize in a variety of languages, frameworks, and
                        tools that allow me to build robust and scalable
                        applications. For details, check out my socials and CV.
                     </p>
                     <div className="mt-5">
                        <a href="#work" className="w-full">
                           <Button
                              name="View Experience"
                              isBeam
                              containerClass="w-full"
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
               <div className="grid-container">
                  <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                     <Globe
                        height={326}
                        width={326}
                        backgroundColor="rgba(0, 0, 0, 0)"
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[
                           {
                              lat: 40,
                              lng: -100,
                              text: "Rjieka, Croatia",
                              color: "white",
                              size: 15,
                           },
                        ]}
                     />
                  </div>
                  <div className="mt-20">
                     <p className="grid-headtext text-center shining-gradient">
                        I&apos;m very flexible with Time Zone communications &
                        locations
                     </p>
                     <p className="grid-subtext">
                        I&apos;m based in New Delhi, India and open to Remote
                        Work Worldwide.
                     </p>
                     <div className="mt-20">
                        <a href="#contact" className="w-full">
                           <Button
                              name="Contact Me"
                              isBeam
                              containerClass="w-full"
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
               <div className="grid-container">
                  <img
                     src="assets/grid3.webp"
                     alt="grid-3"
                     className="w-full sm:h-[266px] h-fit object-contain"
                  />

                  <div>
                     <p className="grid-headtext text-center shining-gradient">
                        My Passion for Coding
                     </p>
                     <p className="grid-subtext">
                        Watching my dad work on the computer as a kid inspired
                        me to become a Software Engineer. My passion to put my
                        own hands-on skills and knowledge to the test in order
                        to get better results has brought me to the point where
                        I am today. My dream is to disruptively innovate the IT
                        Industry and meet and exceed the customer needs and
                        expectations.
                     </p>
                  </div>
               </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
               <div className="grid-container">
                  <img
                     src="assets/computer.webp"
                     alt="grid-4"
                     className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                  />

                  <div className="space-y-2">
                     <p className="grid-subtext text-center">Contact me</p>
                     <div className="copy-container" onClick={handleCopy}>
                        <img
                           src={
                              hasCopied ? "assets/tick.svg" : "assets/copy.svg"
                           }
                           alt="copy"
                        />
                        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                           aashutoshm77@gmail.com
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
