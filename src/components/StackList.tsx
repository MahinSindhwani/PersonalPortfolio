import styles from './StackList.module.css';

export default function StackList({ items }: { items: string[] }) {
  return (
    <ul className={styles.list} aria-label="Built with">
      {items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
