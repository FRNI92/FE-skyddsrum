import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navigation } from "../navigation/Navigation";

export function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Hoppa till innehåll
      </a>
      <Navigation />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
