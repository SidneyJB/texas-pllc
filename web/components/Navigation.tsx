'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfessionsOpen, setIsProfessionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfessionsOpen(false);
      }
    }

    if (isProfessionsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfessionsOpen]);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Texas PLLC Formation
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Professions Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProfessionsOpen(!isProfessionsOpen)}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center gap-1"
                  aria-expanded={isProfessionsOpen}
                  aria-haspopup="true"
                >
                  Professions
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isProfessionsOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isProfessionsOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu">
                      <Link
                        href="/therapist"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsProfessionsOpen(false)}
                      >
                        Therapists
                      </Link>
                      <Link
                        href="/physician"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsProfessionsOpen(false)}
                      >
                        Physicians
                      </Link>
                      <Link
                        href="/engineer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsProfessionsOpen(false)}
                      >
                        Engineers
                      </Link>
                      <Link
                        href="/attorney"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsProfessionsOpen(false)}
                      >
                        Attorneys
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/compare"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Pricing & Comparison
              </Link>
              <Link
                href="/checkout"
                className="bg-[#f88b00] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#d97706]"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f88b00]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              href="/therapist"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Therapists
            </Link>
            <Link
              href="/physician"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Physicians
            </Link>
            <Link
              href="/engineer"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Engineers
            </Link>
            <Link
              href="/attorney"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Attorneys
            </Link>
            <Link
              href="/compare"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Compare Options
            </Link>
            <Link
              href="/checkout"
              className="bg-[#f88b00] text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#d97706]"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

