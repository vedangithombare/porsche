// videoConfig.js
export const MainVideoUrl = "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/final_porsche_video-Km46VP2iJqzSZdYXbP3Hqx94T1ZWQ2.mp4";

export const HistoryVideos = [
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
    "https://9wshyvzuemqs4xuk.public.blob.vercel-storage.com/15.final%20final%202022%E2%80%94%20porsche%20718%20gt4%20rs%20cayman%20-%20Made%20with%20Clipchamp-dZZh6tZdgUZW2pL0l1ZRrrC62Kfumh.mp4"
];

// Add any other video URLs here

// Export a function to get all videos for preloading
export const getAllVideosForPreload = () => {
    return [
        MainVideoUrl,
        ...HistoryVideos,
        // Add any other categories of videos here
    ];
};