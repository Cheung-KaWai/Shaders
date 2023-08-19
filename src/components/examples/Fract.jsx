import { shaderMaterial, useTexture } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import vertex from "../../shaders/fracts/vertex.glsl";
import fragment from "../../shaders/fracts/fragment.glsl";
import { extend, useThree } from "@react-three/fiber";
import { Vector2 } from "three";
const CustomShaderMaterial = shaderMaterial(
  {
    uResolution: null,
    uTexture: null,
  },
  vertex,
  fragment
);

extend({ CustomShaderMaterial });
export const Fract = () => {
  const { viewport } = useThree();

  const osaka = useTexture("/osaka.jpg");

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <customShaderMaterial
        uResolution={new Vector2(viewport.width, viewport.height)}
        uTexture={osaka}
      />
    </mesh>
  );
};
