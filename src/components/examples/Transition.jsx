import { useTexture } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import vertexShader from "../shaders/transition/vertex.glsl";
import fragmentShader from "../shaders/transition/fragment.glsl";
import { useFrame } from "@react-three/fiber";
import { LinearSRGBColorSpace, MeshStandardMaterial, SRGBColorSpace, Vector2 } from "three";
import { useTransitionStore } from "../store/store";
import { easing } from "maath";
import CSM from "three-custom-shader-material";

export const Transition = () => {
  const cubeRef = useRef();
  const textureName = useTransitionStore((store) => store.textureName);
  const color = useTexture(`/textures/color${textureName}.jpg`);
  const roughness = useTexture(`/textures/roughness${textureName}.jpg`);
  const normal = useTexture(`/textures/normal${textureName}.jpg`);

  const uniforms = useMemo(
    () => ({
      uTime: 0,
      uTextureColor: { value: null },
      uTextureColor2: { value: null },
      uTexturNormal: { value: null },
      uTexturNormal2: { value: null },
      uTexturRoughness: { value: null },
      uTexturRoughness2: { value: null },
      uProgress: { value: 1.0 },
      uTest: { value: "color1" },
    }),
    []
  );

  //changing texture
  useEffect(() => {
    //swap color map
    color.colorSpace = SRGBColorSpace;
    cubeRef.current.material.uniforms.uTextureColor.value = cubeRef.current.material.uniforms.uTextureColor2.value;
    cubeRef.current.material.uniforms.uTextureColor2.value = color;

    //swap normal map
    normal.colorSpace = LinearSRGBColorSpace;
    cubeRef.current.material.uniforms.uTexturNormal.value = cubeRef.current.material.uniforms.uTexturNormal2.value;
    cubeRef.current.material.uniforms.uTexturNormal2.value = normal;

    //swap roughness map
    roughness.colorSpace = LinearSRGBColorSpace;
    cubeRef.current.material.uniforms.uTexturRoughness.value =
      cubeRef.current.material.uniforms.uTexturRoughness2.value;
    cubeRef.current.material.uniforms.uTexturRoughness2.value = roughness;

    cubeRef.current.material.uniforms.uProgress.value = 0.0;
  }, [textureName]);

  useEffect(() => {
    //set initial texture
    color.colorSpace = SRGBColorSpace;
    cubeRef.current.material.uniforms.uTextureColor.value = color;
    cubeRef.current.material.uniforms.uTextureColor2.value = color;

    normal.colorSpace = LinearSRGBColorSpace;
    cubeRef.current.material.uniforms.uTexturNormal.value = normal;
    cubeRef.current.material.uniforms.uTexturNormal2.value = normal;

    roughness.colorSpace = LinearSRGBColorSpace;
    cubeRef.current.material.uniforms.uTexturRoughness.value = roughness;
    cubeRef.current.material.uniforms.uTexturRoughness2.value = roughness;
  }, []);

  useFrame((state, delta) => {
    easing.damp(cubeRef.current.material.uniforms.uProgress, "value", 1, 1, delta);
  });

  return (
    <>
      <mesh ref={cubeRef}>
        <boxGeometry />
        <CSM
          baseMaterial={new MeshStandardMaterial()}
          normalMap={normal}
          silent
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh position={[1.5, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial
          map={color}
          normalMap={normal}
        />
      </mesh>
    </>
  );
};
