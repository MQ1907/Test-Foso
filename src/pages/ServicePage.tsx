import { useEffect, useRef, useState, type ReactNode } from "react";
import { ServiceHero } from "../components/service/ServiceHero";
import { ServiceBlockSection } from "../components/service/ServiceBlockSection";
import { TestimonialsLikeSection } from "../components/service/TestimonialsLikeSection";
import { BookingHealingSection } from "../components/service/BookingHealingSection";
import {
  blocks,
  type MenuKey,
  tabs,
} from "../components/service/service-page.data";

type ScrollAnimation = "back-in-right" | "back-in-up";

const useScrollAnimation = (inClass: ScrollAnimation) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animationClass, setAnimationClass] = useState<string>("animate-section-base");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationClass(`animate-section-base ${inClass}`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [inClass]);

  return { ref, animationClass };
};

const AnimatedSection = ({
  inClass,
  delay = 0,
  children,
}: {
  inClass: ScrollAnimation;
  delay?: number;
  children: ReactNode;
}) => {
  const { ref, animationClass } = useScrollAnimation(inClass);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={animationClass}
    >
      {children}
    </div>
  );
};

export const ServicePage = () => {
  const [active, setActive] = useState<MenuKey>("combo");
  const [query, setQuery] = useState("");

  return (
    <div className="text-zinc-100">
      <AnimatedSection inClass="back-in-up">
        <ServiceHero
          tabs={tabs}
          active={active}
          onTabChange={setActive}
          query={query}
          onQueryChange={setQuery}
        />
      </AnimatedSection>

      {blocks.map((b: (typeof blocks)[number], idx: number) => {
        const isEven = idx % 2 === 0;
        const inClass: ScrollAnimation = isEven ? "back-in-right" : "back-in-up";

        return (
          <AnimatedSection
            key={b.key}
            inClass={inClass}
            delay={0.1 * (idx + 1)}
          >
            <div id={`block-${b.key}`}>
              <ServiceBlockSection
                block={b}
                align={idx % 2 === 0 ? "image-left" : "image-right"}
              />
            </div>
          </AnimatedSection>
        );
      })}

      <AnimatedSection
        inClass="back-in-up"
        delay={0.1 * (blocks.length + 1)}
      >
        <TestimonialsLikeSection />
      </AnimatedSection>

      <AnimatedSection
        inClass="back-in-right"
        delay={0.1 * (blocks.length + 2)}
      >
        <BookingHealingSection />
      </AnimatedSection>
    </div>
  );
};

