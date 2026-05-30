import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from './layout/MainLayout';
import { Outlet } from 'react-router';
import AuthContextprovider from './contexts/auth/AuthContextprovider';
import DbContextprovider from './contexts/dB/DbContextprovider';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <AuthContextprovider>
        <DbContextprovider>
          <Toaster position="top-center" reverseOrder={true} />
          <MainLayout>
            <Outlet />
          </MainLayout>
        </DbContextprovider>
      </AuthContextprovider>
    </>
  );
}

export default App;
