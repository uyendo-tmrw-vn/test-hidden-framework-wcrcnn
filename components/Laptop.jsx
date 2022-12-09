import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ ProjectRef, src }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/browser.gltf");
  useEffect(() => {
    ProjectRef.current.addEventListener("mousemove", rotatModel);
  }, []);

  const rotatModel = (e) => {
    const target = e.target;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let windowWidth = ProjectRef.current.clientWidth / 2;
    group.current.rotation.y =
      (((x % (2 * windowWidth)) - windowWidth) / windowWidth) * 0.8;
  };
  materials["Frame.001"].color = { r: 0, g: 0, b: 0 };
  materials.Buttons.color = { r: 0, g: 0, b: 0 };
  const img = new Image();
  img.src = "/stonks.png";
  materials["Screen.001"].map.image = img;

  return (
    <group scale={[1.8, 1.8, 1.8]} ref={group} dispose={null}>
      <mesh
        geometry={nodes.Frame.geometry}
        material={materials["Frame.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Screen.geometry}
        material={materials["Screen.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Buttons.geometry}
        material={materials.Buttons}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/browser.gltf");

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, -5]} intensity={1} />
      <directionalLight position={[-10, 0, 2]} intensity={1.5} />
    </>
  );
};

const Laptop = ({ ProjectRef, src }) => {
  return (
    <Canvas>
      <Lights />
      <Suspense fallback={null}>
        <Model ProjectRef={ProjectRef} />
      </Suspense>
    </Canvas>
  );
};

export default Laptop;
