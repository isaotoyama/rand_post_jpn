import React from 'react';
import { type Artwork } from '../data/artworks';
import { Frame } from 'lucide-react';

interface ArtCardProps {
  artwork: Artwork;
  onNext: () => void;
}

export function ArtCard({ artwork, onNext }: ArtCardProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {artwork.category === 'art' ? '芸術' : '映画'}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Frame className="w-5 h-5 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">{artwork.title}</h2>
        </div>
        
        <div className="space-y-3">
          <p className="text-gray-600">
            <span className="font-semibold">作者:</span> {artwork.artist}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">年:</span> {artwork.year}
          </p>
          <p className="text-gray-700 mt-2">{artwork.description}</p>
        </div>
        
        <button
          onClick={onNext}
          className="mt-6 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium
                   hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          次の作品を見る
        </button>
      </div>
    </div>
  );
}