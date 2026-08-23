import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ArrowUpRight from "../assets/icons/arrow-up-right";
import Github from "../assets/icons/github";
import Linkedin from "../assets/icons/linkedin";
import Button from "./Button";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.from(".hero-name-word", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
      })
        .from(
          ".hero-content-left > *",
          {
            y: 30,
            opacity: 0,
            stagger: 0.12,
          },
          "-=0.5",
        )
        .from(
          ".hero-social-item",
          {
            x: 20,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative h-screen max-w-4xl mx-auto">
      <div className="absolute flex w-full justify-center items-center top-[20%] z-2">
        <h1 className="text-5xl md:text-7xl font-bold text-center flex gap-4 letter-spacing-[0.5rem] overflow-hidden">
          <span className="hero-name-word inline-block text-white [text-shadow:1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000]">
            SWARAJ
          </span>
          <span className="hero-name-word inline-block">NATH</span>
        </h1>
      </div>

      <div className="absolute px-8 flex max-md:flex-col w-full max-md:justify-center justify-between top-[50%] z-2">
        <div className="hero-content-left max-w-80 flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Software Engineer</h3>
          <p className="text-neutral-600 text-sm leading-relaxed">
            Bridging modern frontend engineering with applied generative AI to
            deliver intuitive digital products.
          </p>
          <div>
            <Button variant="primary">
              Lets Collaborate
              <ArrowUpRight className="size-6" />
            </Button>
          </div>
        </div>

        <div>
          <ul className="flex flex-col gap-4 max-md:justify-center max-md:mt-4">
            <li className="hero-social-item">
              <Button variant="secondary">
                <Linkedin className="size-6" />
                Linkedin
              </Button>
            </li>
            <li className="hero-social-item">
              <Button variant="secondary">
                <Github className="size-6" /> GitHub
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
