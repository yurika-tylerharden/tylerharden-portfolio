import { useState, useEffect } from 'react';
import photosData from '../content/photos.json';
import PhotoCarousel from '../components/PhotoCarousel';
import Photo from '../components/Photo';

// Import images manually
import mePhoto from '../assets/me.jpg';
import live1Photo from '../assets/live1.jpg';
import live2Photo from '../assets/live2.jpg';
import live3Photo from '../assets/live3.jpg';

const liveImageMap = {
  live1: live1Photo,
  live2: live2Photo,
  live3: live3Photo,
};

const meImageMap = {
  me: mePhoto
}

function Music() {
  const [musicPhotos, setMusicPhotos] = useState([]);
  const [mePhotos, setMePhotos] = useState([]);

  useEffect(() => {
    const livePhotosFiltered = photosData.filter(photo => photo.section === 'live');
    setMusicPhotos(livePhotosFiltered)
    const mePhotoFiltered = photosData.filter(photo => photo.section === 'me');
    setMePhotos(mePhotoFiltered);

  }, []);
  return (
    <section className="">
      <div className="max-w-4xl mx-auto text-center">
        <Photo
          photo={mePhotos[0]} 
          imageMap={meImageMap}
          lockAspectRatio={true}
          aspectRatio="16/9"
        />
        <PhotoCarousel 
          photos={musicPhotos} 
          imageMap={liveImageMap} 
          changeInterval={5000}      
          lockAspectRatio={true}         
          aspectRatio="16/9"             
        />

        {/* Spotify Embed */}
        <div className="mb-12">
          <iframe 
            src="https://open.spotify.com/embed/artist/5uXWOfu1kA8mQ9bUp5GgxT?utm_source=generator" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>

        {/* YouTube Embed */}
        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              className="rounded-xl shadow-md" 
              src="https://www.youtube.com/embed/tS8d4XtT5oM" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Secondary Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <img 
            src="/assets/vinyl.jpeg" 
            alt="Vinyl record" 
            className="rounded-2xl shadow-md object-cover"
          />
          <img 
            src="/assets/live.jpg" 
            alt="Live show" 
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Music;