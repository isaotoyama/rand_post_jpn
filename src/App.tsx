import React from 'react';
import { RandomDesign } from './components/RandomDesign';
import { RandomAlbum } from './components/RandomAlbum';

function App() {
  const [activeTab, setActiveTab] = React.useState<'design' | 'album'>('design');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setActiveTab('design')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'design'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            デザインジェネレーター
          </button>
          <button
            onClick={() => setActiveTab('album')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'album'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            アルバムジェネレーター
          </button>
        </div>
      </div>
      {activeTab === 'design' ? <RandomDesign /> : <RandomAlbum />}
    </div>
  );
}

export default App;