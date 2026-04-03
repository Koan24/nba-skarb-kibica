import HeroSection from "./components/HeroSection"
import TeamSection from "./components/TeamSection"
import { teams } from "./data/teams"
import {useEffect} from "react"
import NavigationDots from "./components/NavigationDots"

function App() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="scroll-container">

            <NavigationDots sections={[{}, ...teams]} />

            <HeroSection />

            {teams.map((team, index) => (
                <TeamSection key={index} team={team} />
            ))}

        </div>
    )
}

export default App