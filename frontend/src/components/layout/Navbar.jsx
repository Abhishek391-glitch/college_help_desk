import { useState } from "react";

const links = [
  { href: "#courses", label: "Courses" },
  { href: "#admissions", label: "Admissions" },
  { href: "#placements", label: "Placements" },
  { href: "#faqs", label: "FAQs" },
];

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function submitSearch(event) {
    event.preventDefault();
    const value = query.trim();
    if (!value) {
      return;
    }
    onSearch?.(value);
    setQuery("");
    setMenuOpen(false);
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1120px] items-center justify-between px-8">
        <a href="#top" className="text-xl font-black tracking-tighter text-blue-900">
          EduQuery Help Desk
        </a>

        <nav className="hidden items-center gap-8 text-sm tracking-tight md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 transition-all duration-200 hover:text-blue-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <form onSubmit={submitSearch} className="relative hidden lg:block">
            <input
              className="rounded-lg border border-slate-200 bg-slate-50 py-2 pr-4 pl-10 text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"
              placeholder="Search knowledge base..."
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <span className="material-symbols-outlined absolute top-1/2 left-3 -translate-y-1/2 text-sm text-slate-400">
              search
            </span>
          </form>
          <button
            type="button"
            className="hidden rounded-lg bg-primary px-6 py-2.5 text-label-bold font-semibold text-on-primary shadow-sm transition-colors hover:bg-primary-container md:inline-flex"
          >
            Student Portal
          </button>
          <button
            type="button"
            className="inline-flex rounded-lg border border-slate-200 p-2 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="space-y-3 border-t border-slate-100 bg-white px-8 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
