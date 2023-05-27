import React from "react";
import vertexShader from "../shaders/pattern1/vertex.glsl";
import fragmentShader from "../shaders/pattern1/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern1 = () => {
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
