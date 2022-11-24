import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './Box'
import styles from '../../styles/Three.module.css'

const BoxesPage = () => {
    return (
        <div className={styles.torus}>
          <Canvas camera={{ position: [2, 0, 1.5] }}>
            <ambientLight intensity={1} />
            <pointLight position={[40, 40, 40]} />
            <Box position={[2, 0, 0]} />
            <OrbitControls />
          </Canvas>
        </div>
    )
}

export default BoxesPage