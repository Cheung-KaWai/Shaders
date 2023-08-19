import React from "react";
import vertexShader from "../shaders/pattern5/vertex.glsl";
import fragmentShader from "../shaders/pattern5/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern5 = () => {
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
