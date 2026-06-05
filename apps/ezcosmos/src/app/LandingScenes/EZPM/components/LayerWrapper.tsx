import { JSX, useRef, useLayoutEffect } from 'react';
import { BoxHelper } from 'three';
import { useThree } from '@react-three/fiber';

export function LayerWrapper({
  children,
  showBounds = true,
  showAxes = true,
  ...props
}: JSX.IntrinsicElements['group'] & {
  showBounds?: boolean;
  showAxes?: boolean;
}) {
  const ref = useRef<any>(null);
  const { scene } = useThree();

  useLayoutEffect(() => {
    if (ref.current && showBounds) {
      const helper = new BoxHelper(ref.current, 0xff00ff);
      scene.add(helper);
      return () => {
        scene.remove(helper);
      };
    }
  }, [ref.current, scene, showBounds]);

  return (
    <group ref={ref} {...props}>
      {showAxes && <axesHelper args={[2]} />}
      {children}
    </group>
  );
}
