import { useRef, useEffect } from "react";

const PorscheVideo = (props) => {
    const videoRef = useRef(null);

    // Handle resize and orientation changes
    useEffect(() => {
        const handleResize = () => {
            // Responsive adjustments if needed
        };

        // Add event listeners
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Handle video metadata loading
    const handleLoadedMetadata = () => {
        // Video is now ready
    };

    return (
        <div className="w-full relative overflow-hidden"
             style={{
                 maxWidth: "100vw",
                 height: "auto",
                 maxHeight: "100vh"
             }}>
            <video
                ref={videoRef}
                className=" h-full object-cover"
                autoPlay
                playsInline // Helps with mobile playback
                muted={props.isMuted}
                onEnded={props.setText}
                onLoadedMetadata={handleLoadedMetadata}
            >
                <source src={'https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/final_porsche_video-Km46VP2iJqzSZdYXbP3Hqx94T1ZWQ2.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default PorscheVideo;