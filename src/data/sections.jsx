import React from "react";

export const featureSections = [
  {
    id: "precision",
    label: "Precision",
    title: (
      <>
        Digital Crown
        <br />
        <span className="text-gray-600">reimagined.</span>
      </>
    ),
    description:
      "Effortlessly scroll, zoom, and navigate with the re-engineered Digital Crown. Now more precise, responsive, and intuitive than ever before.",
    contentOnLeft: true,
    features: [
      { title: "2x brighter display", description: "Up to 3,000 nits for crystal-clear visibility outdoors" },
      { title: "Ultra-responsive haptics", description: "Precise tactile feedback for every interaction" },
    ],
  },
  {
    id: "durability",
    label: "Durability",
    title: (
      <>
        Built to go
        <br />
        <span className="text-gray-600">further.</span>
      </>
    ),
    description:
      "From deep oceans to high mountains. The rugged titanium case, advanced GPS, and extended battery life are engineered to keep up with your most demanding adventures.",
    contentOnLeft: false,
    features: [
      { title: "Titanium construction", description: "Corrosion-resistant and incredibly durable" },
      { title: "Specialized bands", description: "Designed for water, trail, and endurance activities" },
      { title: "72-hour battery life", description: "Extended power with Low Power Mode" },
    ],
  },
  {
    id: "display",
    label: "Display",
    title: (
      <>
        The brightest
        <br />
        <span className="text-gray-600">display yet.</span>
      </>
    ),
    description:
      "Up to 3,000 nits of brightness means crystal-clear visibility under harsh sun. Advanced ambient sensors intelligently adapt to low-light environments for optimal viewing.",
    contentOnLeft: true,
    features: [],
    customContent: (
      <div className="animate-in pt-4">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-100 backdrop-blur-sm border border-gray-200">
          <div className="w-2 h-2 rounded-full bg-black" aria-hidden />
          <span className="text-black text-sm font-medium">Always-on Retina display</span>
        </div>
      </div>
    ),
  },
];
