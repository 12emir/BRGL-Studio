import * as THREE from "three";
import React, { useCallback, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { perlin3 } from "../../helpers/noise.js";
import Balls from "./Balls.js";
import dynamic from "next/dynamic";
const Effects = dynamic(() => import("@/BlobCanvas/Effects"), { ssr: false });

const AnimatedGeometry = () => {
  const sphereGeometryRef = useRef();
  const inputScale = 1.3;

  useFrame(({ clock }) => {
    const sphereGeometry = sphereGeometryRef.current;
    const { vertices } = sphereGeometry;
    const time = clock.getElapsedTime();

    for (let i = 0, verticesLength = vertices.length; i < verticesLength; i++) {
      const p = vertices[i];
      p.normalize().multiplyScalar(
        1 +
          0.4 *
            perlin3(
              p.x * inputScale + time,
              p.y * inputScale - time,
              p.z * inputScale
            )
      );
    }

    sphereGeometry.verticesNeedUpdate = true;
    sphereGeometry.computeVertexNormals();
    sphereGeometry.normalsNeedUpdate = true;
  });

  return (
    <mesh castShadow position={[0, 0, 0]} scale={[17.5, 17.5, 17.5]}>
      <sphereGeometry
        attach='geometry'
        args={[65, 65, 65]}
        ref={sphereGeometryRef}
      />
      <meshPhongMaterial attach='material' color='darkgrey' shininess='300' />
    </mesh>
  );
};

function BlobCanvas() {
  const mouse = useRef([0, 0]);
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );

  return (
    <div className=' h-screen bg-gray-200' onMouseMove={onMouseMove}>
      <Canvas colorManagement camera={{ fov: 75, position: [0, 0, 65] }}>
        <color attach='background' args={["white"]} />

        <AnimatedGeometry />
        <Balls mouse={mouse} />

        <ambientLight castShadow intensity={1.2} />
        <pointLight castShadow position={[33, 33, 33]} intensity={4} />
        <Effects />
      </Canvas>
    </div>
  );
}

export default BlobCanvas;
