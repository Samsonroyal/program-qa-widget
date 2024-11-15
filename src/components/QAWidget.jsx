// src/components/QAWidget.jsx
import { useState } from 'react'; // Only import what we need
import { MessageCircle, Send, ChevronDown, ChevronUp } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Sample FAQ data - replace with your actual program information
const programContext = {
  "prerequisites?": "Our programs are open to motivated learners. Basic computer literacy is required.",
  "topics/languages covered?": "The curriculum includes HTML, CSS, JavaScript, and modern web frameworks.",
  "internship opportunities after?": "We have partnerships with leading companies for internship placements.",
  // Add more Q&A pairs based on your program information
};

const QAWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const commonQuestions = [
    "prerequisites?",
    "topics/languages covered?",
    "internship opportunities after?"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    // Add user question to chat
    const newChat = [...chat, { type: 'question', content: question }];

    // Simple answer matching - replace with your actual answer logic
    let answer = programContext[question.toLowerCase()] || 
      "I'd be happy to help you with that question. Please reach out to our program advisors for detailed information.";

    // Add answer to chat
    newChat.push({ type: 'answer', content: answer });
    
    setChat(newChat);
    setQuestion('');
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuestion(suggestion);
    handleSubmit({ preventDefault: () => {} });
  };

  return (
    <div className="fixed bottom-4 right-4 w-96">
      <div className="bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 cursor-pointer bg-blue-600 text-white rounded-t-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2">
            <MessageCircle size={20} />
            <span className="font-semibold">Program Information</span>
          </div>
          {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </div>

        {/* Chat Window */}
        {isOpen && (
          <div className="p-4">
            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto mb-4">
              {chat.length === 0 ? (
                <Alert>
                  <AlertDescription>
                    👋 Hello! How can I help you learn more about our programs?
                  </AlertDescription>
                </Alert>
              ) : (
                chat.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-4 ${
                      msg.type === 'question' 
                        ? 'text-right' 
                        : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        msg.type === 'question'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Suggested Questions */}
            {showSuggestions && chat.length === 0 && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Common questions:</p>
                <div className="flex flex-wrap gap-2">
                  {commonQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(q)}
                      className="text-sm bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

QAWidget.propTypes = {
  // Add any props if needed
};

export default QAWidget;