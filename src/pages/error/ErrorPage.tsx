import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  const errorMessage = (error: unknown) => {
    if (typeof error === 'string') {
      return error;
    }

    if (error instanceof Error) {
      return error.message;
    }

    if (error && typeof error === 'object' && 'statusText' in error) {
      return String(error.statusText);
    }

    return 'Произошла непредвиденная ошибка.';
  };

  return (
    <div id="error-page">
      <h1>Ошибка</h1>
      <p>
        <i>{errorMessage(error)}</i>
      </p>
    </div>
  );
}
