import React from "react";

function Lights() {
  return (
    <>
      <fog attach="fog" args={["#fff", 0, 22]} />
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[-8, 16, -8]}
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
      <pointLight position={[0, 50, 0]} intensity={2} />
    </>
  );
}

export default Lights;
