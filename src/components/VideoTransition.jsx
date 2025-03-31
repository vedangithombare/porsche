import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeHigh, faVolumeXmark} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function VideoTransition(props) {
    const [screenSize, setScreenSize] = useState("lg");

    // Detect screen size on component mount and when window resizes
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setScreenSize("sm");
            } else if (width < 1024) {
                setScreenSize("md");
            } else {
                setScreenSize("lg");
            }
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Responsive font sizes and spacing based on screen size
    const getFontSizes = () => {
        switch(screenSize) {
            case "sm":
                return {
                    brand: "text-xl",
                    tagline: "text-2xl",
                    button: "text-sm px-6 py-2",
                    spacing: "mt-10"
                };
            case "md":
                return {
                    brand: "text-xl",
                    tagline: "text-3xl",
                    button: "text-lg px-6 py-2",
                    spacing: "mt-16"
                };
            default:
                return {
                    brand: "text-2xl",
                    tagline: "text-4xl",
                    button: "text-xl px-8 py-3",
                    spacing: "mt-20"
                };
        }
    };

    const { brand, tagline, button, spacing } = getFontSizes();

    return (
        <>
            <div onTransitionEnd={() => !props.fadeOut && setTimeout(() => props.setFadeOut(!props.fadeOut), 600)}
                 className={`flex flex-col items-center justify-center w-full h-screen overflow-hidden fixed top-0 transition-opacity duration-3000 px-4 ${
                     props.showText ? "opacity-100" : "opacity-0"}`}>
                <span className={`text-white align ${brand} font-[porsche] tracking-wider`}>PORSCHE</span>
                <span onTransitionEnd={() => !props.showBtn && setTimeout(() => props.setShowBtn(!props.showBtn), 1000)}
                      className={`text-white align ${tagline} font-[montserratThinItalic] tracking-wider text-center
                     transition-all duration-3000 px-4 ${props.fadeOut ? `opacity-100 ${spacing}` : "opacity-0 mt-0"}`}>
                      CRAFTED BY TIME, PERFECTED BY PASSION
                </span>

                <button onClick={props.handleBtnClick}
                        className={`bg-black text-white border-2 ${button} font-medium tracking-wider uppercase
                    rounded-full transition-all duration-300 hover:text-black hover:bg-white
                     transform hover:scale-110 cursor-pointer
                      transition-all duration-3000 ${props.showBtn ? `opacity-100 ${spacing}` : "opacity-0 mt-0"}
                     `}>
                    Let's Dive In
                </button>
            </div>
            <button className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 bg-transparent text-white z-10 p-2"
                    onClick={() => props.setIsMuted(!props.isMuted)}>
                {
                    props.isMuted ? <FontAwesomeIcon icon={faVolumeXmark} style={{color: "#cdc9d9"}} size={screenSize === "sm" ? "sm" : "lg"}/> :
                        <FontAwesomeIcon icon={faVolumeHigh} style={{color: "#cdc9d9"}} size={screenSize === "sm" ? "sm" : "lg"}/>
                }
            </button>
        </>
    )
}

export default VideoTransition;