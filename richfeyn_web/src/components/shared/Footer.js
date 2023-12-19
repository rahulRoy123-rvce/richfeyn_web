import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="px-4 pt-12 pb-8 text-white bg-black border-t border-gray-200 text-center">
        <div className="sm:flex sm:justify-center lg:max-w-[1000x] mx-auto">
          <div className="sm:flex min-w-[70vw] sm:space-x-5">
            <ul className="flex flex-col w-full p-0 font-medium text-slate-700 list-none text-center">
              <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-white uppercase md:mt-0">
                Company
              </li>
              <li className="inline-block px-3 py-2 text-gray-300 text-sm no-underline hover:text-gray-400 cursor-pointer">
                <Link to="/privacy">Privacy & Policy</Link>
              </li>
              <li className="inline-block px-3 py-2 text-gray-300 text-sm no-underline hover:text-gray-400 cursor-pointer">
                <Link to="/tou">Terms of Use</Link>
              </li>
              <li className="inline-block px-3 py-2 text-gray-300 text-sm no-underline hover:text-gray-400 cursor-pointer whitespace-nowrap">
                <Link to="/CorporateInfo">Corporate Information</Link>
              </li>
            </ul>
            <ul
              className="flex flex-col flex-nowrap
             w-full p-0 font-medium text-slate-700 list-none text-center"
            >
              <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-white uppercase md:mt-0">
                Need Help?
              </li>
              <li className="inline-block px-3 py-2 text-gray-300 text-sm no-underline hover:text-gray-400 cursor-pointer">
                <Link to="/Return_Exchange">Returns & Exchanges</Link>
              </li>
              <li className="inline-block px-3 py-2 text-gray-300 text-sm no-underline hover:text-gray-400 cursor-pointer">
                <Link to="/faqs">FAQs</Link>
              </li>
              <li className="inline-block px-3 py-2 text-gray-300 text-sm no-underline hover:text-gray-400 cursor-pointer">
                <Link to="/contact">Customer Support</Link>
              </li>
            </ul>
            <ul
              id="contactus"
              className="flex flex-col w-full p-0 font-medium text-center text-slate-700 list-none"
            >
              <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-white uppercase md:mt-0">
                Contact Us
              </li>
              <li className="flex items-center justify-center space-x-1.5 py-2 text-gray-300 text-sm no-underline hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"
                  />
                </svg>
                <span>Bangalore, Karnataka</span>
              </li>
              <li className="inline-block px-3 py-2 text-gray-300 text-sm no-underline hover:text-gray-400">
                <a href="mailto:contact@richfeyn.com"> contact@richfeyn.com</a>
              </li>
              <li className="inline-block px-3 py-2 text-gray-300 text-sm no-underline hover:text-gray-400">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://wa.me/919310586024/?text=Hi, I need assistance to setup integration."
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>

            <div className="flex flex-col w-full text-gray-400">
              <div className="flex items-center justify-center  px-3 py-2 mt-5 font-bold text-white uppercase md:mt-0 text-center">
                Find Us On
              </div>

              <img
                className="h-16 mb-3 mx-auto"
                src="/images/whatsapp.png"
                alt=""
              />

              <div
                className="flex justify-center items-center
               pl-4 mt-2"
              >
                <a
                  className="flex items-center mr-6 text-gray-300 text-sm no-underline hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2F%3Fsk%3Dwelcome"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#1877F2"
                      d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                    />
                    <path
                      fill="#FFF"
                      d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
                    />
                  </svg>
                </a>
                <a
                  className="flex items-center mr-6 text-gray-300 text-sm no-underline hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@richfeyn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 256 180"
                  >
                    <path
                      fill="red"
                      d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                    />
                    <path
                      fill="#FFF"
                      d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                    />
                  </svg>
                </a>
                <a
                  className="flex items-center mr-6 text-gray-300 text-sm no-underline hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/richfeyn/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#fff" rx="60" />
                      <rect width="256" height="256" fill="#0A66C2" rx="60" />
                      <path
                        fill="#fff"
                        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  className="flex items-center mr-6 text-gray-300 text-sm no-underline hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/richfeyn_official/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect
                        width="256"
                        height="256"
                        fill="url(#skillIconsInstagram0)"
                        rx="60"
                      />
                      <rect
                        width="256"
                        height="256"
                        fill="url(#skillIconsInstagram1)"
                        rx="60"
                      />
                      <path
                        fill="#fff"
                        d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z"
                      />
                      <defs>
                        <radialGradient
                          id="skillIconsInstagram0"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FD5" />
                          <stop offset=".1" stop-color="#FD5" />
                          <stop offset=".5" stop-color="#FF543E" />
                          <stop offset="1" stop-color="#C837AB" />
                        </radialGradient>
                        <radialGradient
                          id="skillIconsInstagram1"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3771C8" />
                          <stop offset=".128" stop-color="#3771C8" />
                          <stop offset="1" stop-color="#60F" stop-opacity="0" />
                        </radialGradient>
                      </defs>
                    </g>
                  </svg>
                </a>
                <a
                  className="flex items-center mr-6 text-gray-300 text-sm no-underline hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/RichFeyn_"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#fff" rx="60" />
                      <rect width="256" height="256" fill="#1D9BF0" rx="60" />
                      <path
                        fill="#fff"
                        d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677c2.918.351 5.85.526 8.79.533a74.154 74.154 0 0 0 45.864-15.839a36.976 36.976 0 0 1-34.5-25.645a36.811 36.811 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.705 36.705 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.814 104.814 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.105 74.105 0 0 0 23.451-8.965a37.061 37.061 0 0 1-16.234 20.424A73.446 73.446 0 0 0 218 72.282a75.023 75.023 0 0 1-18.428 19.13Z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 mt-10 text-center text-gray-300 text-sm border-t border-gray-100">
          © Copyright 2023 - Ubud Solutions (OPC) Private Limited. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
