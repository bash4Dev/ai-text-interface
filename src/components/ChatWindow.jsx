import React from 'react';
import Message from './Message';

const ChatWindow = ({ messages, onSummarize, onTranslate, onTranslationLanguageChange }) => {
  return (
    <div className="output-area" role="log" aria-live="polite">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          onSummarize={onSummarize}
          onTranslate={onTranslate}
          onTranslationLanguageChange={onTranslationLanguageChange}
        />
      ))}
    </div>
  );
};

export default ChatWindow;