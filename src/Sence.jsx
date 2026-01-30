import React, { useRef, useEffect} from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment,PerspectiveCamera,OrbitControls } from '@react-three/drei'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Watch } from './Watch.jsx'

gsap.registerPlugin(ScrollTrigger);
function Sence({ progress, onModelLoad }) {
  const cameraref = useRef(null);

  useEffect(() => {
    onModelLoad?.();
  }, [onModelLoad]);

  useFrame(() => {
    if (cameraref.current) cameraref.current.lookAt(0, 0, 0);
  });
  useEffect(() => {
    const updateCameraPosition = () => {
      // Camera positions per scroll segment - kept far enough so model stays in frame (no cropping)
      const position = [
        [3.0, 2.17, 3.7],   // hero
        [-3.7, 2.5, 3.6],   // precision
        [2.6, 1.2, 2.8],    // durability (pulled back from 3.7,0.6,0.7 to avoid zoom/crop)
        [0, 2.5, 3.6]       // display
      ];
      if(progress >=1){
        gsap.to(cameraref.current.position, {
          x : 0,
          y :2.5,
          z : 3.6,
          duration: 0.1,
          ease: "power2.inOut",
        });
      }else{
        const segementprogress = 1/3;
        const segmentindex = Math.floor(progress / segementprogress);
  
        const percentage = (progress%segementprogress) / segementprogress;
        const [startX,startY,startZ] = position[segmentindex];
        const [endX,endY,endZ] = position[segmentindex + 1];
        const x = startX + (endX - startX) * percentage;
        const y = startY + (endY - startY) * percentage;
        const z = startZ + (endZ - startZ) * percentage;
        
        gsap.to(cameraref.current.position, {
          x,
          y,
          z,
          duration: 0.1,
          ease: "none",
        });
      }
      
    }
    updateCameraPosition();
  }, [progress,cameraref]);

  return (
    <>
    <PerspectiveCamera ref={cameraref} makeDefault near={0.1} far={1000} position={[3.4821563489882656, 1.219071606362784, 5.929245271644066]} />
    <Environment files="/venice_sunset_1k.hdr" />
    <Watch />
    
    </>
  )
}

export default Sence