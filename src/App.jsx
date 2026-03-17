import { Outlet } from "react-router";
import { Navbar, Footer } from "./components/index";
export default function App() {
  return (
    <>
      <div className="bg-black min-h-screen scroll-smooth overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
