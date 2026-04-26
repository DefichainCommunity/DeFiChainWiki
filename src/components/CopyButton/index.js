import React, { useState } from 'react';

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        marginLeft: '8px',
        padding: '2px 8px',
        fontSize: '12px',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '1px solid #ccc',
        background: copied ? '#4CAF50' : '#f0f0f0',
        color: copied ? 'white' : 'black',
      }}
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}
