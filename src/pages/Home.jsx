import React from "react";
import { Hero, Features, Capabilities, HowItWorks, Trusted, CTA } from "../components/index";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <Features />
      <Capabilities />
      <HowItWorks />
      <CTA />
    </>
  );
}
