import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Texas PLLC Formation</h3>
            <p className="text-sm text-gray-600 mb-4">
              Form your Texas Professional Limited Liability Company in 48 hours. 
              $749 all-inclusive. Transparent pricing. Profession-specific expertise.
            </p>
            <p className="text-xs text-gray-500">
              Not a law firm. This service does not provide legal advice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/therapist" className="text-sm text-gray-600 hover:text-gray-900">
                  Therapist PLLC
                </Link>
              </li>
              <li>
                <Link href="/physician" className="text-sm text-gray-600 hover:text-gray-900">
                  Physician PLLC
                </Link>
              </li>
              <li>
                <Link href="/engineer" className="text-sm text-gray-600 hover:text-gray-900">
                  Engineer PLLC
                </Link>
              </li>
              <li>
                <Link href="/attorney" className="text-sm text-gray-600 hover:text-gray-900">
                  Attorney PLLC
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-sm text-gray-600 hover:text-gray-900">
                  Compare Options
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center space-y-1">
            <p>© {new Date().getFullYear()} Incaroo. All rights reserved.</p>
            <p>
              Incaroo
              <br />
              8911 N Capital of Texas Hwy, Suite 4200
              <br />
              Austin, TX 78759
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

