import { __unstable__loadDesignSystem } from "tailwindcss";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/*Bg*/}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full opacity-40 "
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
          style={{
            backgroundColor:"#20B2A6",
            left: `${Math.random()*100}%`,
            top: `${Math.random()*100}%`,

          }}
          />
        ))}
      </div>
    </section>
  );
};
