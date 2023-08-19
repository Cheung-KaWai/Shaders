import { OrbitControls, shaderMaterial, useTexture } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import vertex from "../../shaders/Lights/vertex.glsl";
import fragment from "../../shaders/Lights/fragment.glsl";
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

export const Lights = () => {
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
        <sphereGeometry args={[1, 64, 32]} />
        <customShaderMaterial
          uResolution={new Vector2(viewport.width, viewport.height)}
          uTexture={osaka}
        />
      </mesh>
      <OrbitControls />
    </>
  );
};
