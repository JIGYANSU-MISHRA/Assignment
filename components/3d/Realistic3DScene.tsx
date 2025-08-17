'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

// AI-Generated 3D Mechanical Parts - Matching the Image Exactly
const RectangularBlockWithCutout = ({ position, scale, rotation }: { position: [number, number, number], scale: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        {/* Main rectangular block */}
        <boxGeometry args={[2, 1.5, 1]} />
        <meshStandardMaterial 
          color="#D1D5DB" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1.2}
        />
        {/* Large central circular cutout */}
        <mesh position={[0, 0, 0.6]}>
          <cylinderGeometry args={[0.6, 0.6, 0.1, 32]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Four corner holes */}
        {[[-0.6, -0.5], [0.6, -0.5], [-0.6, 0.5], [0.6, 0.5]].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0.6]}>
            <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
            <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
      </mesh>
    </Float>
  )
}

const CylindricalConnector = ({ position, scale, rotation }: { position: [number, number, number], scale: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.08
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        {/* Main cylinder */}
        <cylinderGeometry args={[0.3, 0.3, 2.5, 32]} />
        <meshStandardMaterial 
          color="#D1D5DB" 
          metalness={0.95} 
          roughness={0.05}
          envMapIntensity={1.5}
        />
        {/* Wide blue band in middle */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Top connector with multiple pins */}
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#D1D5DB" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Multiple pin holes around top */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const x = Math.cos(angle) * 0.25
          const z = Math.sin(angle) * 0.25
          return (
            <mesh key={i} position={[x, 1.2, z]}>
              <cylinderGeometry args={[0.05, 0.05, 0.4, 16]} />
              <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
            </mesh>
          )
        })}
      </mesh>
    </Float>
  )
}

const CentralMachinedPart = ({ position, scale, rotation }: { position: [number, number, number], scale: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.12
    }
  })

  return (
    <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        {/* Main barrel body */}
        <cylinderGeometry args={[0.8, 0.8, 1.2, 32]} />
        <meshStandardMaterial 
          color="#D1D5DB" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1.2}
        />
        {/* Central shaft extending upward */}
        <mesh position={[0, 1.4, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.8, 32]} />
          <meshStandardMaterial color="#D1D5DB" metalness={0.95} roughness={0.05} />
        </mesh>
        {/* Split end of shaft with circular hole */}
        <mesh position={[0, 2.2, 0]}>
          <torusGeometry args={[0.15, 0.05, 8, 16]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Blue rectangular cutouts on sides */}
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[0.3, 0.8, 0.4]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[0.3, 0.8, 0.4]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Side hole */}
        <mesh position={[0, 0, 0.6]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
      </mesh>
    </Float>
  )
}

const SquatCylindricalCap = ({ position, scale, rotation }: { position: [number, number, number], scale: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.09
    }
  })

  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        {/* Main cap */}
        <cylinderGeometry args={[0.8, 0.8, 0.4, 32]} />
        <meshStandardMaterial 
          color="#D1D5DB" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1.2}
        />
        {/* Thin blue ring on top surface */}
        <mesh position={[0, 0.25, 0]}>
          <torusGeometry args={[0.8, 0.05, 16, 32]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
      </mesh>
    </Float>
  )
}

const ElongatedOvalLink = ({ position, scale, rotation }: { position: [number, number, number], scale: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.11
    }
  })

  return (
    <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        {/* Main oval link body */}
        <capsuleGeometry args={[0.3, 1.8, 4, 8]} />
        <meshStandardMaterial 
          color="#F9FAFB" 
          metalness={0.7} 
          roughness={0.3}
          envMapIntensity={1.0}
        />
        {/* Left blue eyelet */}
        <mesh position={[-0.8, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.1, 16]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Right blue eyelet */}
        <mesh position={[0.8, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.1, 16]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
      </mesh>
    </Float>
  )
}

// Additional 3D elements to fill gaps
const HexagonalNut = ({ position, scale, rotation }: { position: [number, number, number], scale: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.07
    }
  })

  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        {/* Hexagonal nut body */}
        <cylinderGeometry args={[0.6, 0.6, 0.5, 6]} />
        <meshStandardMaterial 
          color="#D1D5DB" 
          metalness={0.9} 
          roughness={0.15}
          envMapIntensity={1.1}
        />
        {/* Center hole */}
        <mesh position={[0, 0, 0.3]}>
          <cylinderGeometry args={[0.25, 0.25, 0.1, 16]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
      </mesh>
    </Float>
  )
}

const GearWheel = ({ position, scale, rotation }: { position: [number, number, number], scale: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.09
    }
  })

  return (
    <Float speed={1.0} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        {/* Main gear body */}
        <cylinderGeometry args={[0.7, 0.7, 0.3, 32]} />
        <meshStandardMaterial 
          color="#D1D5DB" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1.2}
        />
        {/* Gear teeth */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const x = Math.cos(angle) * 0.7
          const z = Math.sin(angle) * 0.7
          return (
            <mesh key={i} position={[x, 0, z]}>
              <boxGeometry args={[0.15, 0.3, 0.15]} />
              <meshStandardMaterial color="#D1D5DB" metalness={0.9} roughness={0.1} />
            </mesh>
          )
        })}
        {/* Center hub */}
        <mesh position={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.3, 0.3, 0.1, 16]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
      </mesh>
    </Float>
  )
}

const MountingBracket = ({ position, scale, rotation }: { position: [number, number, number], scale: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.08
    }
  })

  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        {/* Main bracket body */}
        <boxGeometry args={[1.8, 1.2, 0.4]} />
        <meshStandardMaterial 
          color="#D1D5DB" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1.2}
        />
        {/* Mounting holes */}
        {[[-0.6, 0], [0.6, 0]].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0.25]}>
            <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
            <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
        {/* Blue accent strip */}
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[1.8, 0.1, 0.4]} />
          <meshStandardMaterial color="#0066cc" metalness={0.7} roughness={0.3} />
        </mesh>
      </mesh>
    </Float>
  )
}

