import { useEffect, useCallback } from 'react';

import { FooterStyled, Team } from './Footer.styled';

const Footer = () => {
  const closeModal = useCallback(() => {
    console.log('Closing modal');
    // Adaugă logica pentru închiderea modalului aici
  }, []);

  useEffect(() => {
    const handleCloseModal = e => {
      if (e.type === 'keydown' && e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [closeModal]); // Adăugăm closeModal în lista de dependențe

  return (
    <FooterStyled>
      <Team onClick={closeModal} className="opened"></Team>
    </FooterStyled>
  );
};

export default Footer;
