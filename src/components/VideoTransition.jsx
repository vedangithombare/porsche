import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeHigh, faVolumeXmark} from "@fortawesome/free-solid-svg-icons";

function VideoTransition(props) {
    return (
        <>
            <div onTransitionEnd={() => !props.fadeOut && setTimeout(() => props.setFadeOut(!props.fadeOut), 600)}
                 className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden fixed top-0 transition-opacity duration-3000 ${
                     props.showText ? "opacity-100" : "opacity-0"}`}>
                <span className={`text-white align text-2xl font-[porsche] tracking-wider`}>PORSCHE</span>
                <span onTransitionEnd={() => !props.showBtn && setTimeout(() => props.setShowBtn(!props.showBtn), 1000)}
                      className={` text-white align text-4xl font-[montserratThinItalic] tracking-wider
                     transition-all duration-3000  ${props.fadeOut ? "opacity-100 mt-20 " : "opacity-0 mt-0"}`}>
                      CRAFTED BY TIME, PERFECTED BY PASSION
                    </span>

                <button onClick={props.handleBtnClick}
                        className={`bg-black text-white border-2 px-8 py-3 text-xl font-medium tracking-wider uppercase
                    rounded-full transition-all duration-300 hover:text-black 
                     transform hover:scale-110 cursor-pointer
                      transition-all duration-3000  ${props.showBtn ? "opacity-100 mt-20 " : "opacity-0 mt-0"}
                     `}>
                    {/*className={` text-black bg-white cursor-pointer  align text-4xl font-[montserratThinItalic] tracking-wider*/}
                    {/* transition-all duration-3000  ${props.showBtn ? "opacity-100 mt-20 " : "opacity-0 mt-0"}`}>*/}
                    Let's Dive In
                </button>

                {/*{props.showBtn &&*/}
                {/*    <button*/}
                {/*            className="flex text-black bg-white mt-30 px-4 py-2">Let's*/}
                {/*        Dive In</button>*/}
                {/*}*/}


            </div>
            <button className="fixed bottom-10 left-10  bg-transparent text-white z-10"
                    onClick={() => props.setIsMuted(!props.isMuted)}>
                {
                    props.isMuted ? <FontAwesomeIcon icon={faVolumeXmark} style={{color: "#cdc9d9"}}/> :
                        <FontAwesomeIcon icon={faVolumeHigh} style={{color: "#cdc9d9"}}/>
                }
            </button>
        </>
    )
}

export default VideoTransition;