function Skills() {

  const skills = [
  {
    title: "Diagnostic Skill",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "👨‍⚕️",
    color: "bg-[#8fe5cf]",
  },

  {
    title: "Medical Knowledge",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "🩺",
    color: "bg-[#e8947d]",
  },

  {
    title: "Surgical Skill",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "🏥",
    color: "bg-[#6dc5e0]",
  },

  {
    title: "Empirical Practice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "⚕️",
    color: "bg-[#f1dd7d]",
  },
];

  return (
    <section className="bg-[#c5c9a8] px-4 py-12 sm:px-6 lg:px-8">      
        <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-semibold text-gray-900">
            Skills
        </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
           {skills.map((skill) => (
                <div
                    key={skill.title}
                    className={`${skill.color} rounded-lg p-5 text-center`}
                >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl">
                    {skill.icon}
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {skill.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-700">
                    {skill.description}
                    </p>
                </div>
                ))}
        </div>
    </section>
  );
}

export default Skills;