function Footer() {
  const quickLinks = [
    "About",
    "Skills",
    "Events",
    "News",
    "Blogs",
    "Press-release",
    "Testimonials",
    "FAQ's",
    "Contact",
  ];

  const socialLinks = [
    "Facebook",
    "Linked-in",
    "Twitter",
  ];

  return (
    <footer className="bg-health-green px-6 py-10 text-white  sm:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Doctor Information */}
          <div>

            <h2 className="text-lg font-bold">
              Dr.Rajeev Vijayakumar
            </h2>

            <p className="mt-2 max-w-md text-xs leading-relaxed text-white/90">
              Greeting. I'm a cancer specialist, a Medical Oncologist.
              After Training at the prestigious Army Hospital R&R in Delhi,
              I had the opportunity to work with the illustrious and
              famous faculty at two of my previous centers. I now work
              with a team of expert cancer specialists in BGS GLOBAL
              Hospitals Bangalore.
            </p>

            {/* Address */}
            <div className="mt-4 flex items-start gap-2 text-xs">
              <span>📍</span>

              <p>
                67, Uttarahalli Main Rd, RR Nagar,
                Bengaluru, Karnataka 560060
              </p>
            </div>

            {/* Phone */}
            <div className="mt-2 flex items-center gap-2 text-xs">
              <span>📞</span>

              <p>
                +91-88261-97760
              </p>
            </div>

          </div>


          {/* Quick Links */}
          <div className="lg:pl-10">

            <h2 className="text-lg font-bold">
              Quick Links
            </h2>

            <div className="mt-3 flex flex-col gap-1.5 text-xs">

              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="w-fit transition hover:translate-x-1 hover:text-white/70"
                >
                  {link}
                </a>
              ))}

            </div>

          </div>


          {/* Social */}
          <div>

            <h2 className="text-lg font-bold">
              Social
            </h2>

            <div className="mt-3 flex flex-col gap-2 text-xs">

              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-fit transition hover:translate-x-1 hover:text-white/70"
                >
                  {social}
                </a>
              ))}

            </div>

          </div>

        </div>


        {/* Copyright */}
        <div className="mt-8 border-t border-white/20 pt-4 text-center text-[9px] text-white/80">
          Copyright © 2025 All Rights Reserved by Healthscope Healthcare Limited
        </div>

      </div>

    </footer>
  );
}

export default Footer;