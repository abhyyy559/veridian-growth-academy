import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const coins = [
  { left: '22%', top: '20%', delay: 0 },
  { left: '38%', top: '60%', delay: 0.5 },
  { left: '59%', top: '18%', delay: 1 },
  { left: '74%', top: '50%', delay: 1.5 },
];

const sparkles = [
  { left: '12%', top: '15%' },
  { left: '28%', top: '40%' },
  { left: '42%', top: '10%' },
  { left: '56%', top: '45%' },
  { left: '70%', top: '25%' },
  { left: '84%', top: '52%' },
];

export default function AnimatedHeroSection() {
  return (
    <div className="relative flex items-center justify-center min-h-[340px] md:min-h-[440px] bg-transparent">
      {/* Animated wrapper */}
      <motion.div
        className="relative w-full h-[340px] md:h-[440px] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Glowing animated background */}
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-br from-primary/40 to-primary-dark/60 rounded-full blur-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        {/* Glass blur layer */}
        <div className="absolute w-full h-full z-5 bg-white/10 backdrop-blur-sm rounded-2xl pointer-events-none" />

        {/* Floating coins */}
        {coins.map((coin, i) => (
          <motion.div
            key={`coin-${i}`}
            className="absolute z-10"
            style={{ left: coin.left, top: coin.top }}
            animate={{
              y: [0, -15 + i * 6, 0],
              rotate: [0, 12 * (i % 2 === 0 ? 1 : -1), 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5 + i,
              delay: coin.delay,
              ease: "easeInOut",
            }}
          >
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <circle cx="19" cy="19" r="18" fill="#FFD700" stroke="#FBBF24" strokeWidth="2" />
              <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" dy=".3em">₹</text>
            </svg>
          </motion.div>
        ))}

        {/* Sparkles */}
        {sparkles.map((sparkle, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute z-20"
            style={{ left: sparkle.left, top: sparkle.top }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{
              repeat: Infinity,
              duration: 2.2 + i * 0.3,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 0L10.7553 6.24472L17 8.00001L10.7553 9.75529L9 16L7.24472 9.75529L1 8.00001L7.24472 6.24472L9 0Z" fill="#fff" fillOpacity="0.7"/>
            </svg>
          </motion.div>
        ))}

        {/* Caption */}
        <motion.div
          className="absolute top-[20%] text-center text-white text-xl md:text-2xl font-semibold z-30"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your Income Journey Starts Here
        </motion.div>

        {/* Animated Rupee Icon + CTA */}
        <motion.div
          className="relative z-30 flex flex-col items-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <motion.div
            className="text-[5rem] md:text-[6rem] font-bold text-primary drop-shadow-[0_0_32px_rgba(251,191,36,0.5)]"
            animate={{ scale: [1, 1.18, 1], textShadow: [
              "0 0 32px #FBBF24AA", "0 0 48px #FBBF24", "0 0 32px #FBBF24AA"
            ] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            ₹
          </motion.div>

          <motion.div
            className="mt-2 flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <div className="w-16 h-1 bg-primary rounded" />
            <div className="w-10 h-1 bg-primary/60 rounded" />
            <div className="w-20 h-1 bg-primary/30 rounded" />
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <Button size="lg" className="bg-green-600 text-white px-8 py-3 shadow-lg" asChild>
              <Link to="/masterclass">
                Start Now
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
