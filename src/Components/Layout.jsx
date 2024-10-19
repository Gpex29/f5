import { Outlet } from 'react-router-dom';
import Footer from './sections/Footer';
import Banner from './sections/Banner';

export default function Layout() {
  return (
    <>
      <Banner />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}