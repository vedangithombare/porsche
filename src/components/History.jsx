import {useState} from "react";
import {faAnglesDown, faAnglesUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function History() {
    const [index, setIndex] = useState(0);
    const PorscheVideos = [
        "src/static/assests/PorscheCars/1.final porsche 718 gt4 rs cayman.mp4",
        "src/static/assests/PorscheCars/2.1953— porsche 550.mp4",
        "src/static/assests/PorscheCars/3 final 1957— porsche 718.mp4",
        "src/static/assests/PorscheCars/4. final1963— porsche 904.mp4",
        "src/static/assests/PorscheCars/5. final1969— porsche 917.mp4",
        "src/static/assests/PorscheCars/6. final1975— porsche 911 turbo.mp4",
        "src/static/assests/PorscheCars/7. final1986— porsche 959.mp4",
        "src/static/assests/PorscheCars/8.final1996— porsche 986 boxster.mp4",
        "src/static/assests/PorscheCars/9.final1999— porsche 911 gt3.mp4",
        "src/static/assests/PorscheCars/10.final2003— porsche carrera gt.mp4",
        "src/static/assests/PorscheCars/11. final 2005— porsche cayman.mp4",
        "src/static/assests/PorscheCars/12. final2009— porsche panamera.mp4",
        "src/static/assests/PorscheCars/13. final2013— porsche 918 spyder.mp4",
        "src/static/assests/PorscheCars/14.final2019— porsche taycan.mp4",
        "src/static/assests/PorscheCars/15. final2022— porsche 718 gt4 rs cayman.mp4"
    ]

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
    ]
    console.log("3 elements", porschePowers.length, index, PorscheVideos.length);

    const handleUpBtn = () => {
        console.log("inside up button", index);
        setIndex(Math.max(index - 1, 0));
    }

    const handleDownBtn = () => {
        console.log("inside down button", index, PorscheVideos.length)
        setIndex(Math.min(index + 1, PorscheVideos.length));
    }

    return (
        <>
            <div className={" flex items-center justify-center  h-screen text-white w-full"}>
                <div className={"flex h-full flex-[2] "}>
                    <video className={"h-full object-cover"} src={PorscheVideos[index]} autoPlay></video>

                </div>
                <div className={"flex flex-col h-full flex-1"}>
                    <button onClick={handleUpBtn} className={"w-full p-4 border-2 border-white "}>
                        <FontAwesomeIcon icon={faAnglesUp} style={{color: "#fffff"}} />                    </button>
                    <div className={"flex flex-col flex-1 w-full"}>
                        <span>
                            {porschePowers[index].Model}
                        </span>
                    </div>
                    <button onClick={handleDownBtn} className={"w-full p-4 border-2 border-white "}>
                        <FontAwesomeIcon icon={faAnglesDown} style={{color: "#fffff"}} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default History;