import { OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { StepMixSmoothStep } from "../examples/StepMixSmoothstep";
import { Fract } from "../examples/Fract";
import { Lights } from "../examples/Lights";
import { VertexShader } from "../examples/VertexShader";
import { Sphere } from "../examples/Sphere";

export const Scene = () => {
  return (
    <Container>
      <Canvas>
        <Sphere />
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
