import { useEffect } from 'react'; // Importăm doar useEffect din react, deoarece nu mai avem nevoie de useState
// import { IoMdClose } from 'react-icons/io'; // Importăm doar IoMdClose din react-icons/io

import { FooterStyled, Team } from './Footer.styled'; // Importăm FooterStyled și Team din ./Footer.styled

const Footer = () => {
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
  }, []); // Am eliminat handleCloseModal din array-ul de dependințe, deoarece nu are dependințe externe

  const closeModal = () => {
    // Funcția closeModal ar trebui să fie definită înainte de a fi folosită
    // în handleCloseModal pentru a evita erorile
  };

  return (
    <FooterStyled>
      <Team onClick={closeModal} className="opened"></Team>
    </FooterStyled>
  );
};

export default Footer;
