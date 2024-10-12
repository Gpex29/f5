import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Banner from './Banner';

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