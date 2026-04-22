import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-navy z-[99999] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <img
              src="/logo.png"
              alt="Harbourline"
              className="w-40 mx-auto"
              style={{ animation: 'preloaderPulse 1.5s ease-in-out infinite' }}
            />
            <div className="flex justify-center gap-1.5 mt-8">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-8 bg-gold rounded-sm"
                  style={{
                    animation: 'wave 1.2s ease-in-out infinite',
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
