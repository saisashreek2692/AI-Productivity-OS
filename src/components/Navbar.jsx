import React from "react";
import { Link, useNavigation } from "react-router";

export default function Navbar() {
  const Downloadbtn = () => {
    let navigate = useNavigation();
    navigate("/");
  };

  const GetStart = () => {
    let navigate = useNavigation();
    navigate("/get-started");
  };

  return (
    <>
      <div className="flex justify-between items-center px-12 py-6 border-b border-theme glass">
        <h1 className="text-4xl">
          VARA<span className="text-primary">OS</span>
        </h1>

        <div className="hidden md:flex gap-10 text-lg text-soft">
          <Link to="/" className="hover:text-primary">Product</Link>
          <Link to="/" className="hover:text-primary">Features</Link>
          <Link to="/" className="hover:text-primary">Developers</Link>
          <Link to="/" className="hover:text-primary">Pricing</Link>
          <Link to="/" className="hover:text-primary">Security</Link>
        </div>

        <div className="flex gap-4">
          <button className="text-soft cursor-pointer" onClick={Downloadbtn}>Download App</button>
          <button className="bg-primary text-black px-4 py-2 rounded-md shadow-neon cursor-pointer" onClick={GetStart}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
