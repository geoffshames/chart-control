'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-10 py-8 border-t border-[#333]/30 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/brand/CC-LOGO-2024-WHITE.png"
              alt="Crowd Control Digital"
              width={32}
              height={32}
              className="w-8 h-auto"
            />
            <span className="text-xs text-[#B8B8C0] tracking-tight">
              CROWD CONTROL DIGITAL
            </span>
          </div>

          <span className="text-xs text-[#B8B8C0] tracking-tight">
            © {new Date().getFullYear()} · CHART CONTROL
          </span>

          <a
            href="mailto:info@crowdcontroldigital.com"
            className="text-xs text-[#FD3737] hover:text-[#FD3737]/80 transition-colors font-mono"
          >
            INFO@CROWDCONTROLDIGITAL.COM
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
