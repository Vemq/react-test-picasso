import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import type { To, NavigateOptions } from 'react-router-dom';
import { Button } from '../../shared/ui';

type NavigateButtonProps = PropsWithChildren<{
  navigateTo: To | number;
  navigateOptions?: NavigateOptions;
}>;

export default function NavigateButton({
  navigateTo,
  navigateOptions,
  children
}: NavigateButtonProps) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        if (typeof navigateTo === 'number') {
          navigate(navigateTo);
        } else {
          navigate(navigateTo, navigateOptions);
        } 
      }}
    >
      {children}
    </Button>
  );
}
