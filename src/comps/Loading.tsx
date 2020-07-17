import React from 'react';
import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    >
      <ReactLoading type="spin" color="#ffd54f" />
    </div>
  );
}
