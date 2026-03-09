import { Link, Outlet } from "react-router";
import { PATH_NAMES } from "@/constants";

export const Layout = () => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <nav>
          <Link to={PATH_NAMES.HOME}>Home</Link>
          <Link to={PATH_NAMES.ABOUT}>About</Link>
          <Link to={PATH_NAMES.CONTACT}>Contact</Link>
        </nav>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 My App</p>
      </footer>
    </div>
  );
};
