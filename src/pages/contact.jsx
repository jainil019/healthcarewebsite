import Navbar from "../components/Navbar";
import Appointment from "../components/Appointment";
import Footer from "../components/footer";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
function Contact() {
  return (
    <>
      <Navbar />

      {/* Contact Section */}
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">

          {/* Background Image */}
          <div className="relative h-[560px] overflow-hidden rounded-2xl md:h-[620px]">

            <img
              src={two}
              alt="Healthcare professionals"
              className="h-100 w-full object-cover"
            />

            {/* Contact Card */}
            <div className="absolute left-1/2 top-2/3 grid w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden pb-10 rounded-2xl shadow-xl md:grid-cols-3">

              {/* Form */}
              <div className="bg-gray-100 p-7 md:col-span-2 md:p-10">

                <h1 className="text-3xl font-bold text-gray-900">
                  Get In Touch
                </h1>

                <p className="mt-2 text-sm text-gray-700">
                  Connect with Us for Expert Care and Support
                </p>

                <form className="mt-7">

                  <div className="grid gap-4 sm:grid-cols-2">

                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="rounded-full border-none bg-white px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-health-green"
                    />

                    <select
                      className="rounded-full border-none bg-white px-5 py-3 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-health-green"
                    >
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>

                    <input
                      type="email"
                      placeholder="Enter mail id"
                      className="rounded-full border-none bg-white px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-health-green"
                    />

                    <input
                      type="tel"
                      placeholder="Contact Number"
                      className="rounded-full border-none bg-white px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-health-green"
                    />

                  </div>

                  <textarea
                    rows="6"
                    placeholder="Write your comment"
                    className="mt-4 w-full resize-none rounded-2xl border-none bg-white px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-health-green"
                  />

                  <div className="mt-5 flex justify-end">
                    <button
                      type="submit"
                      className="rounded-lg bg-health-green px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      Submit
                    </button>
                  </div>

                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-health-green p-7 text-white md:p-10">

                {/* Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-4xl">
                    🩺
                  </div>
                </div>

                <h2 className="text-2xl font-bold">
                  Contact Info
                </h2>

                <div className="mt-1 h-1 w-32 bg-white" />

                <h3 className="mt-10 text-lg font-bold">
                  Dr. Rajeev Vijayakumar
                </h3>

                <div className="mt-7 space-y-5 text-sm">

                  <p className="flex gap-3">
                    <span>📍</span>
                    <span>
                      67, Uttarahalli Main Rd, RR Nagar,
                      <br />
                      Bengaluru, Karnataka 560060
                    </span>
                  </p>

                  <p className="flex gap-3">
                    <span>☎</span>
                    <span>+91-88261-97760</span>
                  </p>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <Appointment />

      <Footer />
    </>
  );
}

export default Contact;