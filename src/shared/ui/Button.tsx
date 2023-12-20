import { PropsWithChildren } from 'react';
import styles from './Button.module.css';

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
}>;

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
