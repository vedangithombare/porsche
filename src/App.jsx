import Home from './components/Home.jsx';
import {Analytics} from "@vercel/analytics/react"

function App() {

    return (
        <>
            <Home/>
            <Analytics/>
            {/*<SpeedInsights/>*/}
        </>
    )
}

export default App
