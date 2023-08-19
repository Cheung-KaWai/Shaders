import React, { useState } from "react";
import vertex from "../../shaders/stepMixSmoothStep/vertex.glsl";
import fragment from "../../shaders/stepMixSmoothStep/fragment.glsl";
import { DoubleSide } from "three";
import { extend, useThree } from "@react-three/fiber";
import { shaderMaterial, useTexture } from "@react-three/drei";

const CustomShaderMaterial = shaderMaterial(
  {
    uTexture: null,
  },
  vertex,
  fragment
);

extend({ CustomShaderMaterial });

export const StepMixSmoothStep = () => {
  const { viewport } = useThree();

  const osaka = useTexture("/osaka.jpg");
  console.log(osaka);

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <customShaderMaterial uTexture={osaka} />
    </mesh>
  );
};
