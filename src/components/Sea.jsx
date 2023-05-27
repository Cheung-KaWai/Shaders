import React, { useRef } from "react";
import vertexShader from "../shaders/sea/vertex.glsl";
import fragmentShader from "../shaders/sea/fragment.glsl";
import { Color, DoubleSide, Vector2 } from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useUniforms } from "../hooks/useUniforms";

const SeaMaterial = shaderMaterial(
  {
    uBigWaveElevation: 0.2,
    uBigWaveFrequencyX: 4.0,
    uBigWaveFrequencyY: 1.5,
    uBigWaveSpeed: 1,
    uTime: 0,
    uDepthColor: new Color(),
    uSurfaceColor: new Color(),
    uColorMultiplier: 5.0,
    uColorOffset: 0.5,
    uSmallWaveElevation: 0.15,
    uSmallWaveFrequency: 3.0,
    uSmallWaveSpeed: 0.2,
    uSmallWaveIteration: 4.0,
  },
  vertexShader,
  fragmentShader
);

extend({ SeaMaterial });

export const Sea = () => {
  const water = useRef();

  useFrame(({ clock }) => {
    if (water.current) water.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  const uniforms = useUniforms();

  return (
    <mesh
      rotation={[Math.PI / 2, 0, 0]}
      ref={water}
    >
      <planeGeometry args={[10, 10, 512, 512]} />
      <seaMaterial
        transparent={true}
        side={DoubleSide}
        {...uniforms}
      />
    </mesh>
  );
};
