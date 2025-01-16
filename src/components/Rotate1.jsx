const Rotate = () => {
  return (
    <div className="fixed bottom-[9rem] right-[-8rem] md:right-[-7rem] hidden lg:flex items-center gap-6 rotate-90">
      <a
        href="mailto:kelvinewurum@gmail.com"
        className="flex items-center leading-8 tracking-wide"
      >
        <p className="font-mono text-[0.9rem] leading-8 tracking-widest hover:text-green-800 transition-colors">
          kelvinewurum@gmail.com
        </p>
      </a>
      <span className="w-28 h-0.5 bg-slate-400"></span>
    </div>
  );
};

export default Rotate;
