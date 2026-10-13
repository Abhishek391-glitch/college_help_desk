const heroImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80";

export default function HeroSection() {
  return (
    <section id="top" className="mx-auto flex max-w-[1120px] flex-col items-center gap-16 px-8 py-24 md:flex-row">
      <div className="flex-1 space-y-6">
        <span className="rounded-full bg-primary-fixed px-3 py-1 text-label-bold font-semibold tracking-widest text-primary uppercase">
          Intelligent Guidance
        </span>
        <h1 className="text-4xl leading-tight font-bold tracking-tight text-primary md:text-display-xl">
          Your Academic Journey Starts Here
        </h1>
        <p className="max-w-xl text-body-lg text-on-surface-variant">
          Navigate the complexities of university life with EduQuery. Our AI-powered help desk
          provides instant clarity on courses, admissions, and careers, tailored specifically for
          your future.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#courses"
            className="rounded-lg bg-primary px-8 py-4 text-label-bold font-semibold text-on-primary transition-all hover:shadow-lg"
          >
            Explore Programs
          </a>
          <a
            href="#admissions"
            className="rounded-lg border border-primary px-8 py-4 text-label-bold font-semibold text-primary transition-all hover:bg-primary/5"
          >
            View Admission Guide
          </a>
        </div>
      </div>
      <div className="relative flex-1">
        <div className="aspect-square overflow-hidden rounded-[2rem] shadow-2xl">
          <img
            className="h-full w-full object-cover"
            alt="Students collaborating on campus"
            src={heroImage}
          />
        </div>
        <div className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-6 shadow-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-fixed">
            <span className="material-symbols-outlined text-tertiary">verified</span>
          </div>
          <div>
            <p className="text-label-bold font-semibold">UGC Accredited</p>
            <p className="text-caption text-on-surface-variant">Top Tier Institution</p>
          </div>
        </div>
      </div>
    </section>
  );
}
