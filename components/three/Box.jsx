import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'

export default function Box(props) {
  const mesh = useRef()

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <Icosahedron
      args={[1, 1, 1]}
      {...props}
      ref={mesh}
    >
      <meshBasicMaterial
        attach="material"
        // color='#FFFFFF'
        wireframe
      />
    </Icosahedron>
  )
}
