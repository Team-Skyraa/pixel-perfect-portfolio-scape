import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

function FloatingGeometry() {
  const meshRef = useRef<Mesh>(null!)
  const sphereRef = useRef<Mesh>(null!)
  const torusRef = useRef<Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    // Rotate main cube
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2
      meshRef.current.rotation.y = t * 0.3
    }
    
    // Float sphere
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t) * 0.5
      sphereRef.current.rotation.z = t * 0.4
    }
    
    // Rotate torus
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.1
      torusRef.current.rotation.y = t * 0.2
    }
  })

  return (
    <group>
      {/* Central cube */}
      <Box ref={meshRef} args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#00d4ff" transparent opacity={0.8} />
      </Box>
      
      {/* Floating sphere */}
      <Sphere ref={sphereRef} args={[0.5]} position={[-3, 1, -2]}>
        <meshStandardMaterial color="#0099cc" wireframe />
      </Sphere>
      
      {/* Torus */}
      <Torus ref={torusRef} args={[0.8, 0.3, 16, 32]} position={[3, -1, -1]}>
        <meshStandardMaterial color="#00aaff" transparent opacity={0.6} />
      </Torus>
      
      {/* Additional smaller elements */}
      <Box args={[0.3, 0.3, 0.3]} position={[2, 2, 1]}>
        <meshStandardMaterial color="#66ddff" />
      </Box>
      
      <Sphere args={[0.2]} position={[-2, -1, 2]}>
        <meshStandardMaterial color="#33bbff" />
      </Sphere>
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#00d4ff" />
      
      <FloatingGeometry />
      
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  )
}