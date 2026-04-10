import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Bot, User, Scale, Gavel, Clock, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface QuickReply {
  text: string;
  action: () => void;
}

const LegalChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your legal assistant at Tri Lex & Juris. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Legal consultation responses
    if (lowerMessage.includes("consultation") || lowerMessage.includes("appointment") || lowerMessage.includes("meeting")) {
      return "I can help you schedule a consultation! You can either:\n\n1. Fill out the consultation form on our website\n2. Call us directly at 9354777703\n3. WhatsApp us at 919354777703\n\nOur office hours are Monday-Saturday: 10:00 AM - 7:00 PM. What type of legal matter are you looking to discuss?";
    }
    
    // Practice area responses
    if (lowerMessage.includes("corporate") || lowerMessage.includes("business")) {
      return "Tri Lex & Juris specializes in Corporate & Business Law including:\n\n- Company formation and compliance\n- Mergers and acquisitions\n- Corporate governance\n- Business contracts\n- Regulatory compliance\n\nWould you like to schedule a consultation for your corporate legal needs?";
    }
    
    if (lowerMessage.includes("civil") || lowerMessage.includes("property") || lowerMessage.includes("dispute")) {
      return "Our Civil & Property Dispute practice covers:\n\n- Property disputes and litigation\n- Land acquisition matters\n- Title verification\n- Property registration\n- Real estate transactions\n\nHow can we assist you with your property matter?";
    }
    
    if (lowerMessage.includes("criminal") || lowerMessage.includes("white collar")) {
      return "Our White-Collar Crime practice handles:\n\n- Economic offenses\n- Financial fraud cases\n- Corporate criminal liability\n- Anti-corruption matters\n- Regulatory investigations\n\nThese matters require immediate attention. Would you like to schedule an urgent consultation?";
    }
    
    // Contact information responses
    if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("address")) {
      return "Here's our contact information:\n\n**Address:** H-81, Sector 63, Noida, Uttar Pradesh\n**Phone:** 9354777703, 9999668409, 9990444453\n**Email:** contact@trilexjuris.com\n**Office Hours:** Mon-Sat: 10:00 AM - 7:00 PM\n\nYou can also reach us via WhatsApp at 919354777703";
    }
    
    // Internship responses
    if (lowerMessage.includes("internship") || lowerMessage.includes("intern") || lowerMessage.includes("legal research")) {
      return "Tri Lex & Juris offers Legal Research Internships! Our internship program includes:\n\n- Legal research and drafting\n- Case analysis and briefing\n- Court proceedings observation\n- Client consultation exposure\n- Professional development\n\nTo apply, please send your resume to contact@trilexjuris.com with 'Legal Research Intern Application' in the subject line. What's your area of legal interest?";
    }
    
    // General responses
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! Welcome to Tri Lex & Juris. I'm here to help you with your legal questions. How can I assist you today?";
    }
    
    if (lowerMessage.includes("services") || lowerMessage.includes("practice areas")) {
      return "Tri Lex & Juris offers comprehensive legal services including:\n\n- Commercial & Corporate Litigation\n- Civil & Property Disputes\n- White-Collar Crime & Economic Offences\n- Insolvency & Recovery Proceedings\n- Arbitration & Dispute Resolution\n- Regulatory & Compliance Litigation\n- Cyber & Technology Law\n- Family & Matrimonial Law\n\nWhich area would you like to know more about?";
    }
    
    // Default response
    return "Thank you for your inquiry. For personalized legal assistance, I recommend scheduling a consultation with our experienced legal team. You can:\n\n1. Call us at 9354777703\n2. WhatsApp us at 919354777703\n3. Fill out the consultation form on our website\n\nIs there a specific area of law you need help with?";
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies: QuickReply[] = [
    {
      text: "Schedule Consultation",
      action: () => {
        const consultationMessage: Message = {
          id: Date.now().toString(),
          text: "I'd like to schedule a consultation",
          sender: "user",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, consultationMessage]);
        setInputValue("");
        setIsTyping(true);
        setTimeout(() => {
          const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: generateBotResponse("consultation"),
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botResponse]);
          setIsTyping(false);
        }, 1000);
      },
    },
    {
      text: "Practice Areas",
      action: () => {
        const servicesMessage: Message = {
          id: Date.now().toString(),
          text: "What are your practice areas?",
          sender: "user",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, servicesMessage]);
        setInputValue("");
        setIsTyping(true);
        setTimeout(() => {
          const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: generateBotResponse("services"),
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botResponse]);
          setIsTyping(false);
        }, 1000);
      },
    },
    {
      text: "Contact Info",
      action: () => {
        const contactMessage: Message = {
          id: Date.now().toString(),
          text: "What's your contact information?",
          sender: "user",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, contactMessage]);
        setInputValue("");
        setIsTyping(true);
        setTimeout(() => {
          const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: generateBotResponse("contact"),
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botResponse]);
          setIsTyping(false);
        }, 1000);
      },
    },
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="xl"
          className="bg-gradient-to-r from-gold to-gold-light text-primary-foreground shadow-[0_4px_20px_hsl(43_52%_59%_/_0.3)] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] rounded-full w-16 h-16 p-0"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gold to-gold-light text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold">Legal Assistant</h3>
            <p className="text-xs opacity-90">Tri Lex & Juris</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="text-primary-foreground hover:bg-white/20"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/30">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3 max-w-[85%]",
              message.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
              message.sender === "user" 
                ? "bg-gradient-gold text-primary-foreground" 
                : "bg-primary text-primary-foreground"
            )}>
              {message.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div className={cn(
              "rounded-2xl px-4 py-3 text-sm leading-relaxed",
              message.sender === "user"
                ? "bg-gradient-gold text-primary-foreground"
                : "bg-background border border-border"
            )}>
              {message.text.split('\n').map((line, index) => (
                <div key={index}>
                  {line}
                  {index < message.text.split('\n').length - 1 && <br />}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-3 max-w-[85%] mr-auto">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-background border border-border rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      {messages.length <= 2 && (
        <div className="px-4 py-2 border-t border-border">
          <div className="flex gap-2 flex-wrap">
            {quickReplies.map((reply, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={reply.action}
                className="text-xs h-8 border-border hover:border-primary hover:text-primary"
              >
                {reply.text}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-border bg-background">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your legal question..."
            className="bg-secondary border-border focus:border-primary"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            size="icon"
            disabled={!inputValue.trim() || isTyping}
            className="bg-gradient-gold text-primary-foreground hover:shadow-lg"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LegalChatbot;
