'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'
import SceneReveal from '../paint/scenereveal';
import Text from '../paint/Text';

export default function Index() {

    return (
        <>
            <div className="w-full h-full absolute inset-0 -z-10">
                <Canvas className='w-full h-full' >
                    <Model />
                    <directionalLight intensity={2} position={[0, 2, 3]} />
                    <Environment preset="city" />
                </Canvas>
                <div className="flex w-full h-screen items-center justify-center cursor-grabbing">
                    <Text />
                    <SceneReveal />
                </div>
            </div>
        </>
    );
}
