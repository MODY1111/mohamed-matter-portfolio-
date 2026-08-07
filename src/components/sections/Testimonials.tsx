import { organizations } from "@/data/organizations";

export function Testimonials() {
  return (
    <div id="testimonial" className="section-testimonial flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-tes" />
        Trusted By
      </div>
      <div className="heading overflow-hidden">
        <div className="head-left">
          <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
            Organizations <br className="d-none d-lg-block" />
            I&apos;ve worked with
          </h4>
          <div className="box-counter effectFade fadeUp no-div">
            <div className="wg-counter">
              <p className="counter h1 d-flex font-2 letter-space--2 text-black-72">
                <span className="number" data-speed="1000" data-to="40">
                  0
                </span>
                +
              </p>
              <p className="text text-black-56">Completed projects</p>
            </div>
            <div className="wg-counter">
              <p className="counter h1 d-flex font-2 letter-space--2 text-black-72">
                <span className="number" data-speed="1000" data-to="20">
                  0
                </span>
                +
              </p>
              <p className="text text-black-56">Happy clients</p>
            </div>
          </div>
        </div>
      </div>

      <ul className="org-tag-list effectFade fadeUp no-div">
        {organizations.map((org) => (
          <li key={org.name} className="org-tag text-body-1 fw-medium text-black-72">
            {org.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
