import React from "react";
import vertexShader from "../shaders/pattern4/vertex.glsl";
import fragmentShader from "../shaders/pattern4/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern4 = () => {
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
