import { motion } from "framer-motion"

function TeamSection({ team }) {
    return (
        <section className="section h-screen w-full flex">

            {/* LEWA */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-1/2 flex items-center justify-center bg-white text-black px-16"
            >
                <div>
                    <h1 className="text-5xl font-bold mb-6">
                        {team.name}
                    </h1>

                    <p className="text-lg text-gray-700 max-w-md">
                        {team.description}
                    </p>
                </div>
            </motion.div>

            {/* PRAWA */}
            <div className={`w-1/2 relative flex items-center justify-center ${team.color}`}>
                <h2 className="text-white text-4xl font-bold tracking-widest">
                    {team.short}
                </h2>
            </div>

        </section>
    )
}

export default TeamSection