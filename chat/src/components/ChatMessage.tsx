import { motion } from 'framer-motion';
import { Bot, User, FileDown } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  pdfUrl?: string;
}

export function ChatMessage({ message, isBot, pdfUrl }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isBot
            ? 'bg-gray-800 text-white'
            : 'bg-purple-600 text-white ml-auto'
        }`}
      >
        {(!pdfUrl || !isBot) && (
          <p className="text-sm whitespace-pre-wrap">{message}</p>
        )}
        {pdfUrl && isBot && (
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-300">Your project report is ready!</p>
            <a
              href={pdfUrl}
              download="project-report.pdf"
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              <FileDown className="w-5 h-5" />
              <span className="font-medium">Download Project Report (PDF)</span>
            </a>
          </div>
        )}
      </motion.div>
      {!isBot && (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </motion.div>
  );
}