'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { SpaceSkyPlanet } from './layers/SpaceSkyPlanet';
import { FarMountains } from './layers/FarMountains';
import { VolcanoLeft } from './layers/VolcanoLeft';
import { VolcanoRight } from './layers/VolcanoRight';
import { LavaPlain } from './layers/LavaPlain';
import { FuturisticCity } from './layers/FuturisticCity';
import { EzPmSphere } from './layers/EzPmSphere';

export default function EZPMCalibration() {
  return (
    <Canvas camera={{ position: [0, 2, 18], fov: 35 }}>
      <ambientLight intensity={0.5} />
      <OrbitControls target={[0, 0, 0]} />

      <SpaceSkyPlanet position={[0,0,0]} scale={1} />
      <FarMountains position={[0,0,0]} scale={1} />
      <VolcanoLeft position={[0,0,0]} scale={1} />
      <VolcanoRight position={[0,0,0]} scale={1} />
      <LavaPlain position={[0,0,0]} scale={1} />
      <FuturisticCity position={[0,0,0]} scale={1} />
      <EzPmSphere position={[0,0,0]} scale={1} />
    </Canvas>
  );
}
