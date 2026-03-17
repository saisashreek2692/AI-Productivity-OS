import React from "react";

const features = [
  "Unified Device Control",
  "Privacy-First Architecture",
  "Military-Grade Protection",
  "Human-Level Intelligence",
];

export default function Features() {
  return (
    <>
      <section className="px-12 py-24">
        <h2 className="text-3xl mb-12">
          Trust & <span className="text-primary">Control</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-surface border border-theme rounded-xl shadow-soft hover:shadow-neon"
            >
              {f}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
