import {useState, useEffect, useRef} from "react";
import {
    faAnglesDown,
    faAnglesUp,
    faPlay,
    faPause,
    faVolumeUp,
    faVolumeMute,
    faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function History(props) {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showControls, setShowControls] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showTimelineTooltip, setShowTimelineTooltip] = useState(false);
    const [tooltipIndex, setTooltipIndex] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({x: 0, y: 0});
    const [isMobile, setIsMobile] = useState(false);
    const [showAcknowledgements, setShowAcknowledgements] = useState(false);
    const videoRef = useRef(null);
    const prevIndexRef = useRef(index);
    const timelineRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const PorscheVideos = [];
    for (let i = 1; i < props.allVideoUrls.length; i++) {
        PorscheVideos.push(props.allVideoUrls[i]);
    }

    const porschePowers = [
        {
            "Year": "1948",
            "Model": "Porsche 356",
            "Horsepower": "40 hp",
            "Time": "13 sec"
        },
        {
            "Year": "1953",
            "Model": "Porsche 550",
            "Horsepower": "110 hp",
            "Time": "7 sec"
        },
        {
            "Year": "1957",
            "Model": "Porsche 718",
            "Horsepower": "142 hp",
            "Time": "4.9 sec"
        },
        {
            "Year": "1963",
            "Model": "Porsche 904",
            "Horsepower": "180 hp",
            "Time": "6.4 sec"
        },
        {
            "Year": "1969",
            "Model": "Porsche 917",
            "Horsepower": "580 hp",
            "Time": "1.9 sec"
        },
        {
            "Year": "1975",
            "Model": "Porsche 911 Turbo",
            "Horsepower": "260 hp",
            "Time": "5.5 sec"
        },
        {
            "Year": "1986",
            "Model": "Porsche 959",
            "Horsepower": "450 hp",
            "Time": "3.7 sec"
        },
        {
            "Year": "1996",
            "Model": "Porsche 986 Boxster",
            "Horsepower": "201 hp",
            "Time": "6.9 sec"
        },
        {
            "Year": "1999",
            "Model": "Porsche 911 GT3",
            "Horsepower": "360 hp",
            "Time": "4.8 sec"
        },
        {
            "Year": "2003",
            "Model": "Porsche Carrera GT",
            "Horsepower": "612 hp",
            "Time": "3.9 sec"
        },
        {
            "Year": "2005",
            "Model": "Porsche Cayman",
            "Horsepower": "245 hp",
            "Time": "5.8 sec"
        },
        {
            "Year": "2009",
            "Model": "Porsche Panamera",
            "Horsepower": "400 hp",
            "Time": "5.2 sec"
        },
        {
            "Year": "2013",
            "Model": "Porsche 918 Spyder",
            "Horsepower": "887 hp",
            "Time": "2.6 sec"
        },
        {
            "Year": "2019",
            "Model": "Porsche Taycan",
            "Horsepower": "616 hp",
            "Time": "3.0 sec"
        },
        {
            "Year": "2022",
            "Model": "Porsche 718 GT4RS Cayman",
            "Horsepower": "500 hp",
            "Time": "3.2 sec"
        }
    ];

    // Video source credits
    const videoCredits = [
        {
            "video": "Credits",
            "source": "https://www.instagram.com/reel/DFqrv_isuFL/?igsh=aXdmeG5qYmE4bXp0",
        }
    ];

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const porscheLength = PorscheVideos.length
    console.log("porscheLength", porscheLength);
    const handleUpBtn = () => {
        prevIndexRef.current = index;
        setIsTransitioning(true);
        setIndex(Math.max(index - 1, 0));
        setIsPlaying(true);
    };

    console.log("currentindex", index);

    const handleDownBtn = () => {
        prevIndexRef.current = index;
        setIsTransitioning(true);
        setIndex(Math.min(index + 1, PorscheVideos.length - 1));
        setIsPlaying(true);
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleAcknowledgements = (e) => {
        if (e) e.stopPropagation();
        setShowAcknowledgements(!showAcknowledgements);
    };

    const handleVideoMouseEnter = () => {
        setShowControls(true);
    };

    const handleVideoMouseLeave = () => {
        setShowControls(false);
    };

    const handleTimelineHover = (i) => {
        if (timelineRef.current) {
            const rect = timelineRef.current.getBoundingClientRect();
            setTooltipPosition({
                x: (i / (porschePowers.length - 1)) * 100,
                y: rect.top
            });
            setTooltipIndex(i);
            setShowTimelineTooltip(true);
        }
    };

    const handleTimelineLeave = () => {
        setShowTimelineTooltip(false);
    };

    // Close acknowledgements when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (showAcknowledgements && !e.target.closest('.acknowledgements-popup')) {
                setShowAcknowledgements(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showAcknowledgements]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowUp") {
                handleUpBtn();
            } else if (e.key === "ArrowDown") {
                handleDownBtn();
            } else if (e.key === " ") {
                togglePlay();
            } else if (e.key === "m") {
                toggleMute();
            } else if (e.key === "i") {
                toggleAcknowledgements();
            } else if (e.key === "Escape" && showAcknowledgements) {
                setShowAcknowledgements(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [index, isPlaying, isMuted, showAcknowledgements]);

    // Reset video when index changes and handle transition
    useEffect(() => {
        // End the transition effect after video loads
        const handleVideoLoad = () => {
            setTimeout(() => {
                setIsTransitioning(false);
            }, 500);
        };

        if (videoRef.current) {
            videoRef.current.addEventListener('loadeddata', handleVideoLoad);

            if (isPlaying) {
                videoRef.current.play().catch(e => console.error("Video play error:", e));
            }
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('loadeddata', handleVideoLoad);
            }
        };
    }, [index]);

    // Determine if going forward or backward in time
    const transitionDirection = prevIndexRef.current < index ? 'next' : 'prev';

    // Calculate the horsepower percentage for visualization
    const getHorsepowerPercentage = (hpIndex) => {
        const maxHp = Math.max(...porschePowers.map(car => parseInt(car.Horsepower)));
        const currentHp = parseInt(porschePowers[hpIndex].Horsepower);
        return (currentHp / maxHp) * 100;
    };

    return (
        <div className="bg-black min-h-screen overflow-y-auto ">
            <div className="flex flex-col md:flex-row items-center h-screen max-w-screen-2xl mx-auto text-white">
                {/* Video Section */}
                <div
                    className="relative w-full h-1/2 md:h-full md:w-3/5 lg:w-3/4 overflow-hidden"
                    onMouseEnter={handleVideoMouseEnter}
                    onMouseLeave={handleVideoMouseLeave}
                    onTouchStart={() => setShowControls(true)}
                    onTouchEnd={() => setTimeout(() => setShowControls(false), 3000)}
                >
                    <video
                        ref={videoRef}
                        className={`h-full w-full object-cover transition-all duration-500 ${isTransitioning ?
                            transitionDirection === 'next' ? 'scale-105 blur-sm' : 'scale-95 blur-sm' :
                            'scale-100 blur-none'}`}
                        src={PorscheVideos[index]}
                        autoPlay={isPlaying}
                        loop
                        muted={isMuted}
                        onClick={togglePlay}
                        playsInline // Important for iOS
                    />

                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlay}
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-3 sm:p-5 transition-all duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <FontAwesomeIcon
                            icon={isPlaying ? faPause : faPlay}
                            className="text-xl sm:text-2xl text-white"
                        />
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                        onClick={toggleMute}
                        className={`absolute bottom-4 left-4 bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 transition-all duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                        aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                        <FontAwesomeIcon
                            icon={isMuted ? faVolumeMute : faVolumeUp}
                            className="text-lg sm:text-xl text-white"
                        />
                    </button>

                    {/* Video Acknowledgements Button */}
                    <button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`absolute bottom-4 right-4 bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 transition-all duration-300 flex items-center ${showControls ? 'opacity-100' : 'opacity-0'}`}
                        aria-label="Video credits"
                    >
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            className="text-lg sm:text-xl text-white"
                        />
                        <span className="ml-2 text-xs sm:text-sm hidden sm:inline">Credits</span>
                    </button>

                    {/* Video Acknowledgements Popup */}
                    {isHovered && (
                        <div
                            className="acknowledgements-popup fixed z-30 bottom-16 right-4 sm:right-6 md:right-8 bg-black/80 backdrop-blur-sm rounded-lg border border-neutral-700 shadow-xl text-white p-3 sm:p-4 max-w-xs sm:max-w-sm">
                            <div className="flex justify-between items-center mb-2 sm:mb-3">
                                <h3 className="text-sm sm:text-base font-semibold">Video Acknowledgements</h3>
                                <button
                                    onClick={toggleAcknowledgements}
                                    className="text-neutral-400 hover:text-white"
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="text-xs sm:text-sm">
                                <div className="space-y-3">
                                    {videoCredits.map((credit, i) => (
                                        <div key={i}
                                             className={`pb-2 ${i < videoCredits.length - 1 ? 'border-b border-neutral-700' : ''}`}>
                                            <div className="font-semibold text-red-500"></div>
                                            <div className="text-neutral-300 mt-1">
                                                <a
                                                    href={credit.source}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:underline"
                                                >
                                                    {credit.source}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Video transition overlay */}
                    {isTransitioning && (
                        <div className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
                            isTransitioning ? 'opacity-100' : 'opacity-0'
                        }`}>
                            <div className={`absolute inset-0 flex items-center justify-center ${
                                transitionDirection === 'next' ? 'animate-slide-up' : 'animate-slide-down'
                            }`}>
                                <div
                                    className="text-4xl sm:text-6xl md:text-8xl font-bold text-white opacity-0 animate-pulse-fade">
                                    {porschePowers[index].Year}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Card-Based Info Panel */}
                <div
                    className="w-full h-full md:h-full md:w-3/5 lg:w-1/4  flex flex-col justify-between
                     bg-gradient-to-b from-black to-neutral-900 p-2 sm:p-3 md:p-6">
                    {/* Main Info Card */}
                    <div
                        className={`bg-neutral-800/50 backdrop-blur-sm rounded-xl shadow-lg p-3 sm:p-4 md:p-6 border border-neutral-700 transition-all duration-500 ${
                            isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                        }`}>
                        <div className="text-xs uppercase tracking-wider text-red-500 font-semibold mb-1">
                            Porsche Heritage
                        </div>
                        <div className="text-xs sm:text-sm text-neutral-400 mb-2 sm:mb-4">
                            {porschePowers[index].Year}
                        </div>

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6 text-white">
                            {porschePowers[index].Model}
                        </h2>

                        <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-2 sm:mt-4">
                            {/* Horsepower Card */}
                            <div
                                className="bg-neutral-900/80 rounded-lg p-2 sm:p-4 border border-neutral-700 transition-all hover:bg-neutral-800 hover:border-red-600/30">
                                <div className="text-xs text-neutral-400 uppercase tracking-wide mb-0.5 sm:mb-1">
                                    Horsepower
                                </div>
                                <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                                    {porschePowers[index].Horsepower}
                                </div>
                            </div>

                            {/* 0-100 Time Card */}
                            <div
                                className="bg-neutral-900/80 rounded-lg p-2 sm:p-4 border border-neutral-700 transition-all hover:bg-neutral-800 hover:border-red-600/30">
                                <div className="text-xs text-neutral-400 uppercase tracking-wide mb-0.5 sm:mb-1">
                                    0-100 MPH
                                </div>
                                <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                                    {porschePowers[index].Time}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Redesigned Timeline Card */}
                    <div
                        className="bg-neutral-800/50 backdrop-blur-sm rounded-xl shadow-lg p-3 sm:p-4 md:p-6 border border-neutral-700 mt-3 sm:mt-6">
                        <div
                            className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2 sm:mb-4 flex justify-between items-center">
                            <span>Porsche Evolution</span>
                            <span className="text-red-500">{porschePowers[index].Year}</span>
                        </div>

                        {/* New Timeline Design */}
                        <div className="relative" ref={timelineRef}>
                            {/* Main timeline container */}
                            <div className="relative h-12 sm:h-16 mb-2">
                                {/* Timeline curved line */}
                                <svg className="absolute w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                                    {/* Base curve */}
                                    <path
                                        d="M0,15 Q50,30 100,15"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="1.5"
                                    />

                                    {/* Progress curve */}
                                    <path
                                        d={`M0,15 Q${index * 50 / (porschePowers.length - 1)},${index * 30 / (porschePowers.length - 1) + 15} ${index * 100 / (porschePowers.length - 1)},${15 - index * 15 / (porschePowers.length - 1)}`}
                                        fill="none"
                                        stroke="#e11d48"
                                        strokeWidth="2"
                                        className="transition-all duration-500"
                                    />
                                </svg>

                                {/* Indicator dots */}
                                {porschePowers.map((car, i) => {
                                    // Calculate position along the curve
                                    const x = (i / (porschePowers.length - 1)) * 100;
                                    const y = 15 - Math.sin((i / (porschePowers.length - 1)) * Math.PI) * 15;

                                    return (
                                        <button
                                            key={i}
                                            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 focus:outline-none`}
                                            style={{
                                                left: `${x}%`,
                                                top: `${y}px`,
                                            }}
                                            onClick={() => {
                                                prevIndexRef.current = index;
                                                setIsTransitioning(true);
                                                setIndex(i);
                                                setIsPlaying(true);
                                            }}
                                            onMouseEnter={(e) => handleTimelineHover(i, e)}
                                            onMouseLeave={handleTimelineLeave}
                                            onTouchStart={() => handleTimelineHover(i)}
                                            onTouchEnd={handleTimelineLeave}
                                            aria-label={`Go to ${car.Year} - ${car.Model}`}
                                        >
                                            {/* Outer ring */}
                                            <div
                                                className={`relative w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                    i === index ? 'scale-100' : 'scale-75 opacity-60'
                                                }`}>
                                                {/* Power indicator */}
                                                <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                                                    <circle
                                                        cx="18"
                                                        cy="18"
                                                        r="16"
                                                        fill="none"
                                                        stroke={i <= index ? "#e11d48" : "#333"}
                                                        strokeWidth="1"
                                                        className="transition-all duration-500"
                                                    />
                                                    <circle
                                                        cx="18"
                                                        cy="18"
                                                        r="16"
                                                        fill="none"
                                                        stroke={i <= index ? "#e11d48" : "#444"}
                                                        strokeWidth="2"
                                                        strokeDasharray={`${getHorsepowerPercentage(i)}, 100`}
                                                        strokeDashoffset="25"
                                                        className="transition-all duration-500"
                                                    />
                                                </svg>

                                                {/* Inner dot */}
                                                <div
                                                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                                        i <= index ? 'bg-red-600' : 'bg-neutral-700'
                                                    } ${i === index ? 'scale-100' : 'scale-75'}`}/>
                                            </div>
                                        </button>
                                    );
                                })}

                                {/* Current model indicator - hidden on smaller screens */}
                                <div
                                    className={`absolute bottom-6 left-0 transition-all duration-500 transform -translate-x-1/2 flex flex-col items-center ${
                                        isTransitioning || isMobile ? 'opacity-0' : 'opacity-100'
                                    }`}
                                    style={{left: `${(index / (porschePowers.length - 1)) * 100}%`}}
                                >
                                    <div className="hidden sm:block text-xs px-2 py-1 rounded font-medium">
                                        {porschePowers[index].Model}
                                    </div>
                                </div>

                                {/* Tooltip on hover */}
                                {showTimelineTooltip && tooltipIndex !== null && (
                                    <div
                                        className="absolute z-10 transform -translate-x-1/2 bg-red-600 text-white text-xs py-1 px-2 rounded pointer-events-none"
                                        style={{
                                            left: `${tooltipPosition.x}%`,
                                            bottom: '100%',
                                            marginBottom: '8px'
                                        }}
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="font-bold">{porschePowers[tooltipIndex].Year}</div>
                                            <div className="text-xs">{porschePowers[tooltipIndex].Model}</div>
                                        </div>
                                        <div
                                            className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-600 absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full"/>
                                    </div>
                                )}
                            </div>

                            {/* Era labels - visually indicating major eras - hidden on smallest screens */}
                            <div className="hidden xs:flex justify-between mt-2 text-xs">
                                <span className="text-neutral-500">Classic Era</span>
                                <span className="text-neutral-500">Racing Era</span>
                                <span className="text-neutral-500">Modern Era</span>
                            </div>

                            {/* Power & Speed Indicator */}
                            <div
                                className="mt-2 sm:mt-4 bg-neutral-900/70 rounded-lg p-2 sm:p-3 border border-neutral-800">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs text-neutral-400">Horsepower Evolution</span>
                                    <span
                                        className="text-xs text-red-500 font-bold">{porschePowers[index].Horsepower}</span>
                                </div>
                                <div className="w-full bg-neutral-800 rounded-full h-1.5 mb-2 sm:mb-3">
                                    <div
                                        className="bg-gradient-to-r from-red-800 to-red-500 h-1.5 rounded-full transition-all duration-500"
                                        style={{width: `${getHorsepowerPercentage(index)}%`}}
                                    />
                                </div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs text-neutral-400">0-100 Time</span>
                                    <span className="text-xs text-red-500 font-bold">{porschePowers[index].Time}</span>
                                </div>
                                <div className="w-full bg-neutral-800 rounded-full h-1.5">
                                    <div
                                        className="bg-gradient-to-r from-red-500 to-red-800 h-1.5 rounded-full transition-all duration-500"
                                        style={{width: `${100 - (parseInt(porschePowers[index].Time) / 13) * 100}%`}}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Control buttons */}
                        <div className="flex justify-center items-center space-x-2 sm:space-x-4 mt-3 sm:mt-6">
                            <button
                                onClick={handleUpBtn}
                                disabled={index === 0}
                                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all ${
                                    index === 0
                                        ? 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                                        : 'bg-neutral-800 text-white hover:bg-red-600 hover:scale-110'
                                }`}
                                aria-label="Previous model"
                            >
                                <FontAwesomeIcon icon={faAnglesUp}/>
                            </button>
                            <button
                                onClick={togglePlay}
                                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full text-white hover:bg-red-700 transition-all hover:scale-110 shadow-lg shadow-red-600/20"
                                aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay}/>
                            </button>
                            <button
                                onClick={handleDownBtn}
                                disabled={index === porschePowers.length - 1}
                                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all ${
                                    index === porschePowers.length - 1
                                        ? 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                                        : 'bg-neutral-800 text-white hover:bg-red-600 hover:scale-110'
                                }`}
                                aria-label="Next model"
                            >
                                <FontAwesomeIcon icon={faAnglesDown}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add global styles for animations */}
            <style jsx={"true"} global={"true"}>{`
                /* Add the missing xs breakpoint */
                @media (min-width: 475px) {
                    .xs\\:flex {
                        display: flex;
                    }

                    .xs\\:hidden {
                        display: none;
                    }

                    .xs\\:block {
                        display: block;
                    }
                }

                @keyframes pulse-fade {
                    0% {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.1);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                }

                @keyframes slide-up {
                    0% {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes slide-down {
                    0% {
                        transform: translateY(-20px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .animate-pulse-fade {
                    animation: pulse-fade 1s ease-in-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.5s ease-out;
                }

                .animate-slide-down {
                    animation: slide-down 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}

export default History;