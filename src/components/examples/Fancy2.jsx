import React, { useRef } from "react";
import vertexShader from "../shaders/fancy2/vertex.glsl";
import fragmentShader from "../shaders/fancy2/fragment.glsl";
import { DoubleSide } from "three";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

const FancyShaderMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ FancyShaderMaterial });

export const Fancy2 = () => {
  const shader = useRef();

  useFrame(({ clock }) => {
    if (shader.current) shader.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh
      ref={shader}
      // rotation={[Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[1, 1, 512, 512]} />
      <fancyShaderMaterial side={DoubleSide} />
    </mesh>
  );
};
