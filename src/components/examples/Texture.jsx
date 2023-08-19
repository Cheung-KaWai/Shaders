import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import vertex from "../../shaders/texture/vertex.glsl";
import fragment from "../../shaders/texture/fragment.glsl";
import React from "react";
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

export const Texture = () => {
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
