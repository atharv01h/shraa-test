import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, Bot } from 'lucide-react';
import { getChatResponse } from './lib/gemini';
import { generateProjectReport } from './lib/reportGenerator';
import { ChatMessage } from './components/ChatMessage';

interface Message {
  text: string;
  isBot: boolean;
  pdfUrl?: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm Shraa, your friendly AI assistant created by Birajdar Shraddha Dilip from International Center of Excellence in Engineering and Management. I'm here to help you with coding, projects, and any student-related concerns. I can communicate in English, Marathi, and Hinglish!",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);
    setProgress(0);

    try {
      if (userMessage.toLowerCase().includes('generate project report')) {
        // Start progress animation
        const progressInterval = setInterval(() => {
          setProgress((prev) => Math.min(prev + 10, 90));
        }, 1000);

        const { text, pdfUrl } = await generateProjectReport(userMessage);
        clearInterval(progressInterval);
        setProgress(100);
        
        setMessages((prev) => [
          ...prev,
          { text, isBot: true, pdfUrl },
        ]);
      } else {
        const response = await getChatResponse(userMessage);
        setMessages((prev) => [...prev, { text: response, isBot: true }]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Sorry, I encountered an error. Please try again.',
          isBot: true,
        },
      ]);
    } finally {
      setIsLoading(false);
      setProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-6 fixed top-0 w-full z-10">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <h1 className="text-xl font-bold">Shraa</h1>
          </div>
          <p className="text-sm text-gray-400">by Birajdar Shraddha</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto pt-20 pb-24 px-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isBot={message.isBot}
              pdfUrl={message.pdfUrl}
            />
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-gray-800 rounded-2xl px-4 py-2">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-2 h-2 bg-gray-500 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: 0.2,
                      }}
                      className="w-2 h-2 bg-gray-500 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: 0.4,
                      }}
                      className="w-2 h-2 bg-gray-500 rounded-full"
                    />
                  </div>
                  {progress > 0 && (
                    <div className="w-48">
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          className="h-full bg-purple-500"
                        />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Generating report... {progress}%
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4"
      >
        <div className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message... (Try 'Generate project report for...')"
            className="flex-1 bg-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-purple-600 hover:bg-purple-700 rounded-full p-2 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;