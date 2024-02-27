import { Environment, OrbitControls } from "@react-three/drei";
import { Map } from "./Map";
import { useEffect, useState } from "react";
import {Joystick, insertCoin, myPlayer, onPlayerJoin, setState} from "playroomkit"
import { CharacterControl } from "./CharacterControl";

export const Experience = () => {

  const [players,setPlayers]=useState([])


  const start = async () => {
    // Start the game
    await insertCoin();

    // Create a joystick controller for each joining player
    onPlayerJoin(async(state) => {
      // Joystick will only create UI for current player (myPlayer)
      // For others, it will only sync their state
      const joystick = new Joystick(state, {
        type: "angular",
        buttons: [{ id: "fire", label: "Fire" }],
      });
      const newPlayer = { state, joystick };
      state.setState("health", 100);
      state.setState("deaths", 0);
      state.setState("kills", 0);
      setPlayers((players) => [...players, newPlayer]);
      state.onQuit(() => {
        setPlayers((players) => players.filter((p) => p.state.id !== state.id));
      });
    });
  };


useEffect(()=>{
    start()
    console.log(players)
},[])

useEffect(()=>{
  start()
  console.log(players)
},[players])
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

      <OrbitControls  />
      <Map/>
      {players.map(({ state, joystick },index) => (
          <CharacterControl key={state.id} position-x={index*2} state={state} joystick={joystick} usePlayer={state.id === myPlayer()?.id} />
        ))}
      <Environment preset="sunset" />
    </>
  );
};
