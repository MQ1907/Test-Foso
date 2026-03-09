import { Plus } from "lucide-react";
import type { MenuItem } from "./service-page.data";

export const ServiceRow = ({ item }: { item: MenuItem }) => {
  return (
      <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 pt-2">
      <div className="space-y-1">
        <div className="text-[13px] font-medium text-amber-50/95">
          {item.title}
        </div>
        {item.desc ? (
          <div className="text-[11px] leading-relaxed text-zinc-200/55">
            {item.desc}
          </div>
        ) : null}
        <div className="text-xs font-semibold text-amber-200/90">
          {item.price}.
        </div>
      </div>
      <button
        type="button"
        className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/10 text-zinc-100/70 transition hover:border-amber-300/40 hover:text-amber-100"
        aria-label="Xem chi tiết"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
};

