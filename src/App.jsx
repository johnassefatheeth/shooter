import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { SoftShadows } from "@react-three/drei";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";


function App() {
  return (
    <Canvas shadows camera={{ position: [0, 20, 10], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <SoftShadows size={20}/>
      <Suspense>
        <Physics>
          <Experience />
        </Physics>
        </Suspense>
        
    </Canvas>
  );
}

export default App;
