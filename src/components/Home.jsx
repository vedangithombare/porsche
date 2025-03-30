import PorscheVideo from "./PorscheVideo.jsx";
import {useEffect, useState} from "react";
import VideoTransition from "./VideoTransition.jsx";
import History from "./History.jsx";

function Home() {
    const [showText, setShowText] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // Default: Muted

    console.log("fade", fadeOut);
    const setText = () => {
        setShowText(true);
    }

    const handleBtnClick = () => {
        setIsBtnClicked(!isBtnClicked);
    }
    return (
        <div id={"homeDiv"} className="w-full h-full overflow-hidden justify-center flex flex-col items-center">

            {isBtnClicked ? <History/>: <>
                <PorscheVideo setText={setText} isMuted={isMuted}/>
                <VideoTransition showText={showText} setFadeOut={setFadeOut} setShowBtn={setShowBtn} showBtn={showBtn}
                                 isMuted={isMuted} setIsMuted={setIsMuted} fadeOut={fadeOut}
                                 isBtnClicked={isBtnClicked} setIsBtnClicked={setIsBtnClicked}
                                 handleBtnClick={handleBtnClick}/>

            </>}
        </div>
    )
}

export default Home

