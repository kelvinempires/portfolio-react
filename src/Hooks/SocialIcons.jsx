import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="md:space-y-6 space-y-4 pl-2 border-r-[0.01px] sticky left-0">
      <div>
        <a
          href="mailto:kelvinewurum@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-blue-600 text-2xl md:text-3xl pt-10"
          />
        </a>
      </div>

      <div>
        <a href="tel:+2349153421622" className="flex items-center">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-green-600 text-2xl mr-4 md:text-3xl md:mr-2"
          />
        </a>
      </div>

      <div>
        <a
          href="https://twitter.com/kelvinEwurum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-blue-400 text-2xl md:text-3xl"
          />
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/kelvinEwurum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-blue-700 text-2xl md:text-3xl"
          />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/kelvinempires?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-black text-2xl md:text-3xl"
          />
        </a>
      </div>

      <div>
        <a
          href="https://www.facebook.com/chibuike.kelvin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-blue-600 text-2xl md:text-3xl"
          />
        </a>
      </div>

      <div>
        <a
          href="https://www.instagram.com/kelvin_empires"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-pink-600 text-2xl md:text-3xl"
          />
        </a>
      </div>

      <div>
        <a
          href="https://wa.me/2349153421622"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-green-500 text-2xl md:text-3xl"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
