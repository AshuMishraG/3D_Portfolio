import { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useVideoTexture } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const DemoComputer = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/computer.glb");
  const { actions } = useAnimations(animations, group);

  const txt = useVideoTexture(
    props.texture ? props.texture : "/textures/project/project1.mp4",
  );

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, [txt]);


