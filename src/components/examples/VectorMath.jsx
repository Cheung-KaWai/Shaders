import { shaderMaterial, useTexture } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import vertex from "../../shaders/vectorMaths/vertex.glsl";
import fragment from "../../shaders/vectorMaths/fragment.glsl";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { Vector2 } from "three";
const CustomShaderMaterial = shaderMaterial(
  {
    uResolution: null,
    uTexture: null,
    uTime: null,
  },
  vertex,
  fragment
);

extend({ CustomShaderMaterial });

export const VectorMaths = () => {
  const { viewport } = useThree();
  const osaka = useTexture("/osaka.jpg");
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  console.log("rerender");

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <customShaderMaterial
        uResolution={new Vector2(viewport.width, viewport.height)}
        uTexture={osaka}
      />
    </mesh>
  );
};
