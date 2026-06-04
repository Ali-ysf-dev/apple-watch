import { useGLTF } from '@react-three/drei'

/** Draco-compressed GLB in `public/apple_watch.glb` */
export const MODEL_PATH = '/apple_watch.glb'

// Draco WASM decoder (drei wires this into GLTFLoader automatically when useDraco is true)
useGLTF.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/')
