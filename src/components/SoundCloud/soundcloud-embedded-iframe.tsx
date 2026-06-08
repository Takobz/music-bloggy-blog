interface SoundCloudEmbedProps {
    embedUrl: string,
    
}


const SoundCloudEmbeddedIframe = (soundCloudProps: SoundCloudEmbedProps) => {
    const soundCloudEmbedIframeUrl =
        soundCloudProps.embedUrl +
        "&color=%23272725" +
        "&auto_play=false" +
        "&hide_related=false" +
        "&show_comments=true" +
        "&show_user=true" +
        "&show_reposts=false" +
        "&show_teaser=true";

    return (
        <>
            <iframe 
                width="100%" 
                height="166"
                allow="autoplay; encrypted-media" 
                src={soundCloudEmbedIframeUrl!}
            ></iframe>
        </>
    );
}

export default SoundCloudEmbeddedIframe