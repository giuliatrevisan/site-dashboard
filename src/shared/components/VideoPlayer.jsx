import React from 'react';
import ReactPlayer from 'react-player/youtube';

export default function VideoPlayer() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Vídeo Informativo</h2>
      <div className="w-full h-80">
        <iframe
          className="w-full h-full border-none rounded"
          src="https://www.youtube.com/embed/SfkmJ9h7clM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

