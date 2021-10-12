import "./App.css";

// 1- Import canvas
import { Canvas } from "@react-three/fiber";

// 2- Import the model
import Bull from "./components/Three/Bull";

// 3- Suspense is needed for the model to be loaded
import { Suspense } from "react";

// 4- Custom lights definition
import Lights from "./components/Three/Lights";

import { OrbitControls, softShadows } from "@react-three/drei";
import About from "./components/About/About";

import AnimatedCursor from "react-animated-cursor";

softShadows();

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={25}
        color="255,255,255"
        outerScale={3}
      />

      <About />
      <Canvas
        colorManagement
        shadows
        camera={{ position: [-900, 0, -500], fov: 60, near: 1, far: 4000 }}
      >
        <Lights />
        <Suspense fallback={null}>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Bull rotation={[1, i / 1.1, 1]} key={`bull-${i}`} />
          ))}

          <OrbitControls />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
