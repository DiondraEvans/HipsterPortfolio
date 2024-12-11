/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/Monkey/MonkeyPlane.glb 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

const Monkey = (props) => {
  const { nodes, materials} = useGLTF('./Monkey/MonkeyPlane.glb')
   
  return (
    <group {...props} dispose={null} scale={1.30} rotation={[0,-0.5,0.5]}>
      <mesh recieveShadow geometry={nodes.Plane.geometry} material={materials['plane material']}  position={[0, 0, 0]}/>
      <mesh castShadow geometry={nodes.Suzanne.geometry} material={materials['Monkey Material']} position={[0, 0.289, 0]} rotation={[0, 1.112, 0]} scale={0.154} />
    </group>
  )
}
export default Monkey;
useGLTF.preload('./Monkey/MonkeyPlane.glb')
