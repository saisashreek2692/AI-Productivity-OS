import React from "react";

export default function HowItWorks() {
  return (
    <>
      <section className="px-12 py-24">
        <h2 className="text-3xl mb-8">How it Works</h2>

        <div className="bg-surface border border-theme p-8 rounded-xl">
          <ul className="text-soft space-y-2">
            <li>Connect devices</li>
            <li>Train AI</li>
            <li>Automate tasks</li>
          </ul>
        </div>
      </section>
    </>
  );
}
