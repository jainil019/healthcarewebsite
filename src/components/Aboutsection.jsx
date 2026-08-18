import one from "../assets/one.jpg";

function AboutSection() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <h1 className="mb-10 text-3xl font-semibold text-center text-gray-900">
          About
        </h1>

        {/* Doctor Section */}
        <div className="grid gap-8 lg:grid-cols-[35%_1fr] lg:gap-10">

          {/* Doctor Image */}
          <div className="overflow-hidden rounded-tr-[90px]">

            <img
              src={one}
              alt="Dr. Rajeev Reddy"
              className="h-full min-h-[350px] w-full object-cover"
            />

          </div>

          {/* Doctor Information */}
          <div>

            <h2 className="text-3xl font-semibold text-health-green sm:text-4xl">
              Dr.Rajeev Reddy
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Medical Oncologist, Cancer Physician DNB Medical oncology,
              MRCP UK oncology, ESMO certified medical oncologist
            </p>

            <p className="mt-5 text-sm leading-relaxed text-gray-700">
              Greeting. I'm a cancer specialist, a Medical Oncologist.
              After Training at the Prestigious Army Hospital R&R in Delhi,
              I had the opportunity to work with the illustrious and famous
              faculty at two of my previous tenures. I now work with a team
              of expert cancer specialists in BGS GLOBAL Hospitals Bangalore.
              I am a cancer specialist, a Medical Oncologist.
            </p>

            {/* Statistics */}
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Statistics
            </h3>

            <div className="mt-4 grid grid-cols-3 gap-4">

              {/* Experience */}
              <div className="flex items-center gap-2">
                <div className="text-3xl">
                  👨‍⚕️
                </div>

                <div>
                  <p className="text-2xl font-bold text-blue-700">
                    7+
                  </p>

                  <p className="text-sm font-semibold text-blue-700">
                    Experience
                  </p>
                </div>
              </div>

              {/* Surgeries */}
              <div className="flex items-center gap-2">
                <div className="text-3xl">
                  🏥
                </div>

                <div>
                  <p className="text-2xl font-bold text-blue-700">
                    300+
                  </p>

                  <p className="text-sm font-semibold text-blue-700">
                    Surgeries
                  </p>
                </div>
              </div>

              {/* Patients */}
              <div className="flex items-center gap-2">
                <div className="text-3xl">
                  🩺
                </div>

                <div>
                  <p className="text-2xl font-bold text-blue-700">
                    400+
                  </p>

                  <p className="text-sm font-semibold text-blue-700">
                    Patients
                  </p>
                </div>

              </div>

            </div>
<div className="flex justify-end">
  <button className="rounded bg-health-green px-4 py-3 mr-15 hover:bg-red-200  mt-10 text-white">
    Book appointment
  </button>
</div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;