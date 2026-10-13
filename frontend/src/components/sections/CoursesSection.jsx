import courses from "../../data/courses.json";

const tones = {
  primary: {
    badge: "bg-primary-fixed",
    icon: "text-primary",
    label: "text-primary",
  },
  tertiary: {
    badge: "bg-tertiary-fixed",
    icon: "text-tertiary",
    label: "text-tertiary",
  },
  secondary: {
    badge: "bg-secondary-container",
    icon: "text-on-secondary-container",
    label: "text-secondary",
  },
};

export default function CoursesSection() {
  return (
    <section className="mt-[120px] bg-white py-24" id="courses">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-headline-lg font-semibold text-primary">Popular Programs</h2>
          <p className="mx-auto max-w-2xl text-body-md text-on-surface-variant">
            Discover market-leading courses designed to transform you into a future-ready
            professional.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {courses.map((course) => {
            const tone = tones[course.tone] || tones.primary;
            return (
              <article
                key={course.name}
                className="group rounded-xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg ${tone.badge} transition-transform group-hover:scale-110`}
                >
                  <span className={`material-symbols-outlined text-3xl ${tone.icon}`}>
                    {course.icon}
                  </span>
                </div>
                <span className={`mb-2 block text-label-bold font-semibold uppercase ${tone.label}`}>
                  {course.category}
                </span>
                <h3 className="mb-4 text-headline-md font-semibold text-primary">{course.name}</h3>
                <p className="mb-6 text-body-md text-on-surface-variant">{course.description}</p>
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 text-label-bold font-semibold text-primary transition-all group-hover:gap-3"
                >
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
