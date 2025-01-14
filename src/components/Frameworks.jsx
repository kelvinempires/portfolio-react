import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faReact,
  faNodeJs,
  faBootstrap,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Importing the icons for the first list
import {
  faDatabase,
  faCloud,
} from "@fortawesome/free-solid-svg-icons"; // Importing additional icons

const Frameworks = () => {
  return (
    <div className="space-y-6 pl-2 border-r-2 pt-40">
      <div className="flex">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faCloud}
            className="text-blue-600 text-2xl md:text-3xl"
          />
        </a>
      </div>

      <div className="flex">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faBootstrap}
            className="text-blue-400 text-2xl md:text-3xl"
          />
        </a>
      </div>

      <div className="flex">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faCss3Alt}
            className="text-blue-700 text-2xl md:text-3xl"
          />
        </a>
      </div>
      <div className="flex">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-black text-2xl md:text-3xl"
          />
        </a>
      </div>

      <div className="flex">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faDatabase}
            className="text-blue-600 text-2xl md:text-3xl"
          />
        </a>
      </div>

      <div className="flex">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faReact}
            className="text-pink-600 text-2xl md:text-3xl"
          />
        </a>
      </div>

      <div className="flex">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faNodeJs}
            className="text-green-500 text-2xl md:text-3xl"
          />
        </a>
      </div>
    </div>
  );
};

export default Frameworks;
