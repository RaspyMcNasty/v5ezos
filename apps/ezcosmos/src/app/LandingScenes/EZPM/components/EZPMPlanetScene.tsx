'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

import { EZPM_CONFIG } from './EZPM.config';

import { SpaceSkyPlanet } from './layers/SpaceSkyPlanet';
import { FarMountains } from './layers/FarMountains';
import { VolcanoLeft } from './layers/VolcanoLeft';
import { VolcanoRight } from './layers/VolcanoRight';
import { LavaPlain } from './layers/LavaPlain';
import { FuturisticCity } from './layers/FuturisticCity';
import { EzPmSphere } from './layers/EzPmSphere';

export function EZPMPlanetScene() {
  const config = EZPM_CONFIG as any;

  return (
    <Canvas camera={{ position: [0, 4, 12], fov: 45 }}>
      <ambientLight intensity={0.4} />

      <Suspense fallback={null}>
       
        <LavaPlain {...config.LavaPlain} />
       

        <OrbitControls enablePan={false} />
      </Suspense>
    </Canvas>
  );
}
