import { useState, useEffect } from 'react';

function Photo({ photo, imageMap, lockAspectRatio = false, aspectRatio = '16/9' }) {
if (!photo) return null;

  return (
    <div className={`relative w-full mb-12 ${lockAspectRatio ? `aspect-[${aspectRatio}]` : ''}`}>
      <img 
        src={imageMap[photo.key]} 
        alt={photo.alt} 
        className={`w-full ${lockAspectRatio ? 'h-full object-cover' : 'object-cover max-h-[600px]'} rounded-2xl shadow-md transition-all duration-700 ease-in-out`}
      />
      <div className="absolute bottom-4 left-4 bg-white/70 dark:bg-black/50 text-xs rounded-lg px-3 py-1 backdrop-blur-md">
        {photo.location} — {photo.credit}
      </div>
    </div>
  );
}

export default Photo;