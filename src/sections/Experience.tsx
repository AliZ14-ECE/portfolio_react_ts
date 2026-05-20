const experienceItems = [
    {
        role: "FTTH Quality Control Engineer",
        company: "Earthlink Telecommunication Company",
        period: "Jan 2022 – Dec 2025",
        location: "Iraq",
        highlights: [
            "Performed on-field inspection, testing, and troubleshooting of FTTH networks to meet industry standards.",
            "Built custom Python tools to automate reporting and quality-control workflows.",
            "Received the Innovation and Process Improvement Reward (2024) for a QGIS plugin that automated data filtering.",
        ],
    },
    {
        role: "Data Analysis and Visualization (Remote)",
        company: "Contract",
        period: "Apr 2023 – Oct 2024",
        location: "Remote",
        highlights: [
            "Gathered, cleaned, and analyzed reporting data with Python libraries.",
            "Built dashboards using Power BI and Excel to support decision making.",
        ],
    },
    {
        role: "Software Development",
        company: "University of Kufa",
        period: "2023",
        location: "Najaf, Iraq",
        highlights: [
            "Collaborated on a graduation tracking system for university departments.",
            "Contributed to database design, Golang backend services, and Flutter UI development.",
        ],
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-end justify-between gap-6 flex-wrap">
                    <div className="space-y-4">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            Experience
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                            Proven impact across telecom, analytics, and software.
                        </h2>
                    </div>
                    <div className="glass rounded-full px-4 py-2 text-sm text-muted-foreground">
                        4+ years of professional experience
                    </div>
                </div>

                <div className="mt-12 grid gap-6">
                    {experienceItems.map((item, idx) => (
                        <div key={idx} className="glass rounded-2xl p-6 md:p-8">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                                        {item.role}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {item.company} • {item.location}
                                    </p>
                                </div>
                                <span className="text-sm text-secondary-foreground bg-secondary/60 px-3 py-1 rounded-full">
                                    {item.period}
                                </span>
                            </div>

                            <ul className="mt-4 space-y-2 text-muted-foreground">
                                {item.highlights.map((highlight, hIdx) => (
                                    <li key={hIdx} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};