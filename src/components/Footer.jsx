import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className="px-12 py-10 border-t border-theme text-soft text-lg flex justify-between">
        <span>© 2026 VARAOS</span>
        <div className="flex gap-6">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </footer>
    </>
  );
}
