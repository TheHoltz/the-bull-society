import React, { useRef } from "react";

function Lights() {
  const ref = useRef();

  return (
    <>
      <fog attach="fog" args={["#000", 0, 2000]} />

      <ambientLight intensity={1} />
      <directionalLight
        ref={ref}
        position={[200, 200, 200]}
        intensity={0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[50, 500, 0]} intensity={5} />
    </>
  );
}

export default Lights;
