/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./Monkey.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import file from "./Monkey.gltf"


export default function Model(props) {
  const { nodes, materials } = useGLTF(file)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Suzanne.geometry} material={nodes.Suzanne.material} >

      <meshLambertMaterial attach="material" color="brown" />

      </mesh>
    </group>
  )
}

useGLTF.preload(file)
