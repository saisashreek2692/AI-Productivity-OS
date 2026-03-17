import React, { useEffect, useState } from "react";

export default function Hero() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setAngle((a) => a + 0.3), 16);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <section className="px-12 py-24 grid md:grid-cols-2 items-center">
        {/* LEFT */}
        <div>
          <p className="text-xs text-soft mb-4 tracking-widest">
            ONE AI. TOTAL CONTROL.
          </p>

          <h1 className="text-5xl leading-tight">
            The AI That Controls All Your Devices{" "}
            <span className="text-primary">Securely</span>
          </h1>

          <p className="mt-6 text-soft max-w-lg">
            Fully encrypted AI ecosystem across all devices.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-primary text-black px-6 py-3 rounded-md shadow-neon">
              Start Free
            </button>
            <button className="border border-theme px-6 py-3 rounded-md">
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-[400px] flex justify-center items-center">
          {/* core */}
          <div className="w-40 h-40 border border-primary/30 rounded-full flex items-center justify-center shadow-neon">
            <div className="w-16 h-16 bg-primary/20 rounded-xl"></div>
          </div>

          {/* orbit */}
          <div
            className="absolute w-[300px] h-[300px] border border-theme rounded-full"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            {[0, 90, 180, 270].map((d, i) => (
              <div
                key={i}
                className="absolute w-5 h-5 bg-primary/30 rounded-md"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${d}deg) translate(140px)`,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
