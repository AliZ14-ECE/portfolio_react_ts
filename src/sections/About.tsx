import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code with clear architecture and standards.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed, reliability, and delightful user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Partnering with teams to plan, build, and deliver quality.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Turning complex requirements into practical, user-friendly solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in text-secondary-foreground animation-delay-100">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I&#39;m a motivated engineer with a strong programming foundation
                and hands-on experience across quality control, software
                development, and data analysis. I enjoy building solutions that
                improve processes and create measurable impact.
              </p>
              <p>
                My focus is on frontend and mobile development with React,
                Next.js, Flutter, and TypeScript, backed by solid backend and
                database experience. I care about clean UX, maintainable
                architectures, and shipping reliable features.
              </p>
              <p>
                I&#39;m based in Najaf, Iraq, and I&#39;m always eager to learn new
                technologies, solve tough problems, and collaborate on impactful
                products.
              </p>
            </div>

            <div className="glass rounded-2xl px-2 p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column (for lg screens) - Highlights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
