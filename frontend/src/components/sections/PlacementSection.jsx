import placements from "../../data/placements.json";

export default function PlacementSection() {
  return (
    <section className="mt-[120px] bg-primary py-24 text-on-primary" id="placements">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-display-xl">
              Career Excellence & Placements
            </h2>
            <p className="mb-12 text-body-lg text-on-primary-container">
              We don&apos;t just provide education; we build careers. Our placement cell works with
              500+ global recruiters to ensure our students land their dream roles.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="rounded-xl border border-white/10 bg-primary-container p-8">
                <p className="mb-2 text-caption tracking-widest text-on-primary-container uppercase">
                  Average Package
                </p>
                <p className="text-4xl font-extrabold text-white">{placements.averagePackage}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-primary-container p-8">
                <p className="mb-2 text-caption tracking-widest text-on-primary-container uppercase">
                  Highest Package
                </p>
                <p className="text-4xl font-extrabold text-white">{placements.highestPackage}</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h4 className="mb-8 text-center text-label-bold font-semibold tracking-widest uppercase">
              Top Hiring Partners
            </h4>
            <div className="grid grid-cols-3 gap-8 opacity-70">
              {placements.recruiters.map((recruiter) => (
                <div
                  key={recruiter}
                  className="flex h-16 items-center justify-center text-center text-lg font-bold tracking-tighter md:text-2xl"
                >
                  {recruiter}
                </div>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-4 rounded-xl bg-primary-container p-6">
              <span className="material-symbols-outlined text-4xl text-on-primary-container">
                rocket_launch
              </span>
              <p className="text-body-md font-medium">
                Over {placements.rate} placement rate for the {placements.batch} batch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
