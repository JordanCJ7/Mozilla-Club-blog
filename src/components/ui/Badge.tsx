import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-300">
      {children}
    </span>
  );
}
