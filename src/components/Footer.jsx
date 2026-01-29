function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full py-4 bg-white/5 backdrop-blur-sm border-t border-black/5" style={{marginTop: '-50px'}}>
      <div className="flex items-center justify-center">
        <p className="text-sm text-black/70">
          © {year} Ali Youssef. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
