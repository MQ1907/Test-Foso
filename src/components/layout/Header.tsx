import { NavLink, Link } from "react-router";
import { PATH_NAMES } from "@/constants";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronRight } from "lucide-react";

const navItems = [
  { to: PATH_NAMES.HOME, label: "Trang chủ" },
  { to: PATH_NAMES.ABOUT, label: "Giới thiệu" },
  { to: PATH_NAMES.SERVICES, label: "Dịch vụ" },
  { to: PATH_NAMES.NEWS, label: "Tin tức" },
  { to: PATH_NAMES.CONTACT, label: "Liên hệ" },
];

export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between gap-4">
          {/* Left: language switch */}
          <div className="flex items-center">
            <button
              type="button"
              className="text-[11px] font-medium tracking-[0.2em] text-zinc-100/80 hover:text-amber-100"
            >
              ENGLISH
            </button>
          </div>

          {/* Center: logo + navbar */}
          <div className="flex flex-1 flex-col items-center gap-1">
            <Link to={PATH_NAMES.HOME} className="text-center">
              <div className="text-xs font-semibold tracking-[0.28em] text-amber-100">
                THE OM
              </div>
              <div className="text-[10px] tracking-[0.38em] text-zinc-100/80">
                LOUNGE
              </div>
            </Link>

            <nav className="mt-2 hidden items-center gap-8 text-[13px] text-zinc-100/85 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "transition",
                      isActive
                        ? "text-amber-100"
                        : "hover:text-amber-100",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right: cart button */}
          <div className="flex items-center justify-end">
            <Button
              size="sm"
              className="flex items-center gap-2 rounded-full bg-[#b96b10] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-md shadow-black/30 hover:bg-[#d27c10]"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Giỏ hàng</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/70 text-[11px]">
                <ChevronRight className="h-3 w-3" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

