import { NavigateButton } from '../../features/navigate-button';

import { useGetPostByIdQuery } from '../../shared/api';
import { useParams } from 'react-router-dom';
import styles from './PostPage.module.css';

export default function PostPage() {
  const { postId } = useParams();
  const { data, isFetching } = useGetPostByIdQuery(postId);
  if (isFetching) return <span>Loading...</span>;

  const { id, title, body } = data;
  return (
    <div className={styles.post}>
      <h2 className={styles.title}>
        <span className={styles.id}>{`#${id}`}</span>
        <span>{`${title}`}</span>
      </h2>

      <div className={styles.description}>{body}</div>

      <div className={styles.button}>
        <NavigateButton navigateTo={-1}>назад</NavigateButton>
      </div>
    </div>
  );
}
