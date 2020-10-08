import ReactDOM from "react-dom";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import styled from "styled-components";
import tw from "twin.macro";
import { motion } from "framer-motion";
import { TweenLite } from "gsap";

const Container = tw.div`relative h-screen w-screen bg-gray-100`;

const ThreeFiber = () => {
  const meshh = useRef();

  useEffect(() => {
    TweenLite.to(meshh.position, 1, {
      x: 1000,
      onComplete: console.log("finish"),
    });
  });
  return (
    <Container>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <group ref={meshh} position={[1, 1, 2]}>
          <mesh>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"orange"} />
          </mesh>
        </group>
      </Canvas>
    </Container>
  );
};

export default ThreeFiber;
