'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
}

export default function EmptyState({
  icon,
  title,
  description,
  primaryAction,
  secondaryAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center max-w-md w-full"
      >
        <div className="w-16 h-16 bg-zinc-50 border border-zinc-100 rounded-full flex items-center justify-center text-zinc-400 mb-6">
          {icon}
        </div>
        
        <h2 className="text-2xl font-medium text-zinc-900 mb-3">{title}</h2>
        <p className="text-zinc-500 font-light mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {primaryAction && (
            primaryAction.href ? (
              <Link
                href={primaryAction.href}
                className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white text-sm font-medium rounded-sm hover:bg-zinc-800 transition-colors active:scale-[0.98]"
              >
                {primaryAction.label}
              </Link>
            ) : (
              <button
                onClick={primaryAction.onClick}
                className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white text-sm font-medium rounded-sm hover:bg-zinc-800 transition-colors active:scale-[0.98]"
              >
                {primaryAction.label}
              </button>
            )
          )}
          
          {secondaryAction && (
            secondaryAction.href ? (
              <Link
                href={secondaryAction.href}
                className="w-full sm:w-auto px-8 py-3 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-sm hover:bg-zinc-50 transition-colors active:scale-[0.98]"
              >
                {secondaryAction.label}
              </Link>
            ) : (
              <button
                onClick={secondaryAction.onClick}
                className="w-full sm:w-auto px-8 py-3 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-sm hover:bg-zinc-50 transition-colors active:scale-[0.98]"
              >
                {secondaryAction.label}
              </button>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}
