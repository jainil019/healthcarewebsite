import { useState } from "react";
import AboutSection from "../components/Aboutsection";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Appointment from "../components/Appointment";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
function About() {

  const [activeTab, setActiveTab] = useState("Skills");

  const tabs = [
    "Skills",
    "Specialty",
    "Experience",
    "Qualification",
    "Awards and recognition",
  ];

  return (
    <>
        <Navbar/>
      {/* Part 1 - Doctor Information */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">

        
        <AboutSection/>
        

      </section>


      {/* Part 2 - Why Choose Doctor */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="text-center">

            <p className="text-2xl font-medium text-gray-900">
              Why To choose
            </p>

            <h2 className="mt-1 text-3xl font-bold text-health-green">
              Dr. Rajeev Reddy
            </h2>

          </div>


          {/* Tabs */}
          <div className="mt-8 flex justify-between overflow-x-auto rounded-full bg-gray-100 p-1">

            {tabs.map((tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold ${
                  activeTab === tab
                    ? "bg-health-green text-white"
                    : "text-gray-700"
                }`}
              >
                {tab}
              </button>

            ))}

          </div>


          {/* Skills Content */}
          {activeTab === "Skills" && (

            <div className="mt-8">

              {/* Diagnostic Skill */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[140px_1fr]">

                <h3 className="text-xl font-bold text-gray-900">
                  Diagnostic Skill
                </h3>

                <div>

                  <p className="text-sm leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>


                  {/* Skill Images */}
                  <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">

                    <img
                      src={one}
                      alt="Diagnostic skill"
                      className="h-24 w-full rounded-lg object-cover"
                    />

                    <img
                      src={two}
                      alt="Diagnostic skill"
                      className="h-24 w-full rounded-lg object-cover"
                    />

                    <img
                      src={three}
                      alt="Diagnostic skill"
                      className="h-24 w-full rounded-lg object-cover"
                    />

                    <img
                      src={four}
                      alt="Diagnostic skill"
                      className="h-24 w-full rounded-lg object-cover"
                    />

                  </div>

                </div>

              </div>


              {/* Other Skills */}
              <div className="mt-6 border-t">

                {/* Medical Knowledge */}
                <div className="grid grid-cols-1 gap-4 border-b py-5 md:grid-cols-[140px_1fr]">

                  <h3 className="text-xl font-bold text-gray-900">
                    Medical Knowledge
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                </div>


                {/* Surgical Skill */}
                <div className="grid grid-cols-1 gap-4 border-b py-5 md:grid-cols-[140px_1fr]">

                  <h3 className="text-xl font-bold text-gray-900">
                    Surgical Skill
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                </div>


                {/* Emperical Practice */}
                <div className="grid grid-cols-1 gap-4 py-5 md:grid-cols-[140px_1fr]">

                  <h3 className="text-xl font-bold text-gray-900">
                    Emperical Practice
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

      </section>
<Appointment/>
<Footer/>
    </>
  );
}

export default About;