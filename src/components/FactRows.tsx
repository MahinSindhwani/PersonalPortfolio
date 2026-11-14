import type { Fact } from '../data/types';
import rows from '../styles/rows.module.css';

export default function FactRows({ facts }: { facts: Fact[] }) {
  return (
    <dl className={rows.list}>
      {facts.map((fact) => (
        <div key={`${fact.label}-${fact.value}`} className={rows.row}>
          <dt className={rows.label}>{fact.label}</dt>
          <dd className={rows.body}>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
