const YouTubeEmbeddedInframe = () => {
    return (
        <>
        <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/VkVzfOVq_Vc?si=q5M0RI54Drk5l3pF" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
        ></iframe>
        </>
    );
}

export default YouTubeEmbeddedInframe;