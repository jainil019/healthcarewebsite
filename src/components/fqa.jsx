import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is HealthScope?",
      answer:
        "HealthScope is a platform focused on health awareness and education.",
    },

    {
      question: "How can I participate in an event?",
      answer:
        "You can check the upcoming events section and view the available event details.",
    },

    {
      question: "How can I contact HealthScope?",
      answer:
        "You can contact HealthScope through the contact section of the website.",
    },
    {
      question: "How can I contact HealthScope?",
      answer:
        "You can contact HealthScope through the contact section of the website.",
    },
    {
      question: "How can I contact HealthScope?",
      answer:
        "You can contact HealthScope through the contact section of the website.",
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Find answers to some common questions.
          </p>

        </div>

        {/* FAQ List */}
        <div className="mt-8 space-y-3">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-lg border border-gray-200"
            >

              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >

                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>

                <span className="text-xl text-health-green">
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="border-t px-5 py-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;