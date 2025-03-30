import { useRef, } from "react";
//import { put } from "@vercel/blob";

const PorscheVideo = (props) => {
    const videoRef = useRef(null);
   // const [getUrl, setUrl] = useState("");

// useEffect(() => {
//     (async ()=>{
//         const { url } = await put('final_porsche_video.mp4', 'Hello World!', { access: 'public' });
//         setUrl(url);
//     })()
//
// },[])
    return (
        <>
            <video
                ref={videoRef}
                className={"w-full h-full object-cover"}
                autoPlay
                muted={props.isMuted} // Mute control
                onEnded={props.setText} // Trigger text fade-in on end
            >
                <source src={'https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/final_porsche_video-Km46VP2iJqzSZdYXbP3Hqx94T1ZWQ2.mp4'} type="video/mp4"/>
            </video>
        </>
    )
    // return (
    //     <div className="flex items-center justify-center bg-black h-[500px] relative top-[114px] w-full">
    //         <div className="relative w-full max-w-5xl h-[489px] flex items-center justify-center">
    //             {/* Video Section with Looping Fade Effect */}
    //             {!showText && (
    //                 <video
    //                     ref={videoRef}
    //                     className={`absolute w-[100%] h-[100%] transition-opacity duration-1000 ${
    //                         fadeOut ? "opacity-0" : "opacity-100"
    //                     }`}
    //                     autoPlay
    //                     muted={isMuted} // Mute control
    //                     onEnded={() => setFadeOut(true)} // Trigger text fade-in on end
    //                 >
    //                     <source src={"src/static/assests/final speed video.mp4"} type="video/mp4" />
    //                 </video>
    //             )}
    //
    //             {/* Text Section with Fade Effect */}
    //             {showText && (
    //                 <p
    //                     className={`absolute text-white text-2xl transition-opacity duration-1000 ${
    //                         showText ? "opacity-100" : "opacity-0"
    //                     }`}
    //                 >
    //                     This is the faded-in text after the video.
    //                 </p>
    //             )}
    //
    //             {/* Unmute Button */}
    //             <button
    //                 onClick={() => setIsMuted(!isMuted)}
    //                 className="absolute bottom-5 right-5 bg-white text-black px-3 py-1 rounded shadow-md"
    //             >
    //                 {isMuted ? "Unmute 🔊" : "Mute 🔇"}
    //             </button>
    //         </div>
    //     </div>
    // );
};


export default PorscheVideo;
