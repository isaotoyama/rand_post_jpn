import React from 'react';
import { Palette, BookOpen, Wine, Coffee, Users, Calendar, Target, Sparkles, Music, List } from 'lucide-react';
import designData from '../data/designs.json';

type DesignType = 'festival' | 'book' | 'beverage' | 'coffee';

function getRandomItem<T>(array: T[]): T {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error('Invalid array provided to getRandomItem');
  }
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomYear(): number {
  return new Date().getFullYear() + Math.floor(Math.random() * 2);
}

export function RandomDesign() {
  const [designType, setDesignType] = React.useState<DesignType>('festival');
  const [design, setDesign] = React.useState(() => {
    const type = 'festival' as DesignType;
    return {
      type,
      data: getRandomItem(designData.festivals),
      year: getRandomYear()
    };
  });

  const regenerate = (type: DesignType) => {
    setDesignType(type);
    let data;
    switch (type) {
      case 'festival':
        data = getRandomItem(designData.festivals);
        break;
      case 'book':
        data = getRandomItem(designData.books);
        break;
      case 'beverage':
        data = getRandomItem(designData.beverages);
        break;
      case 'coffee':
        data = getRandomItem(designData.coffee);
        break;
      default:
        data = getRandomItem(designData.festivals);
    }
    
    setDesign({
      type,
      data,
      year: getRandomYear()
    });
  };

  const renderDesignDetails = () => {
    switch (design.type) {
      case 'festival':
        return (
          <>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-semibold">{design.data.name}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">フェスティバル詳細</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">年齢層：</span> {design.data.demographics.primaryAge}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">シーズン：</span> {design.data.demographics.season}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">主なファン層：</span> {design.data.demographics.mainAudience}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">雰囲気：</span> {design.data.demographics.atmosphere}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Music className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-700">出演アーティスト：</span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {design.data.lineup.map((artist, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="w-6 text-right">{index + 1}.</span>
                      {artist}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        );
      case 'book':
        return (
          <>
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-semibold">{design.data.title}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">書籍カバー詳細</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">ジャンル：</span> {design.data.genre}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">テーマ：</span> {design.data.style.theme}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">配色：</span> {design.data.style.colors}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">イメージ：</span> {design.data.style.imagery}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <List className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-700">章立て：</span>
                </div>
                <ol className="list-decimal list-inside space-y-2">
                  {design.data.chapters.map((chapter, index) => (
                    <li key={index} className="text-gray-700">{chapter}</li>
                  ))}
                </ol>
              </div>
            </div>
          </>
        );
      case 'beverage':
        return (
          <>
            <div className="flex items-center gap-3">
              <Wine className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-semibold">{design.data.name}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">飲料ラベル詳細</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">種類：</span> {design.data.type}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">テーマ：</span> {design.data.style.theme}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">配色：</span> {design.data.style.colors}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">イメージ：</span> {design.data.style.imagery}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <List className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-700">原材料：</span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {design.data.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="w-6 text-right">{index + 1}.</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        );
      case 'coffee':
        return (
          <>
            <div className="flex items-center gap-3">
              <Coffee className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-semibold">{design.data.name}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">コーヒーパッケージ詳細</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">焙煎：</span> {design.data.roast}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">テーマ：</span> {design.data.style.theme}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">配色：</span> {design.data.style.colors}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    <span className="font-medium">イメージ：</span> {design.data.style.imagery}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <List className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-700">風味と特徴：</span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {design.data.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="w-6 text-right">{index + 1}.</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">ランダムデザインジェネレーター</h1>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => regenerate('festival')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                designType === 'festival' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              フェスポスター
            </button>
            <button
              onClick={() => regenerate('book')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                designType === 'book' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              書籍カバー
            </button>
            <button
              onClick={() => regenerate('beverage')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                designType === 'beverage' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              飲料ラベル
            </button>
            <button
              onClick={() => regenerate('coffee')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                designType === 'coffee' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              コーヒーパッケージ
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {renderDesignDetails()}
          
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-indigo-600" />
            <span className="text-xl">{design.year}年</span>
          </div>
        </div>
      </div>
    </div>
  );
}