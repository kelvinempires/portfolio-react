import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import // faLocationDot,
// faEnvelope,
// faPhone,
"@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_oy5sbdl",
        "template_6c6178f",
        form.current,
        "CKwPb8q_vRop__IdF"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          e.target.reset();
          setLoading(false);
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          toast.error("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="section-p1 flex flex-col md:flex-row items-center justify-center py-12 px-8 sm:px-12 md:px-24 "
    >
      <div className="details w-full  md:w-1/2 mb-12 md:mb-0">
        <h2 className="text-4xl font-bold mb-4 text-zinc-400 mt-6">
          Contact Me
        </h2>
        <p className="mb-6">
          Fill out the form to discuss work opportunities or inquiries.
        </p>
        <form className="space-y-4 " ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="w-full md:w-3/4 p-2 border border-gray-300 rounded focus:border-indigo-500 hover:border-indigo-400 transition-colors duration-300"
            placeholder="Your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="w-full md:w-3/4 p-2 border border-gray-300 rounded focus:border-indigo-500 hover:border-indigo-400 transition-colors duration-300"
            placeholder="Your Email"
            name="your_email"
            required
          />
          <textarea
            className="w-full md:w-3/4 p-2 border border-gray-300 rounded focus:border-indigo-500 hover:border-indigo-400 transition-colors duration-300"
            name="message"
            rows="3"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full md:w-3/4 p-2 border rounded text-white flex items-center justify-center space-x-3 transition-all duration-300 ease-in-out"
            style={{
              background:
                "linear-gradient(45deg, rgb(169, 50, 210), rgb(110, 50, 207), rgb(57, 50, 187))",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(45deg, rgb(57, 50, 187), rgb(110, 50, 207), rgb(169, 50, 210))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(45deg, rgb(169, 50, 210), rgb(110, 50, 207), rgb(57, 50, 187))";
            }}
            disabled={loading}
          >
            {loading ? (
              <svg
                className="w-6 h-6 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            ) : (
              <span className="w-full md:w-2/1 relative inline-flex items-center justify-start px-7 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>{" "}
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Submit Message
                </span>
              </span>
            )}
          </button>
        </form>
        <ToastContainer />
        <h3 className="text-2xl font-semibold mt-8 mb-6 text-zinc-400">
          Would love to hear from you
        </h3>
        <div className="social-icons flex space-x-4 mb-6">
          <a
            href="https://twitter.com/kelvinEwurum"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-blue-400 text-2xl"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kelvin-ewurum/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-blue-700 text-2xl"
            />
          </a>
          <a
            href="https://www.facebook.com/chibuike.kelvin"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-600 text-2xl"
            />
          </a>
          <a
            href="https://www.instagram.com/kelvin_empires"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-pink-600 text-2xl"
            />
          </a>
          <a
            href="https://wa.me/2349153421622"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-green-500 text-2xl"
            />
          </a>
          <a
            href="https://github.com/kelvinempires?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} className="text-black text-2xl" />
          </a>
        </div>
        {/* <ul className="space-y-4">
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-red-600 text-2xl mr-4"
            />
            <p className="text-lg">19 Allen Avenue,Ikeja, Lagos, Nigeria</p>
          </li> */}
        {/* <li className="flex items-center">
            <a
              href="mailto:kelvinewurum@gmail.com"
              className="flex items-center"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blue-600 text-2xl mr-4"
              />
              <p className="text-lg">kelvinewurum@gmail.com</p>
            </a>
          </li> */}
        {/* <li className="flex items-center">
            <a href="tel:+2349153421622" className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-green-600 text-2xl mr-4"
              />
              <p className="text-lg">09153421622</p>
            </a>
          </li> */}
        {/* </ul> */}
      </div>
      <div className="map w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.362974706922!2d3.3494461735047723!3d6.601734522252316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9230fc4fc853%3A0xd8babb191dac2f6b!2sAllen%20Ave%2C%20Allen%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1729671204756!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
