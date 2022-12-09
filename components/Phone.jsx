import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ ProjectRef, src }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/iphone.gltf");
  useEffect(() => {
    ProjectRef.current.addEventListener("mousemove", rotatModel);
  }, []);

  const rotatModel = (e) => {
    const target = e.target;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let windowWidth = ProjectRef.current.clientWidth / 2;
    group.current.rotation.y =
      ((x % (2 * windowWidth)) - windowWidth) / windowWidth;
  };

  materials.Frame.color = { r: 0, g: 0, b: 0 };
  const img = new Image();
  img.src = "/stonks.png";
  materials.Screen.map.image = img;

  return (
    <group scale={[1.2, 1.2, 1.2]} ref={group} dispose={null}>
      <mesh geometry={nodes.Frame.geometry} material={materials.Frame} />
      <mesh geometry={nodes.Screen.geometry} material={materials.Screen} />
      <mesh geometry={nodes.Logo.geometry} material={materials.Logo} />
    </group>
  );
}

useGLTF.preload("/iphone.gltf");

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, -5]} intensity={1} />
      <directionalLight position={[-10, 0, 2]} intensity={1.5} />
    </>
  );
};

const Phone = ({ ProjectRef, src }) => {
  return (
    <Canvas>
      <Lights />
      <Suspense fallback={null}>
        <Model ProjectRef={ProjectRef} />
      </Suspense>
    </Canvas>
  );
};

export default Phone;
