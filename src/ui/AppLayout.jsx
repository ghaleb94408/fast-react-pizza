import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
}
