import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

interface BookingStepProps {
  onBack: () => void;
  onComplete: () => void;
}

const TIME_SLOTS = [
  { time: "09:00", period: "Sáng" },
  { time: "09:30", period: "Sáng" },
  { time: "10:00", period: "Sáng" },
  { time: "10:30", period: "Sáng" },
  { time: "11:00", period: "Sáng" },
  { time: "11:30", period: "Sáng" },
  { time: "12:00", period: "Chiều" },
  { time: "12:30", period: "Chiều" },
  { time: "01:00", period: "Chiều" },
  { time: "01:30", period: "Chiều" },
  { time: "02:00", period: "Chiều" },
  { time: "02:30", period: "Chiều" },
  { time: "03:00", period: "Chiều" },
  { time: "03:30", period: "Chiều" },
  { time: "04:00", period: "Chiều" },
  { time: "04:30", period: "Chiều" },
  { time: "05:00", period: "Chiều" },
  { time: "05:30", period: "Chiều" },
  { time: "06:00", period: "Chiều" },
  { time: "06:30", period: "Chiều" },
];

export function BookingStep({ onBack, onComplete }: BookingStepProps) {
  const { setBookingData } = useCart();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate calendar days
  const generateCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    // Empty cells before first day
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Days of month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const handleDateSelect = (day: number | null) => {
    if (!day) return;
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    );
    setSelectedDate(date.toISOString().split("T")[0]);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setBookingData({
        date: selectedDate,
        time: selectedTime,
        technician: "Võ Thị Bích Phượng",
      });
      onComplete();
    }
  };

  const monthNames = [
    "Thg 1",
    "Thg 2",
    "Thg 3",
    "Thg 4",
    "Thg 5",
    "Thg 6",
    "Thg 7",
    "Thg 8",
    "Thg 9",
    "Thg 10",
    "Thg 11",
    "Thg 12",
  ];

  const weekDays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-amber-900/20 pb-4">
        <button
          onClick={onBack}
          className="text-amber-900 hover:text-amber-700"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-semibold text-amber-900">
          Xác Nhận Đặt Lịch
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto py-6 space-y-6">
        {/* Customer info */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-amber-900/70 uppercase tracking-wider">
            Tên khách hàng
          </label>
          <div className="text-base font-medium text-amber-900">Thúy Đô</div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-amber-900/70 uppercase tracking-wider">
            Số điện thoại
          </label>
          <div className="text-base font-medium text-amber-900">
            0900 886 969
          </div>
        </div>

        {/* Date Selection */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-amber-900/70 uppercase tracking-wider">
            Chọn ngày
          </label>

          {/* Calendar */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() - 1,
                    ),
                  )
                }
                className="text-amber-900 hover:text-amber-700"
              >
                ←
              </button>
              <span className="font-medium text-amber-900">
                {monthNames[currentMonth.getMonth()]}{" "}
                {currentMonth.getFullYear()}
              </span>
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() + 1,
                    ),
                  )
                }
                className="text-amber-900 hover:text-amber-700"
              >
                →
              </button>
            </div>

            {/* Week days */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-amber-900/60 py-1"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1">
              {generateCalendar().map((day, index) => {
                const isSelected =
                  day &&
                  selectedDate ===
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth(),
                      day,
                    )
                      .toISOString()
                      .split("T")[0];

                return (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(day)}
                    disabled={!day}
                    className={`
                      aspect-square flex items-center justify-center text-sm rounded-lg
                      ${!day ? "invisible" : ""}
                      ${
                        isSelected
                          ? "bg-amber-600 text-white font-semibold"
                          : "hover:bg-amber-100 text-amber-900"
                      }
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Time Selection */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-amber-900/70 uppercase tracking-wider">
            Chọn giờ
          </label>
          <div className="grid grid-cols-4 gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot.time}
                onClick={() => setSelectedTime(slot.time)}
                className={`
                  py-2 px-3 text-xs rounded-lg border transition
                  ${
                    selectedTime === slot.time
                      ? "bg-amber-600 border-amber-600 text-white font-semibold"
                      : "bg-white border-amber-900/20 text-amber-900 hover:border-amber-600"
                  }
                `}
              >
                <div>{slot.time}</div>
                <div className="text-[10px] opacity-70">{slot.period}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-amber-900/20 pt-4">
        <Button
          onClick={handleBooking}
          disabled={!selectedDate || !selectedTime}
          className="w-full bg-linear-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white h-12 text-base font-medium rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Đặt Lịch →
        </Button>
      </div>
    </div>
  );
}
