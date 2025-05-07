import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useBackButtonRedirect = (r) => {
  const router = useRouter();

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      router.replace(r);
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [router]);
};

export default useBackButtonRedirect;
