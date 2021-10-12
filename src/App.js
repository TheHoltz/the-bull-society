import "./App.css";

// 1- Import canvas
import { Canvas } from "@react-three/fiber";

// 2- Import the model
import Chest from "./components/Three/Chest";

// 3- Suspense is needed for the model to be loaded
import { Suspense } from "react";

// 4- Custom lights definition
import Lights from "./components/Three/Lights";

// 5- Custom floor
import Floor from "./components/Three/Floor";

import { OrbitControls, softShadows } from "@react-three/drei";

softShadows();

function App() {
  return (
    <>
      <Canvas
        colorManagement
        shadows
        camera={{ position: [-5, 4, 4], fov: 40 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Chest />

          <Floor />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