const SphericalJoint = ({ position, scale, rotation }: { position: [number, number, number], scale: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.06
    }
  })

  return (
    <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        {/* Main spherical body */}
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial 
          color="#D1D5DB" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1.2}
        />
        {/* Blue accent rings */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[0.5, 0.05, 8, 16]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]}>
          <torusGeometry args={[0.5, 0.05, 8, 16]} />
          <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Connection points */}
        {([[0, 0.5, 0], [0, -0.5, 0]] as [number, number, number][]).map((pos, i) => (
          <mesh key={i} position={pos}>
            <cylinderGeometry args={[0.1, 0.1, 0.3, 8]} />
            <meshStandardMaterial color="#D1D5DB" metalness={0.9} roughness={0.1} />
          </mesh>
        ))}
      </mesh>
    </Float>
  )
}

const Scene = () => {
  const groupRef = useRef<THREE.Group>(null)
  
  const parts = useMemo(() => [
    {
      component: RectangularBlockWithCutout,
      position: [-18, 0, 0] as [number, number, number],
      scale: [1.8, 1.8, 1.8] as [number, number, number],
      rotation: [0, 0, 0.2] as [number, number, number]
    },
    {
      component: HexagonalNut,
      position: [-12, 0, 0] as [number, number, number],
      scale: [1.6, 1.6, 1.6] as [number, number, number],
      rotation: [0, 0, 0.1] as [number, number, number]
    },
    {
      component: CylindricalConnector,
      position: [-6, 0, 0] as [number, number, number],
      scale: [2.0, 2.0, 2.0] as [number, number, number],
      rotation: [0, 0, -0.1] as [number, number, number]
    },
    {
      component: GearWheel,
      position: [0, 0, 0] as [number, number, number],
      scale: [1.5, 1.5, 1.5] as [number, number, number],
      rotation: [0, 0, 0.15] as [number, number, number]
    },
    {
      component: CentralMachinedPart,
      position: [6, 0, 0] as [number, number, number],
      scale: [2.2, 2.2, 2.2] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number]
    },
    {
      component: MountingBracket,
      position: [12, 0, 0] as [number, number, number],
      scale: [1.8, 1.8, 1.8] as [number, number, number],
      rotation: [0, 0, -0.1] as [number, number, number]
    },
    {
      component: SquatCylindricalCap,
      position: [18, 0, 0] as [number, number, number],
      scale: [2.1, 2.1, 2.1] as [number, number, number],
      rotation: [0, 0, 0.15] as [number, number, number]
    },
    {
      component: SphericalJoint,
      position: [24, 0, 0] as [number, number, number],
      scale: [1.7, 1.7, 1.7] as [number, number, number],
      rotation: [0, 0, 0.2] as [number, number, number]
    },
    {
      component: ElongatedOvalLink,
      position: [30, 0, 0] as [number, number, number],
      scale: [1.6, 1.6, 1.6] as [number, number, number],
      rotation: [0, 0, -0.2] as [number, number, number]
    },
    // Add duplicate parts to create seamless infinite scroll - NO GAPS!
    {
      component: RectangularBlockWithCutout,
      position: [36, 0, 0] as [number, number, number],
      scale: [1.8, 1.8, 1.8] as [number, number, number],
      rotation: [0, 0, 0.2] as [number, number, number]
    },
    {
      component: HexagonalNut,
      position: [42, 0, 0] as [number, number, number],
      scale: [1.6, 1.6, 1.6] as [number, number, number],
      rotation: [0, 0, 0.1] as [number, number, number]
    },
    {
      component: CylindricalConnector,
      position: [48, 0, 0] as [number, number, number],
      scale: [2.0, 2.0, 2.0] as [number, number, number],
      rotation: [0, 0, -0.1] as [number, number, number]
    },
    // Add more duplicates to ensure seamless connection
    {
      component: GearWheel,
      position: [54, 0, 0] as [number, number, number],
      scale: [1.5, 1.5, 1.5] as [number, number, number],
      rotation: [0, 0, 0.15] as [number, number, number]
    },
    {
      component: CentralMachinedPart,
      position: [60, 0, 0] as [number, number, number],
      scale: [2.2, 2.2, 2.2] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number]
    },
    {
      component: MountingBracket,
      position: [66, 0, 0] as [number, number, number],
      scale: [1.8, 1.8, 1.8] as [number, number, number],
      rotation: [0, 0, -0.1] as [number, number, number]
    }
  ], [])
  
  // Simple and reliable infinite scrolling animation
  useFrame((state) => {
    if (groupRef.current) {
      // Continuous scrolling from right to left
      groupRef.current.position.x = -(state.clock.elapsedTime * 1.2)
      
      // Reset group position when it goes too far to create infinite loop
      // Reset at -84 to ensure seamless connection (last element at 66 + 18 spacing)
      if (groupRef.current.position.x < -84) {
        groupRef.current.position.x = 0
      }
    }
  })

  return (
    <group ref={groupRef}>
      {parts.map((part, index) => {
        const Component = part.component
        return (
          <Component
            key={index}
            position={part.position}
            scale={part.scale}
            rotation={part.rotation}
          />
        )
      })}
    </group>
  )
}

const Realistic3DScene = () => {
  return (
    <div className="w-full h-48 sm:h-64 md:h-80 relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={30} />
        
        {/* Professional lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.8} 
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        
        {/* Environment mapping for realistic reflections */}
        <Environment files="/forest.exr" />
        
        <Scene />
      </Canvas>
    </div>
  )
}

export default Realistic3DScene
