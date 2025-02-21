import React from 'react';

const InputArea = ({ inputText, setInputText, handleSend }) => {
  return (
    <div className="input-area">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type your text here..."
        aria-label="Input text"
      ></textarea>
      <button className="send-button" onClick={handleSend} aria-label="Send text">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      </button>
    </div>
  );
};

export default InputArea;