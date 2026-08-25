import { useMemo, useState } from "react";

const featured = [
    { name: "Java", icon: "bx-java", category: "backend", desc: "Core Java · OOP · Collections · Multithreading · JDBC" },
    { name: "Spring Boot", icon: "bx-spring-boot", category: "backend", desc: "REST APIs · Spring MVC · Hibernate/JPA · Backend Architecture" },
    { name: "React.js", icon: "bx-react", category: "frontend", desc: "Modern UI · JavaScript ES6 · Responsive Web Development" },
    { name: "PHP", icon: "bx-php", category: "backend", desc: "CodeIgniter 4 · MVC · Dynamic Applications · APIs" },
];

const skills = [
    ["Backend", "Spring Boot", "Java backend", "bxl bx-spring-boot"],
    ["Backend", "Spring MVC", "Web architecture", "bxl bx-spring-boot"],
    ["Backend", "Hibernate / JPA", "ORM & persistence", "bx bx-cube-alt"],
    ["Backend", "CodeIgniter 4", "PHP framework", "bxl bx-php"],
    ["Backend", "REST APIs", "API development", "bx bx-arrow-right-left"],
    ["Backend", "Servlet / JSP", "Java web", "bxl bx-java"],
    ["Frontend", "React.js", "UI development", "bxl bx-react"],
    ["Frontend", "JavaScript ES6", "Web scripting", "bxl bx-javascript"],
    ["Frontend", "HTML5", "Semantic markup", "bxl bx-html5"],
    ["Frontend", "CSS3", "Responsive styling", "bxl bx-css3"],
    ["Frontend", "jQuery / AJAX", "Dynamic interfaces", "bxl bx-jquery"],
    ["Database", "MySQL", "Relational database", "bx bx-table"],
    ["Database", "Database Design", "Schema & relationships", "bx bx-database"],
    ["Database", "Query Optimization", "Performance", "bx bx-compare-alt"],
    ["Database", "CRUD Operations", "Data management", "bx bx-gear"],
    ["Tools", "Git / GitHub", "Version control", "bxl bx-git"],
    ["Tools", "Postman", "API testing", "bx bx-send"],
    ["Tools", "Figma", "UI handoff", "bxl bx-figma"],
    ["Tools", "WordPress", "Websites & CMS", "bxl bx-wordpress"],
    ["Tools", "XAMPP", "Local development", "bx bx-x"],
    ["Concepts", "OOP", "Object-oriented design", "bx bx-bracket-curly"],
    ["Concepts", "MVC Architecture", "Application structure", "bx bx-git-repo-forked"],
    ["Concepts", "RBAC", "Role-based access", "bx bx-car-key"],
    ["Concepts", "Multithreading", "Concurrent processing", "bx bx-select-all"],
    ["Concepts", "Multi-Tenant Apps", "Application architecture", "bx bx-select-many"],
];

const filters = ["All Skills", "Backend", "Frontend", "Database", "Tools", "Concepts"];

export default function Skills() {
    const [active, setActive] = useState("All Skills");

    const filtered = useMemo(
        () => active === "All Skills"
            ? skills
            : skills.filter(([category]) => category === active),
        [active]
    );

    const visibleFeatured = active === "All Skills"
        ? featured
        : featured.filter(item => item.category === active.toLowerCase());

    return (
        <section className="relative overflow-hidden" id="skill">
            {/* Background */}

            <div className="relative mx-auto w-[92%] max-w-[1180px]">
                <div className="pb-10 pt-14 sm:pt-[72px] flex flex-col items-center justify-center">
                    
                    <h1 className="mt-[18px] max-w-[850px] text-4xl md:text-5xl font-bold text-center">
                        Tools I use to build{" "}
                        <span className="text-primary glow-text">real products. </span>
                    </h1>

                    <p className="mt-6 text-center max-w-[690px] text-[15px] leading-7 text-muted-foreground sm:text-[17px] sm:leading-[1.75]">
                        Full Stack Developer focused on Java, Spring Boot, PHP and React.js.
                        I build production-ready web applications, REST APIs and database-driven
                        systems with a focus on clean architecture and responsive experiences.
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-7 mt-10 flex flex-wrap gap-2 justify-center">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActive(filter)}
                            className={`rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-all duration-200 ${active === filter
                                    ? "border-primary bg-primary text-secondery"
                                    : "border-white/[.09] bg-white/[.025] text-[#aeb8c7] hover:border-primary/50 hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Featured */}
                <div className="mb-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                    {visibleFeatured.map(item => (
                        <article
                            key={item.name}
                            className="group relative min-h-[190px] overflow-hidden rounded-[22px] border border-white/20 p-6 shadow-[0_25px_80px_rgba(0,0,0,.35)] transition duration-300 hover:-translate-y-1.5 hover:border-primary/40"
                        >
                            <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#7cf2c5]/10 blur-sm transition group-hover:scale-125" />
                            <div className="relative">
                                <i class={`bxl ${item.icon} mb-7 text-4xl`}/>
                                <h3 className="font-['Space_Grotesk'] text-[22px] font-bold tracking-[-.03em]">
                                    {item.name}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-[#8d99aa]">{item.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Toolkit */}
                <div className="mb-5 flex items-end justify-between">
                    <h3 className=" text-2xl font-bold  sm:text-xl">
                        Everything in my toolkit
                    </h3>
                    <span className="text-xs text-[#697587]">
                        {filtered.length} {filtered.length === 1 ? "skill" : "skills"}
                    </span>
                </div>

                <div className="grid gap-3 pb-20 sm:grid-cols-2 lg:grid-cols-4">
                    {filtered.map(([category, name, desc, icon]) => (
                        <div
                            key={`${category}-${name}`}
                            className="rounded-2xl border border-white/[.09] bg-white/[.025] p-[17px] transition duration-200 hover:-translate-y-0.5 hover:border-primary/[.16] hover:bg-primary/30 "
                        >
                            <div className="flex items-center gap-3">
                                <div className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[11px] bg-primary text-lg text-secondery">
                                    <i class={`${icon}`} />
                                </div>
                                <div>
                                    <strong className="text-sm">{name}</strong>
                                    <small className="mt-1 block text-[10px] text-[#697587]">{desc}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}