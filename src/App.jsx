import { useState, useRef, useEffect, Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sence from "./Sence";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const mainref = useRef(null);
  const senceref = useRef(null);
  const heroContentRef = useRef(null);
  const feature1ContentRef = useRef(null);
  const feature2ContentRef = useRef(null);
  const feature3ContentRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [modelReady, setModelReady] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: mainref.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      }).to(senceref.current, {
        ease: "none",
        x: "0vw",
        y: "100vh",
      }).to(senceref.current, {
        ease: "none",
        x: "50vw",
        y: "200vh",
      }).to(senceref.current, {
        ease: "none",
        x: "5vw",
        y: "300vh",
      });
    }, mainref);

    return () => ctx.revert();
  }, []);

  // Content section animations: start 0.5s after model has loaded
  useEffect(() => {
    if (!modelReady) return;

    const ctx = gsap.context(() => {
      const contentSections = [
        heroContentRef,
        feature1ContentRef,
        feature2ContentRef,
        feature3ContentRef,
      ];

      contentSections.forEach((ref) => {
        if (!ref.current) return;
        const children = ref.current.querySelectorAll(".animate-in");
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, mainref);

    return () => ctx.revert();
  }, [modelReady]);
  return (
    <main ref={mainref} className="overflow-x-hidden bg-white">
      {/* Top bar: Apple logo left, modern nav right */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-16 px-6 lg:px-10 h-12 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <a href="/" className="flex items-center justify-center w-8 h-8 text-black hover:opacity-70 transition-opacity" aria-label="Apple">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/90">
          <a href="#store" className="hover:text-black transition-colors">Store</a>
          <a href="#watch" className="hover:text-black transition-colors">Watch</a>
          <a href="#support" className="hover:text-black transition-colors">Support</a>
        </nav>
        <div className="flex items-center gap-5">
          <button type="button" className="text-black hover:opacity-70 transition-opacity p-1" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button type="button" className="text-black hover:opacity-70 transition-opacity p-1" aria-label="Bag">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="fixed inset-0 grid place-items-center bg-white text-black">
            Loading...
          </div>
        }
      >
        {/* Hero Section */}
        <section className="relative flex items-center justify-between h-screen">
          {/* Empty space for 3D model */}
          <div ref={senceref} className="w-[50%] h-full z-1000">
            <Canvas className="h-full w-full">
              <Sence
                progress={progress}
                onModelLoad={() => {
                  setTimeout(() => setModelReady(true), 500);
                }}
              />
            </Canvas>
          </div>

          {/* Content */}
          <div ref={heroContentRef} className="content-shadow w-[50%] p-8 lg:p-12 xl:p-16 flex flex-col justify-center space-y-8 rounded-2xl mx-4">
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
          </div>
        </section>

        {/* Feature Section 1 */}
        <section className="relative flex items-center justify-between h-screen">
          {/* Empty space for 3D */}
          <div className="w-[50%]"></div>

          {/* Content */}
          <div ref={feature1ContentRef} className="content-shadow w-[50%] p-8 lg:p-12 xl:p-16 flex flex-col justify-center space-y-8 rounded-2xl mx-4">
            <div className="space-y-6">
              <div className="animate-in inline-block">
                <span className="text-xs tracking-wider uppercase text-gray-500 font-semibold">
                  Precision
                </span>
              </div>
              <h2 className="animate-in text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                Digital Crown
                <br />
                <span className="text-gray-600">reimagined.</span>
              </h2>
              <p className="animate-in text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                Effortlessly scroll, zoom, and navigate with the
                re-engineered Digital Crown. Now more precise, responsive, and
                intuitive than ever before.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="animate-in flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></div>
                <div>
                  <p className="text-black font-medium mb-1">
                    2x brighter display
                  </p>
                  <p className="text-sm text-gray-600">
                    Up to 3,000 nits for crystal-clear visibility outdoors
                  </p>
                </div>
              </div>
              <div className="animate-in flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></div>
                <div>
                  <p className="text-black font-medium mb-1">
                    Ultra-responsive haptics
                  </p>
                  <p className="text-sm text-gray-600">
                    Precise tactile feedback for every interaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section 2 */}
        <section className="relative flex items-center justify-between h-screen">
          {/* Content */}
          <div ref={feature2ContentRef} className="content-shadow w-[50%] p-8 lg:p-12 xl:p-16 flex flex-col justify-center space-y-8 order-1 rounded-2xl mx-4">
            <div className="space-y-6">
              <div className="animate-in inline-block">
                <span className="text-xs tracking-wider uppercase text-gray-500 font-semibold">
                  Durability
                </span>
              </div>
              <h2 className="animate-in text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                Built to go
                <br />
                <span className="text-gray-600">further.</span>
              </h2>
              <p className="animate-in text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                From deep oceans to high mountains. The rugged titanium case,
                advanced GPS, and extended battery life are engineered to keep
                up with your most demanding adventures.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="animate-in flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></div>
                <div>
                  <p className="text-black font-medium mb-1">
                    Titanium construction
                  </p>
                  <p className="text-sm text-gray-600">
                    Corrosion-resistant and incredibly durable
                  </p>
                </div>
              </div>
              <div className="animate-in flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></div>
                <div>
                  <p className="text-black font-medium mb-1">
                    Specialized bands
                  </p>
                  <p className="text-sm text-gray-600">
                    Designed for water, trail, and endurance activities
                  </p>
                </div>
              </div>
              <div className="animate-in flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></div>
                <div>
                  <p className="text-black font-medium mb-1">
                    72-hour battery life
                  </p>
                  <p className="text-sm text-gray-600">
                    Extended power with Low Power Mode
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Empty space for 3D */}
          <div className="w-[50%] order-2"></div>
        </section>

        {/* Feature Section 3 */}
        <section className="relative flex items-center justify-between h-screen">
          {/* Empty space for 3D */}
          <div className="w-[50%]"></div>

          {/* Content */}
          <div ref={feature3ContentRef} className="content-shadow w-[50%] p-8 lg:p-12 xl:p-16 flex flex-col justify-center space-y-8 rounded-2xl mx-4">
            <div className="space-y-6">
              <div className="animate-in inline-block">
                <span className="text-xs tracking-wider uppercase text-gray-500 font-semibold">
                  Display
                </span>
              </div>
              <h2 className="animate-in text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                The brightest
                <br />
                <span className="text-gray-600">display yet.</span>
              </h2>
              <p className="animate-in text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                Up to 3,000 nits of brightness means crystal-clear visibility
                under harsh sun. Advanced ambient sensors intelligently adapt
                to low-light environments for optimal viewing.
              </p>
            </div>
            <div className="animate-in pt-4">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-100 backdrop-blur-sm border border-gray-200">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <span className="text-black text-sm font-medium">
                  Always-on Retina display
                </span>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </main>
  );
}

export default App;