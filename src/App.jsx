import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import HeroSection from "./components/HeroSection"
import TeamSection from "./components/TeamSection"
import NavigationDots from "./components/NavigationDots"
import IntroScreen from "./components/IntroScreen"

import { teams } from "./data/teams"

function App() {
    const [loading, setLoading] = useState(true)

    return (
        <>
            {/* INTRO */}
            <AnimatePresence>
                {loading && <IntroScreen onFinish={() => setLoading(false)} />}
            </AnimatePresence>

            {/* GŁÓWNA APLIKACJA */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 1 }}
                className="scroll-container"
            >
                <NavigationDots sections={[{}, ...teams]} />

                <HeroSection />

                {teams.map((team, index) => (
                    <TeamSection key={index} team={team} />
                ))}
            </motion.div>
        </>
    )
}

export default App