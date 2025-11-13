import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
   const targetRef = useRef();

   useGSAP(() => {
      if (!targetRef.current) return;
      const initialY = targetRef.current.position.y;
      gsap.to(targetRef.current.position, {
         y: initialY + 0.45,
         duration: 1.6,
         ease: "sine.inOut",
         repeat: -1,
         yoyo: true,
      });
   });

   return (
      <group
         {...props}
         ref={targetRef}
         rotation={[0, Math.PI / 5, 0]}
         scale={1.65}
      >
         <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.95, 0.07, 24, 90]} />
            <meshStandardMaterial color="#ffffff" />
         </mesh>
         <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.68, 0.07, 24, 90]} />
            <meshStandardMaterial color="#f97373" />
         </mesh>
         <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.43, 0.07, 24, 90]} />
            <meshStandardMaterial color="#ffffff" />
         </mesh>
         <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.18, 0.07, 24, 90]} />
            <meshStandardMaterial color="#f97373" />
         </mesh>
         <mesh position={[0, -0.65, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1.3, 24]} />
            <meshStandardMaterial color="#1f1f1f" />
         </mesh>
      </group>
   );
};

export default Target;
