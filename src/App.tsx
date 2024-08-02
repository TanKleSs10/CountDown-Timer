import { useEffect, useState } from "react";
import Icon from "./components/icon-social";
import { calculateTimeLeft } from "./utils";
import FieldDate from "./components/FieldDate";
import bgStars from "../public/images/bg-stars.svg"; // Importación de imágenes
import patternHills from "../public/images/pattern-hills.svg"; // Importación de imágenes

function App() {
  const dateFinish = +new Date("2024-08-16");
  const [timer, setTimer] = useState(calculateTimeLeft(dateFinish));

  useEffect(() => {
    const timerLeft = setInterval(() => {
      setTimer(calculateTimeLeft(dateFinish));
    }, 1000);

    return () => clearInterval(timerLeft);
  }, [dateFinish]);

  return (
    <>
      <main className="h-screen w-screen bg-gradient-to-b from-VeryDarkBlueMostly to-VeryDarkBlue flex flex-col relative">
        <img
          className="absolute w-full h-full object-cover"
          src={bgStars}
          alt="Background stars"
        />
        <section className="relative mx-auto my-auto space-y-20">
          <h1 className="uppercase font-RedHat font-bold text-white tracking-VeryWidest text-center text-lg">
            We’re Launching Soon
          </h1>
          <div className="w-full flex gap-4 justify-center">
            <FieldDate label="days">{timer.days || 0}</FieldDate>
            <FieldDate label="hours">{timer.hours || 0}</FieldDate>
            <FieldDate label="minutes">{timer.minutes || 0}</FieldDate>
            <FieldDate label="seconds">{timer.seconds || 0}</FieldDate>
          </div>
        </section>
        <footer className="z-10 w-full flex flex-col gap-4 justify-center text-center mb-5 sm:mb-1 text-white overflow-hidden">
          <div className="flex justify-center gap-8">
            <a href="https://facebook.com" aria-label="Facebook">
              <Icon icon="facebook" w="25" h="25" fill="#fff" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Icon icon="instagram" w="25" h="25" fill="#fff" />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest">
              <Icon icon="pinterest" w="25" h="25" fill="#fff" />
            </a>
          </div>
          <a
            href="https://www.frontendmentor.io/profile/TanKleSs10"
            className="text-GrayishBlue text-[0.7em] font-bold uppercase tracking-VeryWidest"
          >
            By Diego Meza
          </a>
        </footer>
        <img
          className="absolute bottom-0 h-36 sm:h-28 w-full"
          src={patternHills}
          alt="Pattern hills"
        />
      </main>
    </>
  );
}

export default App;
