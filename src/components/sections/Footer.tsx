import { Crown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gold-500/10 bg-[#0A0A0F]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Crown className="w-5 h-5 text-gold-500" />
          <span className="font-display text-lg font-bold text-white">The Inner Game System</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          &ldquo;The war is over. The gates to your Kingdom are open. Your Throne awaits.&rdquo;
        </p>
        <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} The Inner Game System. All rights reserved.</p>
      </div>
    </footer>
  );
}
