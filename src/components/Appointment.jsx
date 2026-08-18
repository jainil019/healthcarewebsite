import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
function Appointment()
{
    return(
        <>
        {/* Appointment Section */}
 <section className="bg-black px-5 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -left-5 top-5 h-75 w-64 rotate-[-15deg] bg-indigo-400/70" />

              <div className="absolute  top-3 h-64 w-64 bg-purple-600/80" />

              <div className="relative h-75 w-64 overflow-hidden border-8 border-purple-600 bg-white">
                <img
                  src={two}
                  alt="Book appointment"
                  className="h-75 w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
              Book an appointment
              <br />
              with Dr.Rajeev Reddy
            </h2>

            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Enter Name"
                className="rounded-full px-5 py-3 text-sm text-gray-800 bg-white outline-none"
              />

              <input
                type="number"
                placeholder="Enter Age"
                className="rounded-full px-5 py-3 text-sm bg-white text-gray-800 outline-none"
              />

              <select className="rounded-full px-5 py-3 text-sm bg-white text-gray-500 outline-none">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input
                type="text"
                placeholder="Contact Number"
                className="rounded-full px-5 py-3 text-sm bg-white text-gray-800 outline-none"
              />

              <input
                type="date"
                className="rounded-full px-5 py-3 text-sm  bg-white text-gray-500 outline-none"
              />

              <select className="rounded-full bg-white px-5 py-3 text-sm text-gray-500 outline-none">
                <option>Payment Method</option>
                <option>Online</option>
                <option>Cash</option>
              </select>

              <div className="sm:col-span-2 sm:text-right">
                <button
                  type="submit"
                  className="rounded-lg bg-lime-600 px-7 py-3 font-medium text-white transition hover:bg-lime-700"
                >
                  Book appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
</>
    );

}
export default Appointment;