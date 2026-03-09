import { useState } from "react";
import heroBg from "@/assets/bg2.png";
import { testimonials } from "./testimonials.data";

export const TestimonialsLikeSection = () => {
  const [activeIndex, setActiveIndex] = useState(
    testimonials.length > 1 ? 1 : 0
  );

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden py-[100px] text-white">
      <img
        src={heroBg}
        alt="Không gian spa"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#5a331a]/75 via-60% to-[#3a1d0d] to-100%" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs tracking-[0.35em] text-zinc-100/70">
            NHẬN XÉT TỪ
          </p>
          <h2 className="mt-2 text-3xl font-light tracking-wide text-amber-50">
            Khách Hàng
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5 pb-6 backdrop-blur-md transition-all duration-500 ${
                idx === activeIndex
                  ? "md:-translate-y-4 md:scale-105 md:bg-black/30 shadow-[0_18px_60px_rgba(0,0,0,0.6)]"
                  : "md:translate-y-2 opacity-85"
              }`}
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-4 text-xs leading-relaxed text-zinc-100/80">
                {t.quote}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-amber-50">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-zinc-200/55">
                    Khách hàng
                  </div>
                </div>
                <button className="text-[11px] font-medium uppercase tracking-wide text-amber-200 hover:text-amber-100">
                  Xem thêm
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Xem nhận xét trước"
            className="rounded-full bg-black/40 px-3 py-2 text-xs text-white shadow-md backdrop-blur hover:bg-black/60"
          >
            ‹
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.id + "-dot"}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Xem nhận xét ${idx + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  idx === activeIndex
                    ? "bg-amber-200"
                    : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Xem nhận xét tiếp theo"
            className="rounded-full bg-black/40 px-3 py-2 text-xs text-white shadow-md backdrop-blur hover:bg-black/60"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

