import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "404 Not Found - Razor Infotech";

    let meta = document.querySelector('meta[name="prerender-status-code"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "prerender-status-code";
      document.head.appendChild(meta);
    }
    meta.content = "404";

    document.documentElement.setAttribute("data-status", "404");

    return () => {
      document.title = prevTitle;
      if (meta && meta.parentNode) meta.parentNode.removeChild(meta);
      document.documentElement.removeAttribute("data-status");
    };
  }, []);

  return (
    <main className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">404</h1>
        <p className="text-lg sm:text-xl mb-6">Page not found — the resource you requested does not exist.</p>
        <Link to="/" className="inline-block bg-secondary text-white px-6 py-3 rounded-full">Go back home</Link>
      </div>
    </main>
  );
}
