import React from 'react';
import { Palette, BookOpen, Wine, Coffee, Users, Calendar, Target, Sparkles, Music, List, Disc3, DollarSign, ShoppingBag, Heart, Activity, Play, Pause, RotateCcw } from 'lucide-react';
import designData from '../data/designs.json';

type DesignType = 'festival' | 'book' | 'beverage' | 'coffee' | 'cdcover';

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

  // Timer state
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
      case 'cdcover':
        data = getRandomItem(designData.cdcovers);
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

  const renderDemographics = () => {
    switch (design.type) {
      case 'festival':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">年齢層：</span> {design.data.demographics.primaryAge}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">主なファン層：</span> {design.data.demographics.mainAudience}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">収入層：</span> {design.data.demographics.targetIncome}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">ライフスタイル：</span> {design.data.demographics.lifestyle}
              </span>
            </div>
          </div>
        );
      case 'book':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">年齢層：</span> {design.data.demographics.primaryAge}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">教育レベル：</span> {design.data.demographics.educationLevel}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">興味：</span> {design.data.demographics.interests}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">購入チャネル：</span> {design.data.demographics.purchaseChannel}
              </span>
            </div>
          </div>
        );
      case 'beverage':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">年齢層：</span> {design.data.demographics.primaryAge}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">ターゲット：</span> {design.data.demographics.targetMarket}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">健康意識：</span> {design.data.demographics.healthConsciousness}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">購入場所：</span> {design.data.demographics.shoppingVenue}
              </span>
            </div>
          </div>
        );
      case 'coffee':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">年齢層：</span> {design.data.demographics.primaryAge}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">ターゲット：</span> {design.data.demographics.targetMarket}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">コーヒー知識：</span> {design.data.demographics.coffeeKnowledge}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">抽出方法：</span> {design.data.demographics.preferredBrew}
              </span>
            </div>
          </div>
        );
      case 'cdcover':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">年齢層：</span> {design.data.demographics.primaryAge}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">主なファン層：</span> {design.data.demographics.mainAudience}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">コアファン：</span> {design.data.demographics.coreFollowing}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">
                <span className="font-medium">SNS活用：</span> {design.data.demographics.socialMediaPresence}
              </span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderDesignDetails = () => {
    switch (design.type) {
      case 'cdcover':
        return (
          <>
            <div className="flex items-center gap-3 mb-4">
              <Disc3 className="w-6 h-6 text-indigo-600" />
              <div className="flex flex-col">
                <span className="text-xl font-semibold">{design.data.artist}</span>
                <span className="text-lg text-gray-600">{design.data.name}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">アルバムカバーデザイン詳細</h3>
              {renderDemographics()}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">デザイン仕様</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">テーマ：</span> {design.data.style.theme}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">配色：</span> {design.data.style.colors}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">イメージ：</span> {design.data.style.imagery}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <List className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">書体：</span> {design.data.style.typography}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <List className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-700">デザイン要素：</span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {design.data.elements.map((element, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="w-6 text-right">{index + 1}.</span>
                      {element}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        );
      case 'festival':
        return (
          <>
            <div className="flex items-center gap-3">
              <Music className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-semibold">{design.data.name}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">フェスティバル詳細</h3>
              {renderDemographics()}
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <List className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-700">ラインナップ：</span>
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
              {renderDemographics()}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">デザイン仕様</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">テーマ：</span> {design.data.style.theme}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">配色：</span> {design.data.style.colors}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">イメージ：</span> {design.data.style.imagery}
                    </span>
                  </div>
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
              {renderDemographics()}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">デザイン仕様</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">テーマ：</span> {design.data.style.theme}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">配色：</span> {design.data.style.colors}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">イメージ：</span> {design.data.style.imagery}
                    </span>
                  </div>
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
              {renderDemographics()}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">デザイン仕様</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">テーマ：</span> {design.data.style.theme}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">配色：</span> {design.data.style.colors}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">イメージ：</span> {design.data.style.imagery}
                    </span>
                  </div>
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
            <button
              onClick={() => regenerate('cdcover')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                designType === 'cdcover' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              アルバムカバー
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {renderDesignDetails()}
          
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-indigo-600" />
            <span className="text-xl">{design.year}年</span>
          </div>

          {/* Timer Section */}
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