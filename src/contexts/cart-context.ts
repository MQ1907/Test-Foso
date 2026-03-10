import { createContext } from "react"
import type { CartItem, BookingData } from "@/types/cart"

export interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalAmount: number
  totalItems: number
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  bookingData: BookingData | null
  setBookingData: (data: BookingData | null) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)
