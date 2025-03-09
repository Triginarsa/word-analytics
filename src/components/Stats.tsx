interface StatsProps {
  stats: {
    numberOfCharacters: number;
    numberOfInstagramLeft: number;
    numberOfFacebookLeft: number;
    numberOfWords: number;
  };
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="Words" />
      <Stat number={stats.numberOfCharacters} label="Characters" />
      <Stat number={stats.numberOfInstagramLeft} label="Instagram" />
      <Stat number={stats.numberOfFacebookLeft} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }: { number: number; label: string }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
