import customer1 from "@/assets/khachhang1.png";
import customer2 from "@/assets/khachhang2.png";
import customer3 from "@/assets/booking.png";

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "thuy-do-1",
    name: "Thùy Đỗ",
    quote:
      "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng.",
    image: customer1,
  },
  {
    id: "thuy-do-2",
    name: "Thùy Đỗ",
    quote:
      "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng.",
    image: customer2,
  },
  {
    id: "john-doe",
    name: "John Doe",
    quote:
      "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng.",
    image: customer3,
  },
];

