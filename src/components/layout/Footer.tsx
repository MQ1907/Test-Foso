import { Link } from "react-router";
import { PATH_NAMES } from "@/constants";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#1a120a] text-zinc-100">
      <div className="absolute inset-0 opacity-25">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_10%,rgba(245,158,11,0.22),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(245,158,11,0.14),transparent_45%),linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.7))]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr,1fr,0.9fr]">
          <div className="space-y-4">
            <div>
              <div className="text-sm font-semibold tracking-[0.22em] text-amber-100/90">
                THE OM
              </div>
              <div className="text-[11px] tracking-[0.35em] text-zinc-200/70">
                LOUNGE
              </div>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-zinc-200/70">
              Không gian thư giãn tinh tế với dịch vụ chăm sóc cơ thể & móng,
              kết hợp coffee corner dành riêng cho bạn.
            </p>
            <div className="flex items-center gap-3 text-xs text-zinc-200/70">
              <span>FB</span>
              <span>IG</span>
              <span>TikTok</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium tracking-[0.22em] text-amber-100/80">
              MENU
            </p>
            <div className="flex flex-col gap-2 text-sm text-zinc-200/75">
              <Link className="hover:text-amber-100" to={PATH_NAMES.HOME}>
                Trang chủ
              </Link>
              <Link className="hover:text-amber-100" to={PATH_NAMES.ABOUT}>
                Giới thiệu
              </Link>
              <Link className="hover:text-amber-100" to={PATH_NAMES.SERVICES}>
                Dịch vụ
              </Link>
              <Link className="hover:text-amber-100" to={PATH_NAMES.CONTACT}>
                Liên hệ
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium tracking-[0.22em] text-amber-100/80">
              LIÊN HỆ
            </p>
            <div className="space-y-2 text-xs leading-relaxed text-zinc-200/70">
              <p>Hotline: 0900 000 000</p>
              <p>Giờ mở cửa: 09:00 – 21:00</p>
              <p>Địa chỉ: (Cập nhật theo spa của bạn)</p>
            </div>
          </div>

          <div className="space-y-3 md:text-right">
            <p className="text-xs font-medium tracking-[0.22em] text-amber-100/80">
              ĐẶT LỊCH
            </p>
            <Button className="w-full md:w-auto">Đặt lịch ngay</Button>
            <p className="text-[11px] text-zinc-300/60">
              Ưu đãi cho khách đặt lịch online.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-zinc-400 md:flex-row">
          <p>&copy; 2026 The OM Lounge</p>
          <p className="text-zinc-400/80">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

