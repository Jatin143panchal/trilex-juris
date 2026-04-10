import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919354777703";

export const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello! I would like to schedule a legal consultation."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-black text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </button>
  );
};
