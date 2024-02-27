import React, { useRef,useState } from 'react'
import { Character } from './Character';
import { RigidBody ,CapsuleCollider} from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { isHost } from 'playroomkit';

export const CharacterControl = ({
    state ,
    joystick,
    usePlayer,
    ...props
}) => {
    const  MOVEMENT_SPEED=200
    const group =useRef();
    const character=useRef();
    const [animation, setAnimation] =useState("Idle")
    const rigBod=useRef()



    useFrame((_,delta)=>{
       const angle =joystick.angle()
       if (joystick.isJoystickPressed() && angle){
        setAnimation("Run")
        character.current.rotation.y=angle


        const impulse={
          x:Math.sin(angle) * MOVEMENT_SPEED * delta,
          y:0,
          z:Math.cos(angle) * MOVEMENT_SPEED * delta,
        }

        rigBod.current.applyImpulse(impulse, true)
        
        
       }
       else{
        setAnimation("Idle")
       }
       


       if (isHost()) {
        state.setState("pos", rigBod.current.translation());
      } 
      else {
        const pos = state.getState("pos");
        if (pos) {
          rigBod.current.setTranslation( pos );
        }
      }
      
    })

    console.log(rigBod)
  return (
    
    <group ref={group} {...props}>
      <RigidBody ref={rigBod} colliders={false} linearDamping={12} lockRotations type={isHost() ? "dynamic" : "kinematicPosition"}>
        <group ref={character}>
            <Character
            color={state.state.profile?.color}
            animation={animation}
            
            />
        </group>
        <CapsuleCollider args={[0.7,0.6]} position={[0,1.28,0]}/>
      </RigidBody>
    </group>
  )
}
