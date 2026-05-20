import { Button } from "../components/Button";
import { ArrowRight, ChevronDown, Download, Mail} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const socialMediaList = [
  { icon: BsGithub, href: "https://github.com/AliZ14-ECE" },
  { icon: BsLinkedin, href: "https://www.linkedin.com/in/ali-zaher-63a236184/" },
  { icon: Mail, href: "mailto:ali.alobadye@gmail.com" },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Flutter",
  "Dart",
  "Python",
  "Golang",
  "PostgreSQL",
  "Power BI",
  "Tailwind CSS",
  "Algorithms",
  "Problem Solving",
  "Git",
  "GitHub",
];

export const Hero = () => {
  const animationDelayBaseline = 100;
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/*Bg*/}
      <div className="absolute inset-0">
        <img
          src="/portfolio_react_ts/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full opacity-40 "
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 me-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Frontend & Mobile
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in"
                style={{
                  animationDelay: `${animationDelayBaseline}ms`,
                }}
              >
                Building <span className="text-primary glow-text">reliable</span>
                <br />
                digital products with
                <br />
                <span className="font-serif italic font-normal text-white">
                  care and clarity.
                </span>
              </h1>

              <p
                className="text-lg text-muted-foreground max-w-lg animate-fade-in"
                style={{
                  animationDelay: `${animationDelayBaseline * 2}ms`,
                }}
              >
                Hi, I'm Ali Zahir Al-Saygh, a software engineer based in Najaf,
                Iraq. I build performant web and mobile experiences with React,
                Next.js, Flutter, and TypeScript, and I enjoy turning complex
                requirements into clean, reliable software.
              </p>
            </div>

            {/*CTAs*/}
            <div
              className="flex flex-wrap gap-4 animate-fade-in"
              style={{
                animationDelay: `${animationDelayBaseline * 3}ms`,
              }}
            >
              <Button size="lg">
                <a className="inline-flex items-center" href="#contacts">
                  Contact Me <ArrowRight className="w-5 h-5" />
                  </a>
              </Button>

              <AnimatedBorderButton
                as="a"
                href="mailto:ali.alobadye@gmail.com?subject=Resume%20Request"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
              </AnimatedBorderButton>
            </div>

            {/* Social Links*/}
            <div
              className="flex items-center gap-4 animate-fade-in"
              style={{
                animationDelay: `${animationDelayBaseline * 4}ms`,
              }}
            >
              <span className="text-sm text-muted-foreground">
                {" "}
                Follow me on:{" "}
              </span>
              {socialMediaList.map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noreferrer">
                  {
                    <social.icon className="w-10 h-10 p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300" />
                  }
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image*/}
          <div className="relative animate-fade-in">
            {/*Profile Image*/}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/portfolio_react_ts/profile-photo.jpg"
                  alt="Ali Zahir Al-Saygh profile"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/*Floating Badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                    <span className="text-sm font-medium">
                      Available for job opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {skills.map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll button*/}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: `${animationDelayBaseline * 8}ms` }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
