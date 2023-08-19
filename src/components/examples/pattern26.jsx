import React from "react";
import vertexShader from "../shaders/pattern26/vertex.glsl";
import fragmentShader from "../shaders/pattern26/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern26 = () => {
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
