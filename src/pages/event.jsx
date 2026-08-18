import Navbar from "../components/Navbar";
import Appointment from "../components/Appointment";
import Footer from "../components/footer";
function Events() {

  const events = [
    {
      date: "06",
      month: "Feb",
      title: "Seminar about cancer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      location: "Hyderabad",
      time: "09:30 AM - 11:30 AM",
      borderColor: "border-l-[#1583a5]",
      textColor: "text-[#1583a5]",
    },

    {
      date: "06",
      month: "Feb",
      title: "Seminar about cancer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      location: "Hyderabad",
      time: "09:30 AM - 11:30 AM",
      borderColor: "border-l-[#8b126f]",
      textColor: "text-[#8b126f]",
    },

    {
      date: "06",
      month: "Feb",
      title: "Seminar about cancer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      location: "Hyderabad",
      time: "09:30 AM - 11:30 AM",
      borderColor: "border-l-[#e47735]",
      textColor: "text-[#e47735]",
    },

    {
      date: "06",
      month: "Feb",
      title: "Seminar about cancer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      location: "Hyderabad",
      time: "09:30 AM - 11:30 AM",
      borderColor: "border-l-[#75b936]",
      textColor: "text-[#75b936]",
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Heading + Month */}
        <div className="flex items-center justify-between">

          <h1 className="text-3xl font-bold text-gray-900">
            Events
          </h1>

          <select
            defaultValue="February"
            className="rounded-full border border-gray-400 bg-white px-5 py-2 text-xs font-medium uppercase outline-none"
          >
            <option value="February">
              February
            </option>

            <option value="March">
              March
            </option>

            <option value="April">
              April
            </option>
          </select>

        </div>


        {/* Events Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          {events.map((event) => (

            <div
              key={`${event.date}-${event.title}-${event.borderColor}`}
              className={`flex items-center gap-4 rounded-md border-l-4 bg-white p-4 shadow-sm ${event.borderColor}`}
            >

              {/* Date */}
              <div className="w-12 shrink-0 text-center">

                <p className="text-2xl font-bold text-gray-900">
                  {event.date}
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  {event.month}
                </p>

              </div>


              {/* Event Information */}
              <div className="min-w-0 flex-1">

                <h2 className={`text-sm font-bold ${event.textColor}`}>
                  {event.title}
                </h2>

                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-600">
                  {event.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-4 text-[10px] text-gray-600">

                  <span>
                    📍 {event.location}
                  </span>

                  <span>
                    🕘 {event.time}
                  </span>

                </div>

              </div>


              {/* View Button */}
              <button className="shrink-0 rounded-md bg-health-green px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90">
                View
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
    <Appointment/>
    <Footer/>
    </>
  );
}

export default Events;