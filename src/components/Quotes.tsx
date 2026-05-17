import { useState, useCallback } from "react";
import quotes from "../content/quotes.json";

export default function Quotes() {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * quotes.length)
  );

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % quotes.length);
  }, []);

  const quote = quotes[index];

  return (
    <section id="quotes" className="py-24 px-6 bg-charcoal/[0.02]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-12">
          Classical Wisdom, Engineering Lens
        </h2>

        <blockquote className="mb-8">
          <p className="text-xl md:text-2xl font-serif text-charcoal leading-relaxed italic">
            &ldquo;{quote.classical}&rdquo;
          </p>
          <div className="mt-6 p-4 rounded-lg bg-accent/[0.04] border border-accent/10 text-left">
            <p className="text-sm text-stone leading-relaxed">
              <span className="text-accent font-medium">→ Engineering interpretation: </span>
              {quote.engineering}
            </p>
          </div>
          {quote.note && (
            <footer className="mt-4 text-sm text-muted">— {quote.note}</footer>
          )}
        </blockquote>

        <button
          onClick={next}
          className="px-5 py-2 text-sm font-medium text-accent border border-accent/30 rounded-md hover:bg-accent/5 transition-colors"
        >
          Next insight →
        </button>
      </div>
    </section>
  );
}
