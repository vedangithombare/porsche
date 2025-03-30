import {useState} from "react";
import {faAnglesDown, faAnglesUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function History() {
    const [index, setIndex] = useState(0);
    const PorscheVideos = [
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/1.final%20porsche%20718%20gt4%20rs%20cayman-BZ3qQUCjR7BsMF3PFmFYoZDY2YKijL.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/2.1953%E2%80%94%20porsche%20550-WSznggwRTsTt1wh9M1XMebmGutpGLT.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/3%20final%201957%E2%80%94%20porsche%20718-vy2EbiTZO1zL7YtpfaUCwGHriEVONU.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/4.%20final1963%E2%80%94%20porsche%20904-FA8HlAm6XNfDvRuhG5tYka49AXj8TH.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/5.%20final1969%E2%80%94%20porsche%20917-SPMJ5tMXanDPSpDymXQAeAK3fV3OpC.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/6.%20final1975%E2%80%94%20porsche%20911%20turbo-IBBCvTphniRTuWeBXg2VaFivHw7WZi.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/7.%20final1986%E2%80%94%20porsche%20959-1EmMt28yM9IAHjzFomAJ7iLVIW9iJM.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/8.final1996%E2%80%94%20porsche%20986%20boxster-SmGd1YZrgcOLmKKxPqo834huREnH1r.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/9.final1999%E2%80%94%20porsche%20911%20gt3-IXZfIUxINE5kJ5gSEPYAfLrour1RtU.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/10.final2003%E2%80%94%20porsche%20carrera%20gt-qE5W8XM5HXTZ4j4LUdVKBnqkdOE46y.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/11.%20final%202005%E2%80%94%20porsche%20cayman-jqMmaEmnDf27SkRgX4CT8GSHQ8P96F.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/12.%20final2009%E2%80%94%20porsche%20panamera-4L1NAlQUnFqb7VYECjFfXOt0PcNt86.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/13.%20final2013%E2%80%94%20porsche%20918%20spyder-STFSPXgWWaxGigb4r2nw3Zp4kONczk.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/14.final2019%E2%80%94%20porsche%20taycan-TGRCD8KjaEFIvE5jEUwApwoGMHmCCV.mp4",
        "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/15.%20final2022%E2%80%94%20porsche%20718%20gt4%20rs%20cayman-lfUAKvtRZhZePN6DDOhrtu3A9eMVz6.mp4"
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
                        <FontAwesomeIcon icon={faAnglesUp} style={{color: "#fffff"}} />
                    </button>
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