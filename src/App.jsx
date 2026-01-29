import { useState, useRef, useEffect, Suspense } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import { featureSections } from "./data/sections.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainref = useRef(null);
  const sceneRef = useRef(null);
  const heroContentRef = useRef(null);
  const feature1ContentRef = useRef(null);
  const feature2ContentRef = useRef(null);
  const feature3ContentRef = useRef(null);
  const featureContentRefs = [feature1ContentRef, feature2ContentRef, feature3ContentRef];

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
      })
        .to(sceneRef.current, { ease: "none", x: "0vw", y: "100vh" })
        .to(sceneRef.current, { ease: "none", x: "50vw", y: "200vh" })
        .to(sceneRef.current, { ease: "none", x: "5vw", y: "300vh" });
    }, mainref);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!modelReady) return;

    const ctx = gsap.context(() => {
      const contentRefs = [heroContentRef, ...featureContentRefs];
      contentRefs.forEach((ref) => {
        if (!ref.current) return;
        const children = ref.current.querySelectorAll(".animate-in");
        gsap.fromTo(
          children,
          { opacity: 0, y: 60 },
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
  // eslint-disable-next-line react-hooks/exhaustive-deps -- refs are stable
  }, [modelReady]);

  return (
    <main ref={mainref} className="overflow-x-hidden bg-white">
      <Header />

      <Suspense
        fallback={
          <div className="fixed inset-0 grid place-items-center bg-white text-black">
            Loading...
          </div>
        }
      >
        <HeroSection
          sceneRef={sceneRef}
          progress={progress}
          onModelLoad={() => setTimeout(() => setModelReady(true), 500)}
          contentRef={heroContentRef}
        />

        {featureSections.map((section, i) => (
          <FeatureSection
            key={section.id}
            contentRef={featureContentRefs[i]}
            contentOnLeft={section.contentOnLeft}
            label={section.label}
            title={section.title}
            description={section.description}
            features={section.features}
            customContent={section.customContent}
          />
        ))}
      </Suspense>

      <Footer />
    </main>
  );
}

export default App;
