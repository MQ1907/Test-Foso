import { Routes } from "./routes";
import { CartProvider } from "@/contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}

export default App;
