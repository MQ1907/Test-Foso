import { Button } from "@/components/ui/button";
import bookingBg from "@/assets/bg1.png";

export const BookingHealingSection = () => {
  return (
    <section className="relative overflow-hidden py-14 text-white md:py-20">
      <img
        src={bookingBg}
        alt="Không gian thư giãn"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#3a1d0d]/70 via-55% to-[#2a1409] to-100%" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs tracking-[0.35em] text-zinc-100/70">
            ĐẶT LỊCH HẸN CHỮA LÀNH
          </p>
          <h3 className="mt-2 text-2xl font-light tracking-wide text-amber-50 md:text-3xl">
            Đặt lịch hẹn chữa lành
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-zinc-100/70 md:text-sm">
            Đến The OM Lounge để xả stress và làm mới mình. Vẻ đẹp bắt đầu từ
            những điều nhỏ nhất và lan tỏa đến cả tâm hồn.
          </p>

          <div className="mt-7 flex items-center justify-center">
            <Button
              size="lg"
              className="h-11 rounded-full px-9 text-sm font-semibold"
            >
              Trải nghiệm ngay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

