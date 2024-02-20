import { Environment, OrbitControls } from "@react-three/drei";
import { Map } from "./Map";

export const Experience = () => {
  return (
    <>
      <directionalLight
      position={[10, 10, 10]}
      intensity={0.5}
      castShadow
      shadow-camera-near={-10}
      shadow-camera-far={80}
      shadow-camera-left={-30}
      shadow-camera-right={30}
      shadow-camera-top={25}
      shadow-camera-bottom={-25}
      shadow-mapSize-height={1024}
      shadow-mapSize-width={1024}
      shadow-bias={-0.0001}

      />

      <OrbitControls />
      <Map/>
      <Environment preset="sunset" />
    </>
  );
};
