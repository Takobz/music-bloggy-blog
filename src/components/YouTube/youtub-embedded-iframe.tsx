export interface YouTubeEmbedProps {
    embedUrl: string,
    startStampInSeconds?: number
}

const YouTubeEmbeddedInframe = (embedProps: YouTubeEmbedProps) => {
    const youTubeEmbedIframeUrl = `${embedProps.embedUrl}?start=${embedProps.startStampInSeconds ?? 0}`

    return (
        <>
        <iframe 
            width="100%" 
            height="315" 
            src={youTubeEmbedIframeUrl!} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
        ></iframe>
        </>
    );
}

export default YouTubeEmbeddedInframe;