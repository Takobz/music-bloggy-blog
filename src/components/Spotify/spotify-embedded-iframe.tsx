export interface SpotifyEmbedProps {
    embedUrl: string,
    iframeHeight?: string
}

const SpotifyEmbeddedIframe = (embedProps: SpotifyEmbedProps) => {
    const spofiyEmbedIframUrl = `${embedProps.embedUrl}?utm_source=generator&theme=0`;
    return (
        <>
            <iframe 
                data-testid="embed-iframe"
                style={{ borderRadius: "12px", display: "block" }} 
                src={spofiyEmbedIframUrl!} 
                width="100%" 
                height={embedProps.iframeHeight ?? "352"} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
            ></iframe>
        </>
    );
}

export default SpotifyEmbeddedIframe