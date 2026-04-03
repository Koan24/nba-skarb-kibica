import { useEffect, useState } from "react"

function NavigationDots({ sections }) {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const container = document.querySelector(".scroll-container")
        if (!container) return

        const handleScroll = () => {
            const scrollPosition = container.scrollTop
            const height = window.innerHeight

            const index = Math.floor((scrollPosition + height / 2) / height)
            setActive(index)
        }

        container.addEventListener("scroll", handleScroll)

        return () => {
            container.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const scrollToSection = (index) => {
        const container = document.querySelector(".scroll-container")

        if (container) {
            container.scrollTo({
                top: index * window.innerHeight,
                behavior: "smooth",
            })
        }
    }

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">

            {sections.map((section, index) => {
                const label = index === 0 ? "Start" : section.name

                return (
                    <div key={index} className="group relative flex items-center">

                        {/* TOOLTIP */}
                        <div className="
              absolute right-6
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              translate-x-2 group-hover:translate-x-0
              pointer-events-none
            ">
                            <div className="bg-black text-white text-sm px-3 py-1 rounded-md whitespace-nowrap shadow-lg">
                                {label}
                            </div>
                        </div>

                        {/* DOT */}
                        <button
                            onClick={() => scrollToSection(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === active
                                    ? "bg-white scale-125"
                                    : "bg-white/30 hover:bg-white hover:scale-125"
                            }`}
                        />

                    </div>
                )
            })}

        </div>
    )
}

export default NavigationDots