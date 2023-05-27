import React from "react";
import vertexShader from "../shaders/pattern46/vertex.glsl";
import fragmentShader from "../shaders/pattern46/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern46 = () => {
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
