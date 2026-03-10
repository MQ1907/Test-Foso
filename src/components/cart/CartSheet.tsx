import { X, Minus, Plus, Clock, User } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BookingStep } from "./BookingStep.tsx";
import { SuccessModal } from "./SuccessModal.tsx";

export function CartSheet() {
  const { items, updateQuantity, removeItem, totalAmount, isOpen, setIsOpen } =
    useCart();
  const [step, setStep] = useState<"cart" | "booking">("cart");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleContinue = () => {
    if (items.length === 0) return;
    setStep("booking");
  };

  const handleBookingComplete = () => {
    setStep("cart");
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setIsOpen(false);
  };

  const handleBack = () => {
    setStep("cart");
  };

  // Reset step khi đóng sheet
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setStep("cart");
    }
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetContent className="w-full sm:max-w-md bg-[#f5efe6] border-none">
          {step === "cart" ? (
            <>
              <SheetHeader className="border-b border-amber-900/20 pb-4">
                <SheetTitle className="text-2xl font-semibold text-amber-900">
                  Giỏ Hàng
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-full">
                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto py-6 space-y-4">
                  {items.length === 0 ? (
                    <div className="text-center py-12 text-amber-900/60">
                      <p>Giỏ hàng trống</p>
                    </div>
                  ) : (
                    items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 bg-white rounded-lg p-3 shadow-sm relative"
                      >
                        {/* Image */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />

                        {/* Info */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-amber-900 text-sm">
                                {item.name}
                              </h4>
                              <p className="text-amber-900 font-semibold text-sm mt-1">
                                {item.price.toLocaleString("vi-VN")} ₫
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-amber-900/50 hover:text-amber-900"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Duration indicator */}
                          {item.duration && (
                            <div className="flex items-center gap-1 text-xs text-amber-900/60 mt-1">
                              <Clock className="w-3 h-3" />
                              <span>{item.duration} phút</span>
                            </div>
                          )}

                          {/* Quantity controls */}
                          <div className="flex items-center justify-end gap-2 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-7 h-7 rounded-full border border-amber-900/30 flex items-center justify-center hover:bg-amber-100 transition"
                            >
                              <Minus className="w-3 h-3 text-amber-900" />
                            </button>
                            <span className="w-8 text-center font-medium text-amber-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-7 h-7 rounded-full border border-amber-900/30 flex items-center justify-center hover:bg-amber-100 transition"
                            >
                              <Plus className="w-3 h-3 text-amber-900" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                  <div className="border-t border-amber-900/20 pt-4 space-y-4">
                    {/* Thông tin thêm */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-amber-900/70">
                        <User className="w-4 h-4" />
                        <span>Kỹ thuật viên</span>
                        <span className="ml-auto font-medium text-amber-900">
                          Võ Thị Bích Phượng
                        </span>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between items-center py-3 border-y border-amber-900/20">
                      <span className="text-sm text-amber-900/70">
                        Tổng thanh toán
                      </span>
                      <span className="text-xl font-bold text-amber-900">
                        {totalAmount.toLocaleString("vi-VN")} ₫
                      </span>
                    </div>

                    {/* Continue Button */}
                    <Button
                      onClick={handleContinue}
                      className="w-full bg-linear-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white h-12 text-base font-medium rounded-lg shadow-md"
                    >
                      Tiếp Tục →
                    </Button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <BookingStep
              onBack={handleBack}
              onComplete={handleBookingComplete}
            />
          )}
        </SheetContent>
      </Sheet>

      <SuccessModal open={showSuccess} onClose={handleCloseSuccess} />
    </>
  );
}
