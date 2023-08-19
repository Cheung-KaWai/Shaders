import React from "react";
import vertexShader from "../shaders/pattern7/vertex.glsl";
import fragmentShader from "../shaders/pattern7/fragment.glsl";
import { DoubleSide } from "three";

export const Pattern7 = () => {
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
