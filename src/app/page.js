'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Page = () => {
  const { data: session, status } = useSession(); // Dapatkan data session dan status
  
  const handleLogin = () => {
    signIn('google', { callbackUrl: '/' });
  };

  const handleLogout = () => {
    signOut({ callbackUrl: '/' }); // Arahkan pengguna ke halaman utama setelah logout
  };

  useEffect(() => {
    if (status == 'loading' || !session) {
      null
    } else {
      console.log(session.user)
    }
  }, [status])

  // Tampilkan status pengguna
  if (status === 'loading') {
    return <p>Loading...</p>; // Tampilkan loading saat data sesi masih dimuat
  }


  return (
    <main>
      {!session ? (
        <>
          <button onClick={handleLogin}>
            Login with Google
          </button>
        </>
      ) : (
        <>
          <p>Welcome, {session.user.name}!</p>
          <p>Email: {session.user.email}</p>
          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </main>
  );
};

export default Page;
