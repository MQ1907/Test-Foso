export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  duration?: number // thời gian (phút)
}

export interface BookingData {
  date: string
  time: string
  technician?: string
}
