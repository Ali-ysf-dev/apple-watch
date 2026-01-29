import { Canvas } from "@react-three/fiber";
import Sence from "../Sence";
import ContentCard from "./ContentCard";

function HeroSection({ sceneRef, progress, onModelLoad, contentRef }) {
  return (
    <section className="relative flex items-center justify-between h-screen">
      <div ref={sceneRef} className="w-[50%] h-full z-1000">
        <Canvas className="h-full w-full">
          <Sence progress={progress} onModelLoad={onModelLoad} />
        </Canvas>
      </div>
      <ContentCard ref={contentRef} contentOnLeft={false}>
        <div className="space-y-4">
          <p className="animate-in text-sm tracking-[0.3em] uppercase text-gray-500 font-medium">
            Apple Watch Ultra 2
          </p>
          <h1 className="animate-in text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
            Built for extremes.
            <br />
            <span className="text-gray-600">Designed for every day.</span>
          </h1>
        </div>
        <p className="animate-in text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
          Experience the most capable Apple Watch ever. Engineered for
          adventure, precision, and performance in every moment.
        </p>
        <div className="animate-in flex flex-wrap gap-4 pt-4">
          <button className="px-8 py-3.5 rounded-full bg-black text-white font-semibold text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105">
            Buy now
          </button>
          <button className="px-8 py-3.5 rounded-full border border-gray-300 text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Learn more
          </button>
        </div>
      </ContentCard>
    </section>
  );
}

export default HeroSection;
