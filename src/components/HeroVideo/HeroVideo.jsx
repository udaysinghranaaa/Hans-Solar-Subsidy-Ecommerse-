import React, { useEffect, useRef, useState } from 'react';
import './HeroVideo.css';

const VIDEO_ID = 'x-zbjyRlS4c';

const HeroVideo = () => {
  const playerContainerRef = useRef(null);
  const playerInstanceRef = useRef(null);
  const [isApiReady, setIsApiReady] = useState(false);

  // Load YouTube Iframe API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setIsApiReady(true);
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      setIsApiReady(true);
    };
  }, []);

  // Init player
  useEffect(() => {
    if (!isApiReady || !playerContainerRef.current || playerInstanceRef.current) return;

    playerInstanceRef.current = new window.YT.Player(playerContainerRef.current, {
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 1,
        mute: 1,
        loop: 1,
        playlist: VIDEO_ID,
        controls: 0,
        showinfo: 0,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
      },
      events: {
        onReady: (event) => {
          event.target.mute();
          event.target.playVideo();
        },
      },
    });
  }, [isApiReady]);

  const handlePlayWithSound = () => {
    const player = playerInstanceRef.current;
    if (!player) return;

    player.unMute();
    player.setVolume(100);
    player.playVideo();
  };

  return (
    <section className="hero-video-wrapper">
      {/* Full-bleed background video */}
      <div className="hero-video-bg">
        <div id="hero-bg-player" ref={playerContainerRef} />
      </div>

      {/* Overlay + buttons */}
      <div className="hero-video-overlay">
        <div className="hero-video-cta">
          <button className="hero-video-btn primary" onClick={handlePlayWithSound}>
            Play with Sound
          </button>
          <button
            className="hero-video-btn secondary"
            onClick={() =>
              document
                .getElementById('main-content')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
