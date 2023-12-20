import { NavigateButton } from '../../features/navigate-button';
import styles from './PostItem.module.css';

interface PostItemProps {
  id: number;
  title: string;
  description: string;
}

export default function PostItem({ id, title, description }: PostItemProps) {
  return (
    <div className={styles.post}>
      <div className={styles.title}>
        <div>
          <span className={styles.id}>{`#${id}`}</span>
          <span>{`${title}`}</span>
        </div>
        <NavigateButton navigateTo={`${id}`}>просмотр</NavigateButton>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
