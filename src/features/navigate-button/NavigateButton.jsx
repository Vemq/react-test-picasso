import { useNavigate } from 'react-router-dom';
import { Button } from '../../shared/ui';

export default function NavigateButton({ navigateTo, children }) {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(navigateTo)}>{children}</Button>;
}
