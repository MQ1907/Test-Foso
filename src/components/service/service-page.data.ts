import nailsImg from "@/assets/combo.jpg";
import medicureImg from "@/assets/medicure.png";
import pedicureImg from "@/assets/pedicure.png";
import hieuungImg from "@/assets/effect.png";
import drinkImg from "@/assets/thucuong.jpg";
export type MenuKey = "combo" | "medicure" | "pedicure" | "hieuung" | "drinks";

export type Tab = { key: MenuKey; label: string };

export type MenuItem = {
  id: string;
  title: string;
  desc?: string;
  price: string;
};

export type ServiceBlock = {
  key: MenuKey;
  title: string;
  image: string;
  items: MenuItem[];
};

export const tabs: Tab[] = [
  { key: "combo", label: "GÓI COMBO" },
  { key: "medicure", label: "MEDICURE" },
  { key: "pedicure", label: "PEDICURE" },
  { key: "hieuung", label: "HIỆU ỨNG" },
  { key: "drinks", label: "DRINKS" },
];

export const blocks: ServiceBlock[] = [
  {
    key: "combo",
    title: "Gói Combo",
    image: nailsImg,
    items: [
      {
        id: "combo-1",
        title: "Perfectly Polished",
        desc: "Làm móng & sửa (Mani/Pedi) cơ bản.",
        price: "390k",
      },
      {
        id: "combo-2",
        title: "Perfectly Polished",
        desc: "Làm móng & sửa (Mani/Pedi) cơ bản.",
        price: "390k",
      },
      {
        id: "combo-3",
        title: "Perfectly Polished",
        desc: "Làm móng & sửa (Mani/Pedi) cơ bản.",
        price: "390k",
      },
      {
        id: "combo-4",
        title: "Perfectly Polished",
        desc: "Làm móng & sửa (Mani/Pedi) cơ bản.",
        price: "390k",
      },
    ],
  },
  {
    key: "medicure",
    title: "Medicure",
    image: medicureImg,
    items: [
      {
        id: "med-1",
        title: "Perfectly Polished",
        desc: "Làm móng & sửa (Mani/Pedi) cơ bản.",
        price: "390k",
      },
      {
        id: "med-2",
        title: "Perfectly Polished",
        desc: "Làm móng & sửa (Mani/Pedi) cơ bản.",
        price: "390k",
      },
      {
        id: "med-3",
        title: "Perfectly Polished",
        desc: "Làm móng & sửa (Mani/Pedi) cơ bản.",
        price: "390k",
      },
      {
        id: "med-4",
        title: "Perfectly Polished",
        desc: "Làm móng & sửa (Mani/Pedi) cơ bản.",
        price: "390k",
      },
      {
        id: "med-5",
        title: "Perfectly Polished",
        desc: "Làm móng & sửa (Mani/Pedi) cơ bản.",
        price: "390k",
      },
      {
        id: "med-6",
        title: "Perfectly Polished",
        desc: "Làm móng & sửa (Mani/Pedi) cơ bản.",
        price: "390k",
      },
    ],
  },
  {
    key: "pedicure",
    title: "Pedicure",
    image: pedicureImg,
    items: [
      { id: "ped-1", title: "Perfectly Polished", price: "390k" },
      { id: "ped-2", title: "Perfectly Polished", price: "390k" },
      { id: "ped-3", title: "Perfectly Polished", price: "390k" },
      { id: "ped-4", title: "Perfectly Polished", price: "390k" },
    ],
  },
  {
    key: "hieuung",
    title: "Hiệu Ứng",
    image: hieuungImg,
    items: [
      { id: "fx-1", title: "Perfectly Polished", price: "390k" },
      { id: "fx-2", title: "Perfectly Polished", price: "390k" },
      { id: "fx-3", title: "Perfectly Polished", price: "390k" },
      { id: "fx-4", title: "Perfectly Polished", price: "390k" },
      { id: "fx-5", title: "Perfectly Polished", price: "390k" },
    ],
  },
  {
    key: "drinks",
    title: "Drinks",
    image: drinkImg,
    items: [
      { id: "d-1", title: "Latte", price: "50k" },
      { id: "d-2", title: "Espresso", price: "50k" },
      { id: "d-3", title: "Americano", price: "50k" },
      { id: "d-4", title: "Cappuccino", price: "50k" },
      { id: "d-5", title: "Milkshake", price: "50k" },
      { id: "d-6", title: "Juice", price: "50k" },
    ],
  },
];

