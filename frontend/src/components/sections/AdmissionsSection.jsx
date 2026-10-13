import admissions from "../../data/admissions.json";

export default function AdmissionsSection() {
  return (
    <section className="mt-[120px] py-24" id="admissions">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="flex-1">
            <h2 className="mb-8 text-headline-lg font-semibold text-primary">
              Seamless Admission Process
            </h2>
            <div className="space-y-8">
              {admissions.steps.map((step, index) => (
                <div key={step.title} className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-on-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="mb-2 text-label-bold font-semibold text-primary">{step.title}</h4>
                    <p className="text-body-md text-on-surface-variant">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-2xl border border-slate-200 bg-surface-container p-8 md:p-12" id="faqs">
            <h3 className="mb-6 text-headline-md font-semibold text-primary">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {admissions.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-lg border border-slate-100 bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-label-bold font-semibold hover:bg-slate-50">
                    {faq.question}
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="border-t border-slate-50 p-4 text-body-md text-on-surface-variant">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
