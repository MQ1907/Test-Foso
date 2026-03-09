import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { MenuKey, Tab } from "./service-page.data";
import heroBg from "@/assets/bg1.png";

type Props = {
  tabs: Tab[];
  active: MenuKey;
  onTabChange: (k: MenuKey) => void;
  query: string;
  onQueryChange: (v: string) => void;
};

export const ServiceHero = ({
  tabs,
  active,
  onTabChange,
  query,
  onQueryChange,
}: Props) => {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 opacity-35">
        <img
          src={heroBg}
          alt="Không gian spa"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/55" />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 lg:pb-14 lg:pt-20">
        <h1 className="text-center text-4xl font-light tracking-wide text-amber-50/95 sm:text-5xl">
          Dịch Vụ
        </h1>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-xs tracking-[0.22em] text-zinc-100/70">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => {
                  onTabChange(t.key);
                  const el = document.getElementById(`block-${t.key}`);
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={
                  active === t.key
                    ? "text-amber-100"
                    : "hover:text-amber-100"
                }
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="w-full max-w-sm">
            <div className="relative">
              <Input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Tìm kiếm"
                className="pr-10"
              />
              <Search className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-100/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

