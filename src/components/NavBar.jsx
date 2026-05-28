import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex h-[46px] items-center justify-between p-2 mx-auto w-full max-w-4xl bg-[#1f1f1f] text-primary rounded-full border">
      <div className="flex items-center">
        <div className="w-5 h-5 border-border border rounded-full"></div>
        <Link to="/" className="mx-2">Movie App</Link>
      </div>
      <div className="flex items-center">
        <div className="px-4">
          <Link to="/">Home</Link>
        </div>
        <div className="px-4">
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
    </nav>
  );
}
