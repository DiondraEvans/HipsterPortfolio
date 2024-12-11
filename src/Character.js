import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera,  OrbitControls} from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/qVl3ltTXDnZj2iNw/scene.splinecode')
  return (
    <>
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <group name="Character" position={[0.5, 37, 46.61]}>
            <mesh
              name="Shape"
              geometry={nodes.Shape.geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[-10.5, -13.61, 43.39]}
            />
            <mesh
              name="Ellipse 2"
              geometry={nodes['Ellipse 2'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[16.31, 5.31, 46.61]}
              rotation={[0, 0, -Math.PI]}
              scale={[-0.17, 0.28, 1]}
            />
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[-18.71, 5.31, 46.61]}
              rotation={[0, 0, -Math.PI]}
              scale={[-0.17, 0.28, 1]}
            />
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials['Box material']}
              castShadow
              receiveShadow
              position={[0, 0, -2.11]}
            >
              <mesh
                name="body"
                geometry={nodes.body.geometry}
                material={materials['Box material']}
                castShadow
                receiveShadow
                position={[1.1, -74, -1.31]}
              />
            </mesh>
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[200, 300, 300]}
          />
           <OrbitControls enableZoom={true} />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={1.98} color="#da91b7" />
        </scene>
      </group>
    </>
  )
}

