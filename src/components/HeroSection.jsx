import { motion } from "framer-motion"

function HeroSection() {
    return (
        <section className="section h-screen w-full flex items-center justify-center bg-black text-white relative overflow-hidden">

            {/* TŁO DELIKATNE */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>

            {/* CONTENT */}
            <div className="relative text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl font-bold tracking-tight mb-6"
                >
                    NBA 2025/2026
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-gray-400 mb-10"
                >
                    Skarb Kibica
                </motion.p>

                {/* SCROLL CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-sm text-gray-500"
                >
                    scroll ↓
                </motion.div>

            </div>
        </section>
    )
}

export default HeroSection