import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
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
    const camera = cameraref.current;
    if (!camera) return;

    const position = [
      [3.0, 2.17, 3.7],
      [-3.7, 2.5, 3.6],
      [2.6, 1.2, 2.8],
      [0, 2.5, 3.6],
    ];

    if (progress >= 1) {
      gsap.to(camera.position, {
        x: 0,
        y: 2.5,
        z: 3.6,
        duration: 0.1,
        ease: "power2.inOut",
        overwrite: true,
      });
      return;
    }

    const segmentProgress = 1 / 3;
    const segmentIndex = Math.min(
      Math.floor(progress / segmentProgress),
      position.length - 2
    );
    const percentage = (progress % segmentProgress) / segmentProgress;
    const [startX, startY, startZ] = position[segmentIndex];
    const [endX, endY, endZ] = position[segmentIndex + 1];

    gsap.to(camera.position, {
      x: startX + (endX - startX) * percentage,
      y: startY + (endY - startY) * percentage,
      z: startZ + (endZ - startZ) * percentage,
      duration: 0.1,
      ease: "none",
      overwrite: true,
    });
  }, [progress]);

  return (
    <>
      <PerspectiveCamera ref={cameraref} makeDefault near={0.1} far={1000} position={[3.4821563489882656, 1.219071606362784, 5.929245271644066]} />
      <Environment preset="studio" background={false} />
      <Watch />
    </>
  )
}

export default Sence
