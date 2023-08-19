import React from "react";
import vertexShader from "../shaders/pattern9/vertex.glsl";
import fragmentShader from "../shaders/pattern9/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern9 = () => {
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
