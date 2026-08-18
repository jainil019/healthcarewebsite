function Events() {
  const events = [
    {
      date: "06",
      month: "Feb",
      title: "Seminar about cancer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      location: "Hyderabad",
      time: "09:30 AM - 11:30 AM",
      borderColor: "border-l-[#1583a5]",
      textcolor:"text-[#1583a5]",
    },

    {
      date: "06",
      month: "Feb",
      title: "Seminar about cancer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      location: "Hyderabad",
      time: "09:30 AM - 11:30 AM",
      borderColor: "border-l-[#8b126f]",
      textcolor: "text-[#8b126f]",
    },

    {
      date: "06",
      month: "Feb",
      title: "Seminar about cancer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      location: "Hyderabad",
      time: "09:30 AM - 11:30 AM",
      borderColor: "border-l-[#e47735]",
      textcolor: "text-[#e47735]",
    },

    {
      date: "06",
      month: "Feb",
      title: "Seminar about cancer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      location: "Hyderabad",
      time: "09:30 AM - 11:30 AM",
      borderColor: "border-l-[#75b936]",
      textcolor:"text-[#75b936]",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="relative text-center">

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Upcoming Events
          </h2>

          <a
            href="#"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-health-green hover:underline"
          >
            View All
          </a>

        </div>

        {/* Events Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

          {events.map((event) => (
            <div
              key={`${event.date}-${event.title}-${event.borderColor}`}
              className={`flex items-center gap-4 rounded-md border-l-10 bg-white p-4 shadow-sm ${event.borderColor}`}
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
              <div className="min-w-0 ">

                <h3 className={`text-sm font-bold  ${event.textcolor}`}>
                  {event.title}
                </h3>

                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-600">
                  {event.description}
                </p>

                <div className="mt-2 flex flex-wrap gap-3 text-[10px] text-gray-600">

                  <span>
                    📍 {event.location}
                  </span>

                  <span>
                    🕘 {event.time}
                  </span>

                </div>

              </div>

              {/* View Button */}
              <button className="shrink-0 rounded-md bg-health-green px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90">
                View
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Events;