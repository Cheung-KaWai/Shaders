import { useTexture } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import vertexShader from "../shaders/transition/vertex.glsl";
import fragmentShader from "../shaders/transition/fragment.glsl";
import { useFrame } from "@react-three/fiber";
import { SRGBColorSpace } from "three";
import { useTransitionStore } from "../store/store";
import { easing } from "maath";

export const Transition = () => {
  const cubeRef = useRef();
  const textureName = useTransitionStore((store) => store.textureName);
  const color1 = useTexture(`/textures/color1.jpg`);
  const color2 = useTexture(`/textures/${textureName}`);

  const uniforms = useMemo(
    () => ({
      uTime: 0,
      uTexture: { value: 0.0 },
      uTexture2: { value: 0.0 },
      uProgress: { value: 1.0 },
      uTest: { value: "color1" },
    }),
    []
  );

  useEffect(() => {
    //changing texture
    color2.flipY = false;
    color2.colorSpace = SRGBColorSpace;
    cubeRef.current.material.uniforms.uTexture.value = cubeRef.current.material.uniforms.uTexture2.value;
    cubeRef.current.material.uniforms.uTexture2.value = color2;
    cubeRef.current.material.uniforms.uTest.value = textureName;
    cubeRef.current.material.uniforms.uProgress.value = 0.0;
  }, [textureName]);

  useEffect(() => {
    //set initial texture
    color1.flipY = false;
    color1.colorSpace = SRGBColorSpace;
    cubeRef.current.material.uniforms.uTexture.value = color1;
  }, []);

  useFrame((state, delta) => {
    easing.damp(cubeRef.current.material.uniforms.uProgress, "value", 1, 1, delta);
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};
