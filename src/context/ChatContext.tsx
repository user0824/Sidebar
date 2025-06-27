import React, { createContext, useContext, useState } from 'react';

// establish type for messages to differentiate between user and assistant
type Message = { id: string; role: 'user' | 'assistant'; content: string };

// typing for chatContext
type ChatContextType = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// okay we need a function thats going to establish the chatContext when invoked
export const useChatContext = () => {
  const ctx = useContext(ChatContext);
  // just like the board context, we need to throw an error if the context
  if (!ctx) throw new Error('useChatContext must be used within ChatProvider');
  return ctx;
};

// create chat state here to make available by freshly loaded chat component
export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        input,
        setInput,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
