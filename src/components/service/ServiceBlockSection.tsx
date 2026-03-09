import type { ServiceBlock } from "./service-page.data";
import { ServiceRow } from "./ServiceRow";

export const ServiceBlockSection = ({
  block,
  align = "image-left",
}: {
  block: ServiceBlock;
  align?: "image-left" | "image-right";
}) => {

  const image = (
    <div className="relative h-[1000px] w-full overflow-hidden lg:h-[400px] lg:max-w-[450px]">
      <img
        src={block.image}
        alt={block.title}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );

  const list = (
    <div className="space-y-6">
      <h3 className="text-3xl font-light tracking-wide text-[#E1C084]">
        {block.title}
      </h3>
      <div className="space-y-1">
        {block.items.map((item) => (
          <ServiceRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        {align === "image-left" ? (
          <>
            {image}
            {list}
          </>
        ) : (
          <>
            {list}
            {image}
          </>
        )}
      </div>
    </section>
  );
};

