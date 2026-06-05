import { JSX } from 'react';
import { useGLTF } from '@react-three/drei';

const PATH = '/models/PM/VolcanoRight.glb';

export function VolcanoRight(props: JSX.IntrinsicElements['group']) {
  const gltf = useGLTF(PATH);

  const root =
    gltf?.scene ||
    gltf?.scenes?.[0] ||
    gltf?.scene?.children?.[0];

  if (!root) {
    console.warn('VolcanoRight failed to load:', gltf);
    return null;
  }

  return <primitive object={root} {...props} />;
}

useGLTF.preload(PATH);
