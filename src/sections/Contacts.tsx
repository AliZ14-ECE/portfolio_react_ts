const contactItems = [
    {
        label: "Location",
        value: "Najaf, Iraq",
        href: "https://www.google.com/maps/search/?api=1&query=Najaf%2C%20Iraq",
    },
    {
        label: "Phone",
        value: "07815654550",
        href: "tel:07815654550",
    },
    {
        label: "Email",
        value: "ali.alobadye@gmail.com",
        href: "mailto:ali.alobadye@gmail.com",
    },
    {
        label: "GitHub",
        value: "github.com/AliZ14-ECE",
        href: "https://github.com/AliZ14-ECE",
    },
    {
        label: "Portfolio",
        value: "aliz14-ece.github.io/portolio_nextjs",
        href: "https://aliz14-ece.github.io/portolio_nextjs",
    },
];

export const Contacts = () => {
    return (
        <section id="contacts" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            Contact
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                            Let&#39;s build something impactful together.
                        </h2>
                        <p className="text-muted-foreground max-w-xl">
                            I&#39;m open to full-time roles, freelance projects, and
                            collaboration opportunities. Reach out and I&#39;ll respond quickly.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="mailto:ali.alobadye@gmail.com"
                                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90"
                            >
                                Send Email
                            </a>
                            <a
                                href="tel:07815654550"
                                className="px-6 py-3 rounded-full border border-border text-foreground hover:border-primary/60 hover:text-primary"
                            >
                                Call Me
                            </a>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {contactItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="glass rounded-2xl p-5 hover:border-primary/60 transition-colors"
                            >
                                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                    {item.label}
                                </p>
                                <p className="text-lg font-medium text-white mt-1">
                                    {item.value}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};