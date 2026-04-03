import TeamSection from "./components/TeamSection"
import { teams } from "./data/teams"

function App() {
    return (
        <div className="scroll-container">

            {teams.map((team, index) => (
                <TeamSection key={index} team={team} />
            ))}

        </div>
    )
}

export default App