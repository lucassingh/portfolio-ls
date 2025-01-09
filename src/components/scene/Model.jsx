import React, { useRef } from 'react';
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export default function Model() {

    const { nodes } = useGLTF('/media/torrus.glb');
    const { viewport } = useThree();

    const torus = useRef();
    const groupRef = useRef();

    useFrame((_state, delta) => {
        if (torus.current) {
            torus.current.rotation.x += 0.02;
        }

        if (groupRef.current) {
            const targetScale = viewport.width / 3.75;
            const currentScale = groupRef.current.scale;

            if (currentScale.x < targetScale) {
                const scaleSpeed = delta * 2;
                currentScale.x = Math.min(currentScale.x + scaleSpeed, targetScale);
                currentScale.y = Math.min(currentScale.y + scaleSpeed, targetScale);
                currentScale.z = Math.min(currentScale.z + scaleSpeed, targetScale);
            }
        }
    });

    const materialProps = {
        thickness: 0.3,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    };

    return (
        <group ref={groupRef} scale={[0.5, 0.5, 0.5]}>
            <Text
                font={'/fonts/PPNeueMontreal-Bold.otf'}
                position={[0, 0, -1]}
                fontSize={0.6}
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                Lucas Singh
            </Text>
            <mesh ref={torus} geometry={nodes.Torus002.geometry}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    );
}
