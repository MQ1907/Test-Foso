import { Outlet } from "react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-[#5a4224] text-zinc-100">
      <div className="relative min-h-screen">
        <div className="pointer-events-none absolute inset-0 opacity-55">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.25),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(0,0,0,0.25),transparent_45%),linear-gradient(180deg,rgba(0,0,0,0.10),rgba(0,0,0,0.58))]" />
        </div>

        <Header />

        <main className="relative">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};
