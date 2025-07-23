'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('./sidebar'), { ssr: false });

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="p-2 bg-gray-200 rounded"
      >
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Optional: Dim background */}
          <div
            className="fixed inset-0 bg-opacity-30 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-20 right-0 w-72 z-50 rounded bg-amber-500 shadow-lg transition-transform duration-300 ease-in-out">
            <Sidebar />
          </div>
        </>
      )}
    </>
  );
}
