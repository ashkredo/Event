import React from 'react';
import Preloader from 'screens/shared/components/common/Preloader';

// High Order Component (hoc)
export const withSuspense = Component => {
  return props => {
    return (
      <React.Suspense fallback={<Preloader />}>
        <Component {...props} />;
      </React.Suspense>
    );
  };
};
