const SpotifyEmbeddedIframe = () => {
    return (
        <>
            <iframe 
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }} 
                src="https://open.spotify.com/embed/track/6J6gLEd9QLMCEQEG6NQFBc?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
            ></iframe>
        </>
    );
}

export default SpotifyEmbeddedIframe