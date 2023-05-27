import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Pattern1 } from "./components/Pattern1";
import { Pattern2 } from "./components/Pattern2";
import { Pattern3 } from "./components/Pattern3";
import { Pattern4 } from "./components/Pattern4";
import { Pattern5 } from "./components/Pattern5";
import { Pattern6 } from "./components/Pattern6";
import { Pattern7 } from "./components/Pattern7";
import { Pattern8 } from "./components/Pattern8";
import { Pattern9 } from "./components/Pattern9";
import { Pattern10 } from "./components/Pattern10";
import { Pattern11 } from "./components/Pattern11";
import { Pattern12 } from "./components/Pattern12";
import { Pattern13 } from "./components/pattern13";
import { Pattern14 } from "./components/pattern14";
import { Pattern15 } from "./components/pattern15";
import { Pattern16 } from "./components/pattern16";
import { Pattern17 } from "./components/pattern17";
import { Pattern18 } from "./components/pattern18";
import { Pattern19 } from "./components/pattern19";
import { Pattern20 } from "./components/pattern20";
import { Pattern21 } from "./components/pattern21";
import { Pattern22 } from "./components/pattern22";
import { Pattern23 } from "./components/pattern23";
import { Pattern24 } from "./components/pattern24";
import { Pattern25 } from "./components/pattern25";
import { Pattern26 } from "./components/pattern26";
import { Pattern27 } from "./components/pattern27";
import { Pattern28 } from "./components/pattern28";
import { Pattern29 } from "./components/pattern29";
import { Pattern30 } from "./components/pattern30";
import { Pattern31 } from "./components/pattern31";
import { Pattern32 } from "./components/pattern32";
import { Pattern33 } from "./components/pattern33";
import { Pattern34 } from "./components/pattern34";
import { Pattern35 } from "./components/pattern35";
import { Pattern36 } from "./components/pattern36";
import { Pattern37 } from "./components/pattern37";
import { Pattern38 } from "./components/pattern38";
import { Pattern39 } from "./components/pattern39";
import { Pattern40 } from "./components/pattern40";
import { Pattern41 } from "./components/pattern41";
import { Pattern42 } from "./components/pattern42";
import { Pattern43 } from "./components/pattern43";
import { Pattern44 } from "./components/pattern44";
import { Pattern45 } from "./components/pattern45";
import { Pattern47 } from "./components/pattern47";
import { Pattern46 } from "./components/pattern46";
import { Pattern48 } from "./components/pattern48";
import { Pattern49 } from "./components/pattern49";
import { Pattern50 } from "./components/pattern50";
import { Sea } from "./components/Sea";
import { Bos1 } from "./components/Bos1";
import { Bos3 } from "./components/Bos3";

function App() {
  return (
    <Container>
      <Canvas>
        <OrbitControls />
        <PerspectiveCamera
          makeDefault
          position={[2, 0, 0]}
        />
        <Center>
          <Bos3 />
        </Center>
      </Canvas>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
