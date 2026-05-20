const recognitions = [
    {
        title: "Innovation and Process Improvement Reward",
        detail:
            "Awarded in 2024 for building a QGIS plugin that automated telecom data filtering.",
    },
    {
        title: "Reliable Delivery",
        detail:
            "Consistent focus on quality, documentation, and stakeholder communication.",
    },
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="space-y-4">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                        Recognition and references available on request.
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        I&#39;m happy to share written recommendations and project references.
                        In the meantime, here are a few professional highlights.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {recognitions.map((item, idx) => (
                        <div key={idx} className="glass rounded-2xl p-6 md:p-8">
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <p className="mt-3 text-muted-foreground">{item.detail}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 glass rounded-2xl p-6 md:p-8 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-lg font-medium text-white">Want references?</p>
                        <p className="text-muted-foreground">Let&#39;s connect and I&#39;ll share them.</p>
                    </div>
                    <a
                        href="#contacts"
                        className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90"
                    >
                        Request References
                    </a>
                </div>
            </div>
        </section>
    );
};