import { Link } from "react-router";
import { PATH_NAMES } from "@/constants";

export const Footer = () => {
  return (
    <footer className="bg-[#22130a] text-[#f7e3bf]">
      <div className="mx-auto max-w-6xl px-10 py-16">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo + brand (trái, giống mẫu) */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-200/70">
                <span className="text-sm font-semibold tracking-[0.22em] text-amber-100">
                  OM
                </span>
              </div>
              <div>
                <div className="text-base font-semibold tracking-[0.22em] text-amber-100/90">
                  THE OM
                </div>
                <div className="text-[11px] tracking-[0.35em] text-amber-50/80">
                  LOUNGE
                </div>
              </div>
            </div>
          </div>

          {/* Cụm giữa: Sitemap + Liên hệ (giữa ảnh) */}
          <div className="flex flex-col gap-10 lg:min-w-[320px] ml-[300px]">
            <div>
              <p className="text-[11px] font-medium tracking-[0.22em] text-amber-100/80 ">
                SITEMAP
              </p>
              <div className="mt-4 grid grid-cols-2 gap-x-16 gap-y-2 text-sm text-white text-[20px]">
                <div className="space-y-2">
                  <Link className="block hover:text-amber-100" to={PATH_NAMES.HOME}>
                    Trang chủ
                  </Link>
                  <Link className="block hover:text-amber-100" to={PATH_NAMES.ABOUT}>
                    Giới thiệu
                  </Link>
                  <Link className="block hover:text-amber-100" to={PATH_NAMES.SERVICES}>
                    Dịch vụ
                  </Link>
                </div>
                <div className="space-y-2">
                  <Link className="block hover:text-amber-100" to={PATH_NAMES.NEWS}>
                    Tin tức
                  </Link>
                  <Link className="block hover:text-amber-100" to={PATH_NAMES.CONTACT}>
                    Liên hệ
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-10">
              <div >
                <p className="mb-3 text-[11px] font-medium tracking-[0.22em] text-amber-100/80">
                  LIÊN HỆ
                </p>
                <div className="space-y-2 text-xs leading-relaxed text-white">
                  <p>+84 89 812 12 97</p>
                  <p>
                    6 Đường số P. Tân Phú, Quận 7, TP Hồ Chí Minh
                    <br />
                    (gần Crescent Mall)
                  </p>
                  <p>
                    Thứ 2 - Thứ 6: 09:00 - 19:00
                    <br />
                    Thứ 7 - Chủ nhật: 09:00 - 20:00
                  </p>
                </div>
              </div>
              {/* Nút đặt lịch hình oval bên phải giống mẫu */}
              <div className="flex flex-1 items-center justify-center lg:justify-end">
                <div className="flex h-32 w-64 items-center justify-center rounded-full border border-amber-200/70">
                  <button className="text-[11px] font-medium uppercase tracking-[0.32em] text-amber-100 hover:text-amber-300">
                    Đặt lịch ngay
                  </button>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>

      <div className="border-t border-amber-100/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-10 py-5 text-[11px] text-[#d2b88b]">
          <div className="flex items-center gap-4 text-xs">
            <span className="cursor-pointer hover:text-amber-100">f</span>
            <span className="cursor-pointer hover:text-amber-100">t</span>
            <span className="cursor-pointer hover:text-amber-100">zk</span>
          </div>
          <p className="ml-auto text-right">
            &copy; 2025 - Copyright THE OM Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

