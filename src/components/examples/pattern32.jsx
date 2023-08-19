import React from "react";
import vertexShader from "../shaders/pattern32/vertex.glsl";
import fragmentShader from "../shaders/pattern32/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern32 = () => {
  return (
    <mesh>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        side={DoubleSide}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};
