import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="bg-white  text-blue-800 footer py-6 fadeIn h-80 p-20"
      style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}
    >
      <div className="container">
        <div className="row g-5 flex justify-between">
          <div className="col-lg-5">
            <div>
            <p className="block antialiased font-sans text-blue-800 text-xl font-bold">
              Focus Point
            </p>
            <p className="block antialiased font-sans text-blue-700 text-lg font-bold">
              Driving School
            </p>
          </div>
            <button className="mt-6 px-6 py-2 rounded-full font-bold text-white bg-cyan-500 hover:shadow-[5px_5px_20px_5px_rgb(2,192,240)] transition-all">
              Get In Touch
            </button>
          </div>

          <div className="col-lg-5 col-md-6">
            <h4 className="font-bold  mb-5 underline">Contacts</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>Ilam Road, Mechinagar-12, Jhapa
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>9764468567
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>focuspointdrivingschool@gmail.com
            </p>
          </div>

          <div className="col-lg-5 col-md-6">
            <h4 className="font-bold  mb-5 underline">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link className="btn btn-link " href="#">
                About Us
              </Link>
              <Link className="btn btn-link " href="#">
                Contact Us
              </Link>
              <Link className="btn btn-link " href="#">
                Teams
              </Link>
              <Link className="btn btn-link " href="#">
                Gallery
              </Link>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h4 className="font-bold mb-5 underline">Follow Us</h4>
            <div className="flex flex-row pt-1 gap-1">
              <a
                className="btn btn-square btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-square btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-square btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M448,209.9V144c-29.7,0-58.1-9.4-81.3-25.3c-10.1-7-19.2-15.3-27.1-24.7c-10.1-11.9-18.2-25.1-23.8-39.6
                  c-5.3-14.5-8.3-30-8.3-46.2H256v288c0,26.5-21.5,48-48,48s-48-21.5-48-48s21.5-48,48-48c8.4,0,16.2,2.2,23,6v-72
                  c-7.5-1-15.2-1.6-23-1.6c-66.3,0-120,53.7-120,120s53.7,120,120,120s120-53.7,120-120V151.1c32.5,19.8,70.5,31.4,112,31.4
                  C448,209.9,448,209.9,448,209.9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
