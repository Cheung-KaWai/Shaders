import React from "react";
import vertexShader from "../shaders/pattern8/vertex.glsl";
import fragmentShader from "../shaders/pattern8/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern8 = () => {
  return (
    <mesh>
      <planeGeometry args={[1, 1, 30, 30]} />
      <shaderMaterial
        side={DoubleSide}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};
