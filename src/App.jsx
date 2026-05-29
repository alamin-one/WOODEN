import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from './layout/MainLayout';
import { Outlet } from 'react-router';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default App;
