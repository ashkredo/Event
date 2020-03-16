import React from 'react';
import Preloader from 'screens/shared/components/common/Preloader';

// High Order Component (hoc)
export const withSuspense = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (
    props: JSX.IntrinsicAttributes & P & { children?: React.ReactNode }
  ) => {
    return (
      <React.Suspense fallback={<Preloader />}>
        <Component {...props} />;
      </React.Suspense>
    );
  };
};
