import { motion } from "framer-motion"

function IntroScreen({ onFinish }) {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex items-center justify-center z-[999] overflow-hidden"
        >

            {/* 🔥 TŁO (IMAGE) */}
            <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
                className="absolute w-full h-full object-cover scale-110"
            />

            {/* 🔥 OVERLAY */}
            <div className="absolute inset-0 bg-black/70" />

            {/* CONTENT */}
            <div className="relative text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white text-6xl font-extrabold tracking-tight mb-6"
                >
                    NBA 2025/2026
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 text-lg mb-10"
                >
                    Skarb Kibica
                </motion.p>

                {/* LOADING BAR */}
                <div className="w-72 h-[2px] bg-white/20 overflow-hidden mx-auto">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.8 }}
                        className="h-full bg-white"
                        onAnimationComplete={() => {
                            setTimeout(() => {
                                onFinish()
                            }, 500)
                        }}
                    />
                </div>

            </div>

        </motion.div>
    )
}

export default IntroScreen