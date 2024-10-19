import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { linkToAuth } from './constants/routes';
import { useEffect } from 'react';
import Header from './Components/sections/Header';
import Companies from './Components/sections/Companies';
import Jobs from './Components/sections/Jobs';
import Features from './Components/sections/Features';
import Blogs from './Components/sections/Blogs';
import SectionRegular3 from './Components/sections/SectionRegular3';
import SectionRegular4 from './Components/sections/SectionRegular4';
import './styles/normalize.scss';

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
      <Jobs />
      <Companies />
      <Features />
      <SectionRegular3 />
      <Blogs />
      <SectionRegular4/>
    </>
  );
};

export default App;