import ContentCard from "./ContentCard";
import FeatureItem from "./FeatureItem";

function FeatureSection({ id, contentRef, contentOnLeft = true, label, title, description, features, customContent }) {
  const isPrecision = id === "precision";
  return (
    <section className={`relative flex items-center justify-between h-screen ${isPrecision ? "overflow-visible precision-merge-shadow" : ""}`}>
      {/* Soft gradient/glow at the boundary between content and scene */}
      <div className="section-boundary" aria-hidden />
      {isPrecision && (
        <>
          <div
            className="absolute inset-0 z-0"
            style={{ background: "linear-gradient(to right, #ffffff, #96989E)" }}
            aria-hidden
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(to right, #ffffff, #96989E)",
              filter: "blur(100px)",
              opacity: 0.9,
            }}
            aria-hidden
          />
        </>
      )}
      <div className={`relative z-10 flex w-full items-center justify-between ${!isPrecision ? "" : ""}`} style={isPrecision ? { minHeight: "100vh" } : undefined}>
      {contentOnLeft && <div className="w-[50%]" aria-hidden />}
      <ContentCard ref={contentRef} contentOnLeft={contentOnLeft}>
        <div className="space-y-6">
          <div className="animate-in inline-block">
            <span className="text-xs tracking-wider uppercase text-gray-500 font-semibold">{label}</span>
          </div>
          <h2 className="animate-in text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
            {title}
          </h2>
          <p className="animate-in text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
        {(features?.length > 0 || customContent) && (
          <div className="grid grid-cols-1 gap-4 pt-4">
            {features?.map((item, i) => (
              <FeatureItem key={i} title={item.title} description={item.description} />
            ))}
            {customContent}
          </div>
        )}
      </ContentCard>
      {!contentOnLeft && <div className="w-[50%] order-2" aria-hidden />}
      </div>
    </section>
  );
}

export default FeatureSection;
