import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { linkToAuth } from './constants/routes';
import { useEffect } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import SectionCompanies from './Components/SectionCompanies';
import SectionRegular1 from './Components/SectionRegular1';
import SectionRegular2 from './Components/SectionRegular2';
import BlogSection from './Components/BlogSection';
import SectionRegular3 from './Components/SectionRegular3';
import SectionRegular4 from './Components/SectionRegular4';

const App = () => {
  const isLogged = useSelector((state) => state.auth.loggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate(linkToAuth)
    }
  }, [isLogged, navigate])

  return (
    <>
      <Header />
      <SectionRegular1 />
      <SectionCompanies />
      <SectionRegular2 />
      <SectionRegular3 />
      <BlogSection />
      <SectionRegular4/>
    </>
  );
};

export default App;