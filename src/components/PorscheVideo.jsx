import { useRef } from "react";

const PorscheVideo = ({ allVideoUrls = [], isMuted = true, setText = () => {} }) => {
    const videoRef = useRef(null);

    // Safely access the first element if it exists
    const url = allVideoUrls.length > 0 ? allVideoUrls[0] : '';

    return (
        <div className="w-full relative overflow-hidden"
             style={{
                 maxWidth: "100vw",
                 height: "auto",
                 maxHeight: "100vh"
             }}>
            {url ? (
                <video
                    ref={videoRef}
                    className="h-full object-cover"
                    autoPlay
                    playsInline
                    muted={isMuted}
                    onEnded={setText}
                >
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div className="flex items-center justify-center h-64 bg-gray-100">
                    No video URL provided
                </div>
            )}
        </div>
    );
};

export default PorscheVideo;