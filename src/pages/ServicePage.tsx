import { useState } from "react";
import { ServiceHero } from "../components/service/ServiceHero";
import { ServiceBlockSection } from "../components/service/ServiceBlockSection";
import { TestimonialsLikeSection } from "../components/service/TestimonialsLikeSection";
import { BookingHealingSection } from "../components/service/BookingHealingSection";
import {
  blocks,
  type MenuKey,
  tabs,
} from "../components/service/service-page.data";

export const ServicePage = () => {
  const [active, setActive] = useState<MenuKey>("combo");
  const [query, setQuery] = useState("");

  return (
    <div className="text-zinc-100">
      <ServiceHero
        tabs={tabs}
        active={active}
        onTabChange={setActive}
        query={query}
        onQueryChange={setQuery}
      />

      {blocks.map((b: (typeof blocks)[number], idx: number) => (
        <div key={b.key} id={`block-${b.key}`}>
          <ServiceBlockSection
            block={b}
            align={idx % 2 === 0 ? "image-left" : "image-right"}
          />
        </div>
      ))}

      <TestimonialsLikeSection />
      <BookingHealingSection />
    </div>
  );
};

