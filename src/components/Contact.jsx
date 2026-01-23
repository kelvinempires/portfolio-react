import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";

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
import SectionHeader from "./reusableCom/SectionHeader";

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
        "CKwPb8q_vRop__IdF",
      )
      .then(
        () => {
          e.target.reset();
          setLoading(false);
          toast.success("Email sent successfully!");
        },
        () => {
          setLoading(false);
          toast.error("Failed to send email. Please try again.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 max-w-8xl mx-auto    "
    >
      {/* Updated Title Section */}
      <div className="text-center mb-16">
        <SectionHeader number="05" title="05. Get In Touch" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="details w-full md:w-1/2">
          <p style={{ color: "var(--text-secondary)" }} className="mb-8">
            Fill out the form for work opportunities or inquiries.
          </p>

          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="text-xs sm:text-sm md:text-base w-full p-3 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                color: "var(--text-primary)",
                border: "1px solid var(--text-secondary)",
              }}
              placeholder="Your Name"
              name="your_name"
              required
            />

            <input
              type="email"
              className="text-xs sm:text-sm md:text-base w-full p-3 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                color: "var(--text-primary)",
                border: "1px solid var(--text-secondary)",
              }}
              placeholder="Your Email"
              name="your_email"
              required
            />

            <textarea
              className="text-xs sm:text-sm md:text-base w-full p-3 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                color: "var(--text-primary)",
                border: "1px solid var(--text-secondary)",
              }}
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full p-3 rounded text-white flex items-center justify-center relative overflow-hidden transition-all duration-300 ease-in-out group"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 0px var(--hover-glow)",
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
                <span className="w-full relative inline-flex items-center justify-center font-medium transition-all">
                  {/* Gradient hover overlay */}
                  <span
                    className="absolute inset-0 rounded transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(45deg, var(--gradient-start), var(--gradient-end))",
                      boxShadow: "0 0 15px var(--hover-glow)",
                    }}
                  ></span>

                  <span className="relative text-xs sm:text-sm md:text-base group-hover:text-white transition-colors duration-300">
                    Submit Message
                  </span>
                </span>
              )}
            </button>
          </form>

          <ToastContainer />

          <h3
            className="prata-regular text-xs sm:text-sm md:text-base font-semibold mt-4 mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Would love to hear from you!
          </h3>

          <div className="social-icons flex space-x-4">
            {[
              faTwitter,
              faLinkedin,
              faFacebook,
              faInstagram,
              faWhatsapp,
              faGithub,
            ].map((icon, idx) => (
              <a
                key={idx}
                href={
                  icon === faTwitter
                    ? "https://twitter.com/kelvinEwurum"
                    : icon === faLinkedin
                      ? "https://www.linkedin.com/in/chibuike-kelvin-6b4413245"
                      : icon === faFacebook
                        ? "https://www.facebook.com/chibuike.kelvin"
                        : icon === faInstagram
                          ? "https://www.instagram.com/kelvin_empires"
                          : icon === faWhatsapp
                            ? "https://wa.me/2349153421622"
                            : "https://github.com/kelvinempires?tab=repositories"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
                style={{ color: "var(--accent)" }}
              >
                <FontAwesomeIcon icon={icon} className="text-2xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Map */}
        <div
          className="map w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.362974706922!2d3.3494461735047723!3d6.601734522252316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9230fc4fc853%3A0xd8babb191dac2f6b!2sAllen%20Ave%2C%20Allen%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1729671204756!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="My Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;