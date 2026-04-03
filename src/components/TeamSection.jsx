import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

function TeamSection({ team }) {
    const ref = useRef(null)

    // 🔥 zmiana tła strony przy scrollu
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    document.body.style.backgroundColor = team.accent
                }
            },
            { threshold: 0.6 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [team])

    return (
        <section
            ref={ref}
            className="section h-screen w-full flex overflow-hidden relative"
        >

            {/* LEWA */}
            <motion.div
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-1/2 flex items-center justify-center bg-white text-black px-16 z-10"
            >
                <div>
                    <h1 className="text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        {team.name}
                    </h1>

                    <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                        {team.description}
                    </p>
                </div>
            </motion.div>

            {/* PRAWA */}
            <div className="w-1/2 relative flex items-center justify-center overflow-hidden">

                {/* OBRAZ */}
                <motion.img
                    initial={{ scale: 1.2, y: -50 }}
                    whileInView={{ scale: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    src={team.image}
                    className="absolute w-full h-[120%] object-cover grayscale hover:scale-105 transition-all duration-700"
                />

                {/* OVERLAY gradient */}
                <div
                    className="absolute inset-0 opacity-80"
                    style={{
                        background: `linear-gradient(
              135deg,
              ${team.accent} 0%,
              black 100%
            )`,
                    }}
                />

                {/* GLOW (przeniesiony POD tekst) */}
                <div
                    className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 z-0"
                    style={{ backgroundColor: team.accent }}
                />

                {/* TEKST */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative text-white text-5xl font-bold tracking-widest z-10"
                >
                    {team.short}
                </motion.h2>

                {/* 🔥 DEPTH (NOWE — dół sekcji) */}
                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/50 to-transparent z-10" />

            </div>

        </section>
    )
}

export default TeamSection