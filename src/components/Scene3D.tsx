import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import { Mesh } from 'three'
import * as THREE from 'three'

function FloatingGeometry() {
  const meshRef = useRef<Mesh>(null)
  const sphereRef = useRef<Mesh>(null)
  const torusRef = useRef<Mesh>(null)

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
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#00d4ff" transparent opacity={0.8} />
      </mesh>
      
      {/* Floating sphere */}
      <mesh ref={sphereRef} position={[-3, 1, -2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#0099cc" wireframe />
      </mesh>
      
      {/* Torus */}
      <mesh ref={torusRef} position={[3, -1, -1]}>
        <torusGeometry args={[0.8, 0.3, 16, 32]} />
        <meshStandardMaterial color="#00aaff" transparent opacity={0.6} />
      </mesh>
      
      {/* Additional smaller elements */}
      <mesh position={[2, 2, 1]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#66ddff" />
      </mesh>
      
      <mesh position={[-2, -1, 2]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#33bbff" />
      </mesh>
    </group>
  )
}

function Scene3DFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-secondary rounded-lg">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-4 animate-pulse"></div>
        <p className="text-muted-foreground">Loading 3D Scene...</p>
      </div>
    </div>
  )
}

export default function Scene3D() {
  return (
    <Suspense fallback={<Scene3DFallback />}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true
        }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#00d4ff" />
        
        <FloatingGeometry />
      </Canvas>
    </Suspense>
  )
}