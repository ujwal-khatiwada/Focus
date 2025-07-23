import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="bg-white flex1 text-blue-800 footer md:py-6 fadeIn md:h-80 h-40 p-10 md:p-20"
      style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}
    >
      <div className="container md:ml-1">
        <div className="row g-5 flex justify-between">
          <div className="col-lg-5">
            <div>
            <p className="block antialiased font-sans text-blue-800 text-sm md:text-3xl font-bold">
              Focus Point
            </p>
            <p className="block antialiased font-sans text-blue-700 text-xs md:text-2xl font-bold">
              Driving School
            </p>
          </div>
            <button className="md:mt-6 mt-3 md:px-6 md:py-2 px-3 py-1 rounded-full font-bold text-xs md:text-base text-white bg-cyan-500 hover:shadow-[5px_5px_20px_5px_rgb(2,192,240)] transition-all">
              Get In Touch
            </button>
          </div>

          <div className="col-lg-5 col-md-6">
            <h4 className="font-bold  md:mb-5 mb-2 text-sm md:text-base underline">Contacts</h4>
            <p className="md:mb-2 mb-1 md:text-base text-xs">
              <i className="fa fa-map-marker-alt me-3"></i>Ilam Road, Mechinagar-12, Jhapa
            </p>
            <p className="md:mb-2 mb-1 md:text-base text-xs">
              <i className="fa fa-phone-alt me-3"></i>9764468567
            </p>
            <p className="md:mb-2 mb-1 md:text-base text-xs">
              <i className="fa fa-envelope me-3"></i>focuspointdrivingschool@gmail.com
            </p>
          </div>

          <div className="col-lg-5 hidden md:block col-md-6">
            <h4 className="font-bold mb-5 underline">Quick Links</h4>
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

          <div className="col-lg-2 col-md-6 hidden md:block">
            <h4 className="font-bold mb-5 underline">Follow Us</h4>
            <div className="flex flex-row pt-1 gap-1">
              <a
                className="btn btn-square btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=61566661587410"
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
                href="https://www.tiktok.com/@focus.point.drivi6"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok text-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
