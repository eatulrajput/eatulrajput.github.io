import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './Loader.css';

const LoadingSpinner = ({ loading }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black animate-gradient z-50">
      <ClipLoader
        loading={loading}
        size={100}
        color="#ffffff"
      />
    </div>
  );
};

export default LoadingSpinner;
