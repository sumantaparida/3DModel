import React, { lazy, Fragment, Suspense } from 'react';
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Picker = lazy(() => import('../Picker/Loadable'));
const Shoe = lazy(() => import('../Shoe/Loadable'));

function ShoeModel(props) {
  const { state } = props || {};
  return (
    <Fragment>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 20, 10]} castShadow />
      <Suspense fallback={null}>
        <Shoe state={state} />
        <Environment preset="sunset" />
        <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
    {/* NOTE: Picker */}
    <Suspense fallback={null}>
      <Picker state={state} />
    </Suspense>
    </Fragment>
  );
};

export default ShoeModel;