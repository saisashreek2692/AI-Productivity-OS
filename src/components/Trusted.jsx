import React from "react";

export default function Trusted() {
  const brands = [
    "NexiTech",
    "NovaHome",
    "ParitySec",
    "Orbitron",
    "StableGrid",
  ];

  return (
    <>
      <div className="px-12 py-10 border-y border-theme text-soft flex justify-between text-lg">
        {brands.map((b, i) => (
          <span key={i}>{b}</span>
        ))}
      </div>
    </>
  );
}
