import React, { useRef } from "react";
import vertexShader from "../shaders/clock/vertex.glsl";
import fragmentShader from "../shaders/clock/fragment.glsl";
import { DoubleSide } from "three";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

const ClockShaderMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ ClockShaderMaterial });

export const Clock = () => {
  const shader = useRef();

  useFrame(({ clock }) => {
    if (shader.current) shader.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh
      ref={shader}
      position-x={1.5}
      // rotation={[Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[1, 1, 512, 512]} />
      <clockShaderMaterial side={DoubleSide} />
    </mesh>
  );
};
