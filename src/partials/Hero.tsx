import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello! I'm <GradientText>Nick Alico</GradientText>.
          <span className="animate-pulse justify-center pl-2">|</span>
        </>
      }
      description={
        <>
          I'm a software engineer passionate about UX, HCI, and Design Systems{' '}
          <ul>
            <li className="flex align-middle">
              <img src="/assets/images/sun-dynamic-color.png" width="7%" />
              <div className="flex items-center">
                UI/UX Engineer @{' '}
                <a
                  className="ml-1 align-middle text-cyan-400 hover:underline"
                  href="https://cra.com/"
                >
                  Charles River Analytics
                </a>
              </div>
            </li>
            <li className="flex align-middle">
              <img
                src="/assets/images/notebook-dynamic-premium.png"
                width="7%"
              />
              <div className="flex items-center">
                <a
                  className="align-middle text-cyan-400 hover:underline"
                  href="https://ist.psu.edu/prospective/undergraduate/academics/hcdd"
                >
                  B.S. Human-Centered Design & Development - Penn State
                </a>
              </div>
            </li>
            <li>
              <ul className="ml-14">
                <li>
                  <a
                    className="align-middle text-cyan-400 hover:underline"
                    href="https://www.shc.psu.edu/"
                  >
                    - Schreyer Honors College &{' '}
                  </a>
                  <a
                    className="align-middle text-cyan-400 hover:underline"
                    href="https://ist.psu.edu/"
                  >
                    College of IST
                  </a>
                </li>
                <li>- HCI Focus</li>
              </ul>
            </li>
            <li className="flex align-middle">
              <img
                src="/assets/images/file-text-dynamic-premium.png"
                width="7%"
              />
              <div className="flex items-center">
                <a
                  className="ml-1 align-middle text-cyan-400 hover:underline"
                  href="https://honors.libraries.psu.edu/files/final_submissions/7812"
                >
                  Honors Thesis
                </a>
              </div>
            </li>
          </ul>
        </>
      }
      avatar={
        <img
          className="w-80"
          src="/assets/images/headshot-removebg.png"
          alt="Nick's headshot"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/" className="w-14">
            <img src="/assets/images/linkedin-icon.png" alt="Linkedin icon" />
          </a>
          <a href="/" className="w-14">
            <img src="/assets/images/twitter-logo.png" alt="Twitter icon" />
          </a>
          <a href="/" className="mt-2 w-10">
            <img src="/assets/images/mastodon-logo.png" alt="Mastodon icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
