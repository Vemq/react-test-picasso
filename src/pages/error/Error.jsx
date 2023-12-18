import { useRouteError, useParams } from 'react-router-dom';

export default function Error() {
  const { postId } = useParams();
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Ошибка</h1>
      {postId !== undefined ? (
        <p>Пост с номером {postId} не найден.</p>
      ) : (
        <>
          <p>Произошла непредвиденная ошибка.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </>
      )}
    </div>
  );
}
