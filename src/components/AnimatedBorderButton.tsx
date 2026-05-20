import React from "react";

type AnimatedBorderButtonProps = {
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
};

export const AnimatedBorderButton = ({
  children,
  as = "button",
  href,
  target,
  rel,
  type = "button",
}: AnimatedBorderButtonProps) => {
  const classes =
    "relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border";

  const content = (
    <>
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      {children}
    </>
  );

  if (as === "a") {
    return (
      <a className={classes} href={href} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type}>
      {content}
    </button>
  );
};
