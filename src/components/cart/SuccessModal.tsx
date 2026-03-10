import { CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useCart } from "@/hooks/useCart";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  const { clearCart } = useCart();

  const handleClose = () => {
    clearCart();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <div className="flex flex-col items-center text-center space-y-4 py-6">
            {/* Success Icon */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              {/* Small decorative icon */}
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>

            {/* Success Text */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-amber-900">
                Gửi Yêu Cầu Thành Công!
              </h3>
              <p className="text-sm text-amber-900/70 leading-relaxed max-w-sm">
                Cảm ơn bạn đã đặt dịch vụ tại The OM Lounge. Chúng tôi đã nhận
                được thông tin đặt lịch từ bạn và sẽ liên hệ lại trong thời gian
                sớm nhất.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="mt-4 px-8 py-3 bg-linear-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-medium rounded-lg shadow-md transition-all"
            >
              Đóng
            </button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
