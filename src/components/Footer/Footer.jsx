import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

import { FooterStyled, Team } from './Footer.styled';

const Footer = () => {
  const closeModal = () => {
    // Definim funcția closeModal pentru a închide modalul
    console.log('Closing modal');
    // Poți adăuga aici logica necesară pentru închiderea modalului
  };

  const handleCloseModal = e => {
    if (e.type === 'keydown' && e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [handleCloseModal]); // Adăugăm handleCloseModal în array-ul de dependințe pentru useEffect

  return (
    <FooterStyled>
      <Team onClick={closeModal} className="opened">
        <div className="wrapper">
          <IoMdClose />
          {/* Aici poți adăuga conținutul modalului */}
        </div>
      </Team>
    </FooterStyled>
  );
};

export default Footer;
