function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-16 px-6 lg:px-10 h-12 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <a href="/" className="flex items-center justify-center w-8 h-8 text-black hover:opacity-70 transition-opacity" aria-label="Apple">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-black/90">
        <a href="#store" className="hover:text-black transition-colors">Store</a>
        <a href="#watch" className="hover:text-black transition-colors">Watch</a>
        <a href="#support" className="hover:text-black transition-colors">Support</a>
      </nav>
      <div className="flex items-center gap-5">
        <button type="button" className="text-black hover:opacity-70 transition-opacity p-1" aria-label="Search">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button type="button" className="text-black hover:opacity-70 transition-opacity p-1" aria-label="Bag">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
