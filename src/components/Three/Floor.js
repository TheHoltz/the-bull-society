import React from 'react'

function Floor() {
    return (
        <mesh rotation={[-Math.PI/2, 0, 0]} position={[0,-1,0]} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[10, 10]} />
            <shadowMaterial attach="material" opacity={.3} />
        </mesh>
    )
}

export default Floor
