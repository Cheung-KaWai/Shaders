import React from "react";
import vertexShader from "../shaders/pattern2/vertex.glsl";
import fragmentShader from "../shaders/pattern2/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern2 = () => {
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
