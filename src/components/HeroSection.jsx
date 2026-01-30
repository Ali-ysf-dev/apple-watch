import { Canvas } from "@react-three/fiber";
import Sence from "../Sence";
import heroBg from "../assets/whiteabstract.jpg";


function HeroSection({ sceneRef, progress, onModelLoad, contentRef }) {
  return (
    <section
      className="relative flex h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Wrapper so contentRef contains all hero .animate-in (left + right) for GSAP */}
      <div ref={contentRef} className="contents" >
        {/* Left: Apple Watch Ultra 2 + Built for extremes. — content at top */}
        <div className="flex flex-row flex-1  items-start justify-start p-8 pt-20 lg:p-12 lg:pt-24 xl:p-16 xl:pt-32">
        <div className="relative translate-x-[10%] space-y-4 pl-8 lg:pl-12 xl:pl-16">
          <p className="animate-in text-sm tracking-[0.3em] uppercase text-gray-500 font-medium">
            Apple Watch Ultra 2
          </p>
          <h1 className="animate-in text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
            Built for extremes.
          </h1>
        </div>
        </div>

        {/* Center: 3D model */}
        <div ref={sceneRef} className="flex flex-1 h-full min-w-0 z-[1000]">
          <Canvas className="h-full w-full">
            <Sence progress={progress} onModelLoad={onModelLoad} />
          </Canvas>
        </div>

      {/* Right: rest of content */}
      <div className="flex flex-1 flex-col justify-end p-8 pb-12 lg:p-12 lg:pb-16 xl:p-16 xl:pb-20">
        <div className="relative w-[100%] text-wrap pr-8 lg:pr-12 xl:pr-16 -translate-x-[15%]">
        <p className="animate-in text-1xl lg:text-3xl xl:text-5xl font-bold text-gray-600 leading-tight">
          Designed for every day.
        </p>
        <p className="animate-in text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mt-8">
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
        </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
