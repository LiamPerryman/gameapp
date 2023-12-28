import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className=" bg-bgPrimary">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
