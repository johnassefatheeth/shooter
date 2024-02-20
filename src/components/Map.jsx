import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export const Map = () => {
    const map=useGLTF('./models/map.glb')


    useEffect(()=>{
        map.scene.traverse((child)=>{
            if(child.isMesh){
                child.castShadow=true
                child.receiveShadow=true
            }
        })
        
    })
  return (
    <primitive object={map.scene} />
  )
}


useGLTF.preload('./models/map.glb')