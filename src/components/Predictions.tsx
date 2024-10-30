import React from 'react';

interface Prediction {
  className: string;
  probability: number;
}

interface PredictionsProps {
  predictions: Prediction[];
}

export function Predictions({ predictions }: PredictionsProps) {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Predictions</h2>
      <div className="space-y-2">
        {predictions.map((prediction, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
          >
            <span className="font-medium">{prediction.className}</span>
            <span className="text-gray-600">
              {(prediction.probability * 100).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}