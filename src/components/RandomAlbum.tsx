import React from 'react';
import { Disc3, Music2, User, Calendar, Users, Clock, Target, Play, Pause, RotateCcw } from 'lucide-react';
import musicData from '../data/music.json';

function getRandomItem<T>(array: T[]): T {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error('Invalid array provided to getRandomItem');
  }
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
  const [albumData, setAlbumData] = React.useState(() => {
    const artist = getRandomItem(musicData.artists);
    return {
      artist,
      year: getRandomYear(),
      albumTitle: getRandomItem(musicData.albums),
      tracks: getRandomTracks(),
      demographics: artist.demographics
    };
  });

  const [timeLeft, setTimeLeft] = React.useState(30 * 60); // 30 minutes in seconds
  const [isRunning, setIsRunning] = React.useState(false);
  const [audio] = React.useState(new Audio('/timer-end.mp3'));
  const intervalRef = React.useRef<number>();

  React.useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            audio.play();
            clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, audio]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(30 * 60);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const regenerate = () => {
    const artist = getRandomItem(musicData.artists);
    setAlbumData({
      artist,
      year: getRandomYear(),
      albumTitle: getRandomItem(musicData.albums),
      tracks: getRandomTracks(),
      demographics: artist.demographics
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
                  <span className="font-medium">年齢層：</span> {albumData.demographics.primaryAge}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">
                  <span className="font-medium">活動期間：</span> {albumData.demographics.era}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">
                  <span className="font-medium">主なファン層：</span> {albumData.demographics.mainAudience}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">
                  <span className="font-medium">コアファン：</span> {albumData.demographics.coreFollowing}
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

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-800">{formatTime(timeLeft)}</h2>
              <div className="flex gap-4">
                <button
                  onClick={toggleTimer}
                  className={`px-6 py-2 rounded-lg flex items-center gap-2 ${
                    isRunning
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-green-600 hover:bg-green-700'
                  } text-white transition-colors`}
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-5 h-5" /> 一時停止
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" /> スタート
                    </>
                  )}
                </button>
                <button
                  onClick={resetTimer}
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" /> リセット
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}