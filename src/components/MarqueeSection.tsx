const MarqueeSection = () => {
  return (
    <section className="py-12 bg-white overflow-hidden border-t border-b border-secondary-foreground/5">
      <div className="container mb-8 text-center">
        <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Nossos Parceiros e Rede Credenciada
        </h3>
      </div>
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {/* We duplicate the image multiple times to create the infinite scroll effect */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-shrink-0 mx-8">
            <img
              src="/partners/partners_full.png"
              alt="Rede de Parceiros"
              className="h-[300px] object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
