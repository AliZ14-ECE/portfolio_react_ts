const projects = [
    {
        title: "QGIS Data Filtering Plugin",
        description:
            "Automated filtering and validation workflows for telecom data to improve quality-control turnaround time.",
        tags: ["Python", "QGIS", "Automation"],
    },
    {
        title: "FTTH QC Toolkit",
        description:
            "Custom scripts and dashboards for field inspections, testing reports, and compliance tracking.",
        tags: ["Python", "Power BI", "Excel"],
    },
    {
        title: "Graduation Tracking System",
        description:
            "University platform built with a Golang backend and Flutter client for managing student progress.",
        tags: ["Golang", "Flutter", "PostgreSQL"],
    },
    {
        title: "Analytics Dashboards",
        description:
            "Interactive reporting dashboards for business stakeholders with automated data cleansing.",
        tags: ["Power BI", "Python", "Data Visualization"],
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="space-y-4">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Projects
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                        Selected work and technical highlights.
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {projects.map((project, idx) => (
                        <div key={idx} className="glass rounded-2xl p-6 md:p-8">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="mt-3 text-muted-foreground">
                                {project.description}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tags.map((tag, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-secondary/70 text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};