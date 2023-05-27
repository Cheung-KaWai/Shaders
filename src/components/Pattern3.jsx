import React from "react";
import vertexShader from "../shaders/pattern3/vertex.glsl";
import fragmentShader from "../shaders/pattern3/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern3 = () => {
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
