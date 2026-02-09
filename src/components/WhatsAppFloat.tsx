import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918903917600?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20WOK%20N%20KNIFE"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-body text-sm font-semibold"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
