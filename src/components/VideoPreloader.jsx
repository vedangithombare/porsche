import { useState, useEffect } from "react";

function VideoPreloader({ videoUrls = [], onAllLoaded = () => {}, children,initialLoadingTime = 2000 }) {
    const [loadingStatus, setLoadingStatus] = useState({
        initialLoading: true,         // Initial 2-second loading screen
        firstVideoLoaded: false,      // First video loaded state
        backgroundLoadingComplete: false, // Background videos loaded state
        loadedVideos: 0,
        totalVideos: videoUrls.length,
        progress: 0
    });

    // Step 1: Show initial loading screen for 3 seconds
    useEffect(() => {
        if (loadingStatus.initialLoading) {
            const timer = setTimeout(() => {
                setLoadingStatus(prev => ({
                    ...prev,
                    initialLoading: false
                }));

                // If no videos to load, consider everything loaded
                if (videoUrls.length === 0) {
                    setLoadingStatus(prev => ({
                        ...prev,
                        initialLoading: false,
                        firstVideoLoaded: true,
                        backgroundLoadingComplete: true,
                        progress: 100
                    }));
                    onAllLoaded();
                }
            }, initialLoadingTime);

            return () => clearTimeout(timer);
        }
    }, [initialLoadingTime, videoUrls.length, onAllLoaded]);

    // Step 2: Load the first video after initial loading time
    useEffect(() => {
        if (videoUrls.length > 0) {
            const firstVideoUrl = videoUrls[0];
            const video = document.createElement('video');

            const handleFirstVideoLoaded = () => {
                setLoadingStatus(prev => ({
                    ...prev,
                    firstVideoLoaded: true,
                    loadedVideos: 1,
                    progress: Math.round((1 / videoUrls.length) * 100)
                }));
            };

            // Add event listeners for first video
            video.addEventListener('loadeddata', handleFirstVideoLoaded);
            video.addEventListener('error', () => {
                console.error(`Error loading first video: ${firstVideoUrl}`);
                handleFirstVideoLoaded(); // Count error as "loaded" to avoid hanging
            });

            // Start loading first video
            video.src = firstVideoUrl;
            video.load();

            // Cleanup
            return () => {
                video.removeEventListener('loadeddata', handleFirstVideoLoaded);
                video.removeEventListener('error', handleFirstVideoLoaded);
            };
        }
    }, [loadingStatus.initialLoading, loadingStatus.firstVideoLoaded, videoUrls, onAllLoaded]);


    // Trigger onAllLoaded when both initialLoading is done AND first video is loaded
    useEffect(() => {
        if (!loadingStatus.initialLoading && loadingStatus.firstVideoLoaded) {
            onAllLoaded();
        }
    }, [loadingStatus.initialLoading, loadingStatus.firstVideoLoaded, onAllLoaded]);

    // Step 3: Load remaining videos in the background after first video is loaded
    useEffect(() => {
        if (loadingStatus.firstVideoLoaded && videoUrls.length > 1 && !loadingStatus.backgroundLoadingComplete) {
            const remainingUrls = videoUrls.slice(1);
            // console.log("remaining urls",remainingUrls);
            const videoElements = [];
            let backgroundLoaded = 0;

            const updateBackgroundProgress = () => {
                backgroundLoaded++;
                const totalLoaded = backgroundLoaded + 1; // +1 for the first video
                const progress = Math.round((totalLoaded / videoUrls.length) * 100);

                setLoadingStatus(prev => ({
                    ...prev,
                    loadedVideos: totalLoaded,
                    progress: progress,
                    backgroundLoadingComplete: backgroundLoaded === remainingUrls.length
                }));

                // console.log(`Background loaded: ${backgroundLoaded} of ${remainingUrls.length} videos`);
            };

            // Preload each remaining video
            remainingUrls.forEach(url => {
                const video = document.createElement('video');

                // Add event listeners
                video.addEventListener('loadeddata', updateBackgroundProgress);
                video.addEventListener('error', () => {
                    console.error(`Error loading background video: ${url}`);
                    updateBackgroundProgress(); // Count error as "loaded" to avoid hanging
                });

                // Set source and start loading
                video.src = url;
                video.load();
                videoElements.push(video);
            });

            // Cleanup function
            return () => {
                videoElements.forEach(video => {
                    video.removeEventListener('loadeddata', updateBackgroundProgress);
                    video.removeEventListener('error', updateBackgroundProgress);
                });
            };
        }
    }, [loadingStatus.firstVideoLoaded, videoUrls]);

    // Show loading screen during initial loading or while first video is loading
    if (loadingStatus.initialLoading || !loadingStatus.firstVideoLoaded) {
        return (
            <div className="fixed inset-0 bg-black flex justify-center items-center z-50">

            </div>
        );
    }
    return (
        <>
            {children}
        </>
    );
}

export default VideoPreloader;