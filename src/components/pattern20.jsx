import React from "react";
import vertexShader from "../shaders/pattern20/vertex.glsl";
import fragmentShader from "../shaders/pattern20/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern20 = () => {
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
