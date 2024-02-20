import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { SoftShadows } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 30, 0], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <SoftShadows size={20}/>
      <Experience />
    </Canvas>
  );
}

export default App;
