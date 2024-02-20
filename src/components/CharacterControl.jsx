import React, { useRef,useState } from 'react'
import { Character } from './Character';

export const CharacterControl = ({
    state ,
    joystick,
    usePlayer,
    ...props
}) => {
    const group =useRef();
    const character=useRef();
    const [animation, setAnimation] =useState("Idle")
  return (
    
    <group ref={group} {...props}>
        <group ref={character}>
            <Character
            color={state.state.profile?.color}
            animation={animation}
            
            />
        </group>
    </group>
  )
}
