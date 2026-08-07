import { awards } from "@/data/awards";

export function About() {
  return (
    <div id="about" className="section-about flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-user-circle" />
        About
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        Designing products and <br className="d-none d-lg-block" />
        interfaces with clarity, research, <br className="d-none d-lg-block" />
        and design systems
      </h4>
      <p className="s-desc text-black-56 scrolling-effect effectTop">
        I'm a UI/UX Designer with 4+ years of experience across government, AI, fintech, SaaS,
        <br className="d-none d-lg-block" /> healthcare, mobility, and e-commerce products. <br />
        <br />
        I own the full design process—sitting in on client discovery, running UX research, <br className="d-none d-lg-block" />
        building wireframes and prototypes, and handing clean, well-documented designs to developers.
      </p>
      <ul className="award-list">
        {awards.map((a) => (
          <li className="award-item hover-cursor-img" key={a.name + a.year}>
            <div className="left">
              <h6 className="award_name letter-space--2 text-black-72">{a.name}</h6>
              <p className="award_desc text-black-56">{a.publisher}</p>
            </div>
            <h6 className="award_year text-black-72">{a.year}</h6>
            <div className="award_img hover-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" width={158} height={224} src={a.image} alt={a.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
