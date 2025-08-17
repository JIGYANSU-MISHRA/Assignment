'use client'

import { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface MotorModelProps {
  position?: [number, number, number]
  scale?: [number, number, number]
  rotation?: [number, number, number]
  autoRotate?: boolean
  showWireframe?: boolean
}

// The actual 3D model component
const MotorModelMesh = ({ 
  position = [0, 0, 0], 
  scale = [1, 1, 1], 
  rotation = [0, 0, 0],
  autoRotate = true,
  showWireframe = false
}: MotorModelProps) => {
  const groupRef = useRef<THREE.Group>(null)
  const [modelLoaded, setModelLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Load the GLB model
  const { scene, animations } = useGLTF('/landing_page_motor.glb')
  const { actions } = useAnimations(animations, groupRef)
  
  // Handle model loading
  useEffect(() => {
    if (scene) {
      setModelLoaded(true)
      console.log('Motor model loaded successfully')
      
      // Play animations if they exist
      if (animations.length > 0) {
        Object.values(actions).forEach((action) => {
          if (action) {
            action.play()
          }
        })
      }
    }
  }, [scene, actions, animations])
  
  // Handle loading errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setError('Failed to load motor model')
      console.error('Error loading motor model:', event.error)
    }
    
    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [])
  
  // Auto-rotation animation
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += 0.005
      
      // Add subtle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })
  
  // Apply wireframe material if requested
  useEffect(() => {
    if (scene && showWireframe) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0x0066cc,
            wireframe: true,
            transparent: true,
            opacity: 0.8
          })
          child.material = wireframeMaterial
        }
      })
    }
  }, [scene, showWireframe])
  
  if (error) {
    return (
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    )
  }
  
  if (!modelLoaded) {
    return (
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    )
  }
  
  return (
    <group 
      ref={groupRef} 
      position={position} 
      scale={scale} 
      rotation={rotation}
    >
      <primitive object={scene} />
      
      {/* Add some interactive highlights */}
      {modelLoaded && (
        <>
          {/* Ambient light for the model */}
          <ambientLight intensity={0.3} />
          
          {/* Point light following the model */}
          <pointLight 
            position={[2, 2, 2]} 
            intensity={0.5} 
            color={0x0066cc}
            distance={10}
          />
        </>
      )}
    </group>
  )
}

// Main component that wraps the 3D scene
export default function MotorModel(props: MotorModelProps) {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
        {/* Lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.8} 
          castShadow 
        />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        
        {/* Environment mapping for realistic reflections */}
        <Environment files="/forest.exr" />
        
        {/* Orbit controls for user interaction */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          autoRotateSpeed={1}
        />
        
        {/* The motor model */}
        <MotorModelMesh {...props} />
      </Canvas>
    </div>
  )
}

// Preload the model
useGLTF.preload('/landing_page_motor.glb')
