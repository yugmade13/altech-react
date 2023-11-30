import { ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  return (
    <main className="relative bg-white w-full min-h-screen overflow-x-hidden">
      {children}
    </main>
  );
}

export default Container;