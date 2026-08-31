import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ArrowUpRight from "../assets/icons/arrow-up-right";
import Button from "./Button";
import { email } from "../constants";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".header-pill", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50"
    >
      <div className="header-pill flex justify-between items-center w-full max-w-5xl mx-auto border rounded-4xl px-6 py-2.5 bg-white/10 backdrop-blur-md backdrop-saturate-150 border-neutral-200/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]">
        <h1 className="text-xl font-bold tracking-tight">Swaraj</h1>
        <div className="flex gap-4 items-center">
          <Button variant="primary" as="a" href={email}>
            Let's Talk <ArrowUpRight className="size-4 ml-1" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
