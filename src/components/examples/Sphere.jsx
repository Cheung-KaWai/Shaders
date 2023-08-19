import { OrbitControls, shaderMaterial, useTexture } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import vertex from "../../shaders/sphere/vertex.glsl";
import fragment from "../../shaders/sphere/fragment.glsl";
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

export const Sphere = () => {
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
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 128]} />
        <customShaderMaterial
          uResolution={new Vector2(viewport.width, viewport.height)}
          uTexture={osaka}
          // wireframe
        />
      </mesh>
      <OrbitControls />
    </>
  );
};
