export default function Footer() {
  return (
    <footer className="mt-[120px] w-full border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-8 px-8 py-16 md:flex-row">
        <div className="space-y-4">
          <div className="text-lg font-bold text-slate-400">EduQuery</div>
          <p className="max-w-sm text-xs tracking-widest text-slate-500 uppercase">
            © 2024 University Help Desk. Providing calm clarity for every student journey.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-xs tracking-widest uppercase">
          <a className="text-slate-500 transition-colors hover:text-blue-600" href="#admissions">
            Privacy Policy
          </a>
          <a className="text-slate-500 transition-colors hover:text-blue-600" href="#admissions">
            Admissions Support
          </a>
          <a className="text-slate-500 transition-colors hover:text-blue-600" href="#placements">
            Campus Security
          </a>
          <a className="text-slate-500 transition-colors hover:text-blue-600" href="#faqs">
            Contact Faculty
          </a>
        </div>
      </div>
    </footer>
  );
}
