import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Box from '../box';
import Cone from '../cone';
import Cylinder from '../cylinder';
const Shape = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas resize>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback='null'>
          <Cylinder position={[-6, 0, 0]} />
          <Box position={[0, 0, 0]} />
          <Cone position={[6, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Shape;
