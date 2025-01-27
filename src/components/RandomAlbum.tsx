import React from 'react';
import { Disc3, Music2, User, Calendar, Users, Clock, Target } from 'lucide-react';
import musicData from '../data/music.json';

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomYear(): number {
  return Math.floor(Math.random() * (2024 - 1950) + 1950);
}

function getRandomTracks(): string[] {
  const trackList: string[] = [];
  const usedIndexes = new Set<number>();

  while (trackList.length < 10) {
    const index = Math.floor(Math.random() * musicData.songs.length);
    if (!usedIndexes.has(index)) {
      usedIndexes.add(index);
      trackList.push(musicData.songs[index]);
    }
  }

  return trackList;
}

export function RandomAlbum() {
  const [albumData, setAlbumData] = React.useState({
    artist: getRandomItem(musicData.artists),
    year: getRandomYear(),
    albumTitle: getRandomItem(musicData.albums),
    tracks: getRandomTracks()
  });

  const regenerate = () => {
    setAlbumData({
      artist: getRandomItem(musicData.artists),
      year: getRandomYear(),
      albumTitle: getRandomItem(musicData.albums),
      tracks: getRandomTracks()
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">ランダムアルバムジェネレーター</h1>
          <button
            onClick={regenerate}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            新しく生成
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-semibold">{albumData.artist.name}</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">アーティスト情報</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">
                  <span className="font-medium">年齢層：</span> {albumData.artist.demographics.primaryAge}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">
                  <span className="font-medium">活動期間：</span> {albumData.artist.demographics.era}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">
                  <span className="font-medium">主なファン層：</span> {albumData.artist.demographics.mainAudience}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">
                  <span className="font-medium">コアファン：</span> {albumData.artist.demographics.coreFollowing}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-indigo-600" />
            <span className="text-xl">{albumData.year}年</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Disc3 className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-semibold">{albumData.albumTitle}</span>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              <Music2 className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">収録曲</h2>
            </div>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              {albumData.tracks.map((track, index) => (
                <li key={index} className="text-gray-700">
                  {track}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}