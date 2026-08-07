import { flipImages } from "@/data/flips";

export function IntroV2() {
  return (
    <div id="home" className="section-intro type-2 flat-spacing">
      <h1 className="s-title text-black-72 letter-space--2 split-text effect-blur-fade">
        Start designing <br className="d-none d-sm-block" />
        products & interfaces <br className="d-none d-sm-block" />
        people trust
      </h1>

      <div className="box-counter">
        <div className="wg-counter">
          <p className="counter h1 d-flex font-2 letter-space--2 text-black-72">
            <span className="number" data-speed="1000" data-to="4">
              0
            </span>
            +
          </p>
          <p className="text text-black-56 text-body-3">Year of experience</p>
        </div>
        <div className="wg-counter">
          <p className="counter h1 d-flex font-2 letter-space--2 text-black-72">
            <span className="number" data-speed="1000" data-to="40">
              0
            </span>
            +
          </p>
          <p className="text text-black-56 text-body-3">Completed Projects</p>
        </div>
      </div>

      <div className="flip-image-list gsap-anime-2">
        {flipImages.map((src, i) => (
          <div className="flip-image" key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" width={300} height={300} src={src} alt={`flip ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
