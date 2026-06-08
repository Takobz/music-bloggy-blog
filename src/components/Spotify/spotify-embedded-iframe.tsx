export interface SpotifyEmbedProps {
    embedUrl: string
}

const SpotifyEmbeddedIframe = (embedProps: SpotifyEmbedProps) => {
    const spofiyEmbedIframUrl = `${embedProps.embedUrl}?utm_source=generator&theme=0`;
    return (
        <>
            <iframe 
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }} 
                src={spofiyEmbedIframUrl!} 
                width="100%" 
                height="352" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
            ></iframe>
        </>
    );
}

export default SpotifyEmbeddedIframe