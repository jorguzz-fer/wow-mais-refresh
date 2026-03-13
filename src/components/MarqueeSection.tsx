const words = ["saúde", "assistência", "clube", "proteção", "família", "bem-estar", "cashback", "cuidado"];

const MarqueeSection = () => {
  return (
    <section className="py-8 bg-warm-gray overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className="font-display text-6xl md:text-8xl font-bold text-foreground/5 mx-6"
          >
            {word} •
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
