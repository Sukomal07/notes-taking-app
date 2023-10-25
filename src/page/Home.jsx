import List from "../components/List"
import NotesContainer from "../components/NotesContainer"
import "../styles/Home.css"

function Home() {
    return (
        <div className="homeContainer">
            <List />
            <NotesContainer />
        </div>
    )
}

export default Home
