import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <main style={{ padding: "20px", width: "100%" }}>
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Layout;