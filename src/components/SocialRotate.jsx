import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialRotate = () => {
  return (
    <div className="fixed bottom-[9rem] left-[-8rem] hidden lg:flex items-center gap-6 rotate-90">
      <a
        href="https://www.instagram.com/kelvin_empires"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-zinc-400 text-2xl"
        />
      </a>
      <a
        href="https://twitter.com/kelvinEwurum"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faTwitter} className="text-zinc-400 text-2xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/kelvin-ewurum/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-zinc-400 text-2xl" />
      </a>
      <a
        href="https://github.com/kelvinempires?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faGithub} className="text-zinc-400 text-2xl" />
      </a>
      <a
        href="mailto:kelvinewurum@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faEnvelope} className="text-zinc-400 text-2xl" />
      </a>
      <span className="w-28 h-0.5 bg-slate-400"></span>
    </div>
  );
};

export default SocialRotate;
