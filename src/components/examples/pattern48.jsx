import React from "react";
import vertexShader from "../shaders/pattern48/vertex.glsl";
import fragmentShader from "../shaders/pattern48/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern48 = () => {
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
