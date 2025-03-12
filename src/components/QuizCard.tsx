import React from 'react';
import { type QuizQuestion } from '../data/quizData';
import { Brain, CheckCircle2, XCircle } from 'lucide-react';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  showResult: boolean;
  onNext: () => void;
}

export function QuizCard({ question, onAnswer, selectedAnswer, showResult, onNext }: QuizCardProps) {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="w-6 h-6 text-indigo-600" />
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-sm ${
              question.category === 'art' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'
            }`}>
              {question.category === 'art' ? '芸術' : '映画'}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
              question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {question.difficulty === 'easy' ? '初級' :
               question.difficulty === 'medium' ? '中級' : '上級'}
            </span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-6">{question.question}</h2>
        
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => !showResult && onAnswer(option)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                showResult
                  ? option === question.correctAnswer
                    ? 'bg-green-100 text-green-800'
                    : option === selectedAnswer
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-50 text-gray-500'
                  : selectedAnswer === option
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-50 hover:bg-indigo-50 text-gray-800'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {showResult && (
          <div className={`mt-6 p-4 rounded-lg ${
            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
              <span className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? '正解です！' : '不正解です。'}
              </span>
            </div>
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}

        {showResult && (
          <button
            onClick={onNext}
            className="mt-6 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium
                     hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            次の問題へ
          </button>
        )}
      </div>
    </div>
  );
}