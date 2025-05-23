import PorscheVideo from "./PorscheVideo.jsx";
import {useEffect, useState} from "react";
import VideoTransition from "./VideoTransition.jsx";
import History from "./History.jsx";
import VideoPreloader from "./VideoPreloader.jsx";
import {getAllVideosForPreload} from "../Videos.js";

function Home() {
    const [showText, setShowText] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // Default: Muted
    const [, setAppReady] = useState(false);

    const allVideoUrls = getAllVideosForPreload();

    useEffect(() => {
        const root = document.getElementById("root");
        if (isBtnClicked) {
            root.style.overflow = "auto"; // Enable scrolling
        } else {
            root.style.overflow = "hidden"; // Keep hidden when not clicked
        }

        return () => {
            root.style.overflow = "hidden"; // Reset on unmount
        };
    }, [isBtnClicked]);
    const setText = () => {
        setShowText(true);
    }

    const handleBtnClick = () => {
        setIsBtnClicked(!isBtnClicked);
    }

    const handleAllVideosLoaded = () => {
        setAppReady(true);
        console.log("All videos loaded successfully.");
    }
    // console.log("All videos loaded successfully appready.",appReady);

    return (
        <VideoPreloader
            videoUrls={allVideoUrls}
            onAllLoaded={handleAllVideosLoaded}
        >
            <div id={"homeDiv"}
                 className={`w-full h-full justify-center flex flex-col items-center ${
                     isBtnClicked ? "!overflow-y-auto" : "overflow-hidden"
                 }`}>

                {isBtnClicked ?
                    <History allVideoUrls={allVideoUrls}/> :
                    <>
                        <PorscheVideo setText={setText} isMuted={isMuted} allVideoUrls={allVideoUrls} />
                        <VideoTransition showText={showText} setFadeOut={setFadeOut} setShowBtn={setShowBtn} showBtn={showBtn}
                                         isMuted={isMuted} setIsMuted={setIsMuted} fadeOut={fadeOut}
                                         isBtnClicked={isBtnClicked} setIsBtnClicked={setIsBtnClicked}
                                         handleBtnClick={handleBtnClick} />
                    </>
                }
            </div>
        </VideoPreloader>
    );

}

export default Home

